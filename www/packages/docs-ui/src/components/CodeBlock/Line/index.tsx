import React, { useMemo } from "react"
import { Highlight } from ".."
import { RenderProps, Token } from "prism-react-renderer"
import clsx from "clsx"
import { MarkdownContent, Tooltip } from "@/components"

type HighlightedTokens = {
  start: number
  end: number
  highlight: Highlight
}

type TokensWithHighlights = {
  tokens: Token[]
  type: "default" | "highlighted"
  highlight?: Highlight
}

type CodeBlockLineProps = {
  line: Token[]
  highlights?: Highlight[]
  lineNumber: number
  showLineNumber: boolean
  lineNumberColorClassName: string
  lineNumberBgClassName: string
  isTerminal: boolean
} & Pick<RenderProps, "getLineProps" | "getTokenProps">

export const CodeBlockLine = ({
  line,
  highlights = [],
  lineNumber,
  getLineProps,
  getTokenProps,
  showLineNumber,
  lineNumberColorClassName,
  lineNumberBgClassName,
  isTerminal,
}: CodeBlockLineProps) => {
  const lineProps = getLineProps({ line, key: lineNumber })

  // collect highlighted tokens, if there are any
  const highlightedTokens: HighlightedTokens[] = useMemo(() => {
    const highlightedTokensArr: HighlightedTokens[] = []
    highlights.forEach((highlight) => {
      if (!highlight.text) {
        return
      }
      let startIndex: number | undefined = undefined
      let currentPositionInHighlightedText = 0
      let endIndex = 0
      const found = line.some((token, tokenIndex) => {
        if (token.empty || !token.content.length) {
          startIndex = undefined
          currentPositionInHighlightedText = 0
          return false
        }
        const startNotSet = startIndex === undefined
        // trim the start of the script if the start
        // of the highlight hasn't been found yet
        const tokenContent = startNotSet
          ? token.content.trimStart()
          : token.content
        if (!tokenContent.length && startNotSet) {
          return false
        }
        const comparisonLength = Math.min(
          tokenContent.length,
          highlight.text!.substring(currentPositionInHighlightedText).length
        )
        const nextPositionInHighlightedText =
          currentPositionInHighlightedText + comparisonLength

        const canHighlight =
          !highlightedTokensArr.length ||
          !highlightedTokensArr.some(
            (token) => tokenIndex >= token.start && tokenIndex <= token.end
          )

        const isMatching =
          tokenContent.substring(0, comparisonLength) ===
          highlight.text?.substring(
            currentPositionInHighlightedText,
            nextPositionInHighlightedText
          )

        if (isMatching && canHighlight) {
          if (startNotSet) {
            startIndex = tokenIndex
          }
          currentPositionInHighlightedText = nextPositionInHighlightedText
        }

        if (currentPositionInHighlightedText === highlight.text!.length) {
          // matching text was found, break loop
          endIndex = tokenIndex
          return true
        }
      })

      if (found && startIndex !== undefined) {
        highlightedTokensArr.push({
          start: startIndex,
          end: endIndex,
          highlight,
        })
      }
    })

    // sort highlighted tokens by their start position
    highlightedTokensArr.sort((tokensA, tokensB) => {
      if (tokensA.start < tokensB.start) {
        return -1
      }

      return tokensA.start > tokensB.start ? 1 : 0
    })

    return highlightedTokensArr
  }, [highlights, line])

  // if there are highlighted tokens, split tokens in the
  // line by segments of not highlighted and highlighted token
  // if there are no highlighted tokens, the line is used as-is.
  const transformedLine: TokensWithHighlights[] = useMemo(() => {
    if (!highlightedTokens.length) {
      return [
        {
          tokens: line,
          type: "default",
        },
      ]
    }
    const transformedLineArr: TokensWithHighlights[] = []

    let lastIndex = 0
    // go through highlighted tokens to add the segments before/after to the
    // transformLineArr array
    highlightedTokens.forEach((highlightedTokensItem, index) => {
      if (lastIndex < highlightedTokensItem.start) {
        transformedLineArr.push({
          tokens: line.slice(lastIndex, highlightedTokensItem.start),
          type: "default",
        })
      }
      // check if the start text should be trimmed
      const token = Object.assign({}, line[highlightedTokensItem.start])
      if (
        token.content.startsWith(" ") &&
        !highlightedTokensItem.highlight.text?.startsWith(" ")
      ) {
        const originalLength = token.content.length
        token.content = token.content.trimStart()
        // push the spaces as a separate token
        // so that they won't be highlighted.
        transformedLineArr.push({
          tokens: [
            {
              content: " ".repeat(originalLength - token.content.length),
              types: ["plain"],
            },
          ],
          type: "default",
        })
      }
      transformedLineArr.push({
        tokens: [
          token,
          ...line.slice(
            highlightedTokensItem.start + 1,
            highlightedTokensItem.end + 1
          ),
        ],
        type: "highlighted",
        highlight: highlightedTokensItem.highlight,
      })
      lastIndex = highlightedTokensItem.end + 1

      // if this is the last item in `highlightedTokens` and
      // its end index is less than the line's length, that means
      // there are tokens at the end of the line that aren't highlighted
      // and should be pushed as-is to the `transformLineArr` array.
      if (
        index === highlightedTokens.length - 1 &&
        lastIndex < line.length - 1
      ) {
        transformedLineArr.push({
          tokens: line.slice(lastIndex),
          type: "default",
        })
      }
    })

    return transformedLineArr
  }, [highlightedTokens])

  const getTokensElm = ({
    tokens,
    isTokenHighlighted,
    isLineHighlighted,
    offset,
  }: {
    tokens: Token[]
    isTokenHighlighted: boolean
    isLineHighlighted: boolean
    offset: number
  }) => (
    <span
      className={clsx(
        isTokenHighlighted && "lg:bg-medusa-contrast-border-base cursor-default"
      )}
    >
      {tokens.map((token, key) => {
        const tokenKey = offset + key
        const { className: tokenClassName, ...rest } = getTokenProps({
          token,
          key: tokenKey,
        })
        return (
          <span
            key={tokenKey}
            className={clsx(
              tokenClassName,
              (isTokenHighlighted || isLineHighlighted) &&
                "!text-medusa-contrast-fg-primary"
            )}
            {...rest}
          />
        )
      })}
    </span>
  )

  const isHighlightedLine = useMemo(
    () => highlights.length !== 0 && highlightedTokens.length === 0,
    [highlights, highlightedTokens]
  )

  return (
    <span
      key={lineNumber}
      {...lineProps}
      className={clsx(
        "table-row",
        isHighlightedLine && "bg-medusa-contrast-border-base",
        lineProps.className
      )}
    >
      {(showLineNumber || isTerminal) && (
        <span
          className={clsx(
            "mr-docs_1 table-cell select-none",
            "sticky left-0 w-[1%] px-docs_1 text-right",
            lineNumberColorClassName,
            lineNumberBgClassName
          )}
        >
          {isTerminal ? "❯" : showLineNumber ? lineNumber + 1 : ""}
        </span>
      )}
      <span>
        {transformedLine.map(({ tokens, type, highlight }, index) => {
          const offset =
            index === 0 ? 0 : transformedLine[index - 1].tokens.length
          const tooltipText =
            highlight?.tooltipText ||
            (isHighlightedLine
              ? highlights.find((h) => h.tooltipText !== undefined)?.tooltipText
              : undefined)
          const isHighlighted = type === "highlighted"
          return (
            <React.Fragment key={index}>
              {tooltipText && (
                <Tooltip
                  text={tooltipText}
                  tooltipClassName="font-base"
                  render={({ content }) => (
                    <MarkdownContent
                      allowedElements={["a", "strong", "code", "br"]}
                      unwrapDisallowed={true}
                    >
                      {content || ""}
                    </MarkdownContent>
                  )}
                >
                  {getTokensElm({
                    tokens,
                    isTokenHighlighted: isHighlighted,
                    offset,
                    isLineHighlighted: isHighlightedLine,
                  })}
                </Tooltip>
              )}
              {!tooltipText &&
                getTokensElm({
                  tokens,
                  isTokenHighlighted: isHighlighted,
                  offset,
                  isLineHighlighted: isHighlightedLine,
                })}
            </React.Fragment>
          )
        })}
      </span>
    </span>
  )
}
