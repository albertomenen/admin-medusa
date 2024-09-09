"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react"
import { BadgeProps, Modal, Search, SearchProps } from "@/components"
import { checkArraySameElms } from "../../utils"
import {
  liteClient as algoliasearch,
  LiteClient as SearchClient,
} from "algoliasearch/lite"
import clsx from "clsx"
import { CSSTransition, SwitchTransition } from "react-transition-group"

export type SearchCommand = {
  name: string
  component: React.ReactNode
  icon?: React.ReactNode
  title: string
  badge?: BadgeProps
}

export type SearchContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  defaultFilters: string[]
  setDefaultFilters: (value: string[]) => void
  searchClient: SearchClient
  commands: SearchCommand[]
  command: SearchCommand | null
  setCommand: React.Dispatch<React.SetStateAction<SearchCommand | null>>
  modalRef: React.MutableRefObject<HTMLDialogElement | null>
}

const SearchContext = createContext<SearchContextType | null>(null)

export type AlgoliaProps = {
  appId: string
  apiKey: string
  mainIndexName: string
  indices: string[]
}

export type SearchProviderProps = {
  children: React.ReactNode
  initialDefaultFilters?: string[]
  algolia: AlgoliaProps
  searchProps: Omit<SearchProps, "algolia">
  commands?: SearchCommand[]
  modalClassName?: string
}

export const SearchProvider = ({
  children,
  initialDefaultFilters = [],
  searchProps,
  algolia,
  commands = [],
  modalClassName,
}: SearchProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [defaultFilters, setDefaultFilters] = useState<string[]>(
    initialDefaultFilters
  )
  const [command, setCommand] = useState<SearchCommand | null>(null)

  const modalRef = useRef<HTMLDialogElement | null>(null)

  const searchClient: SearchClient = useMemo(() => {
    const algoliaClient = algoliasearch(algolia.appId, algolia.apiKey)
    return {
      ...algoliaClient,
      async search(searchParams) {
        const requests =
          "requests" in searchParams ? searchParams.requests : searchParams
        const noQueries = requests.every(
          (item) =>
            ("facetQuery" in item && !item.facetQuery) ||
            ("query" in item && !item.query)
        )
        if (noQueries) {
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
              hitsPerPage: 0,
              exhaustiveNbHits: false,
              query: "",
              params: "",
            })),
          })
        }

        return algoliaClient.search(searchParams)
      },
    }
  }, [algolia.appId, algolia.apiKey])

  useEffect(() => {
    if (
      initialDefaultFilters.length &&
      !checkArraySameElms(defaultFilters, initialDefaultFilters)
    ) {
      setDefaultFilters(initialDefaultFilters)
    }
  }, [initialDefaultFilters])

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        setIsOpen,
        defaultFilters,
        setDefaultFilters,
        searchClient,
        commands,
        command,
        setCommand,
        modalRef,
      }}
    >
      {children}
      <Modal
        contentClassName={clsx(
          "!p-0 overflow-hidden relative h-full",
          "flex flex-col justify-between"
        )}
        modalContainerClassName="sm:h-[480px] sm:max-h-[480px]"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        passedRef={modalRef}
        className={modalClassName}
      >
        <SwitchTransition>
          <CSSTransition
            classNames={{
              enter:
                command === null
                  ? "animate-fadeInLeft animate-fast"
                  : "animate-fadeInRight animate-fast",
              exit:
                command === null
                  ? "animate-fadeOutLeft animate-fast"
                  : "animate-fadeOutRight animate-fast",
            }}
            timeout={250}
            key={command?.name || "search"}
          >
            <>
              {command === null && (
                <Search {...searchProps} algolia={algolia} />
              )}
              {command?.component}
            </>
          </CSSTransition>
        </SwitchTransition>
      </Modal>
    </SearchContext.Provider>
  )
}

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error("useSearch must be used inside a SearchProvider")
  }

  return context
}
