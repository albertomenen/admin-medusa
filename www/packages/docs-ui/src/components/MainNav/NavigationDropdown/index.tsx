"use client"

import clsx from "clsx"
import React, { useMemo, useRef, useState } from "react"
import { MainNavigationDropdownSelected } from "./Selected"
import { MainNavigationDropdownMenu } from "./Menu"
import { useAnalytics, useClickOutside, useMainNav } from "../../.."

export const MainNavigationDropdown = () => {
  const { navItems: items } = useMainNav()
  const navigationRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const { track } = useAnalytics()
  useClickOutside({
    elmRef: navigationRef,
    onClickOutside: () => {
      setMenuOpen(false)
    },
  })

  const selectedItem = useMemo(() => {
    const activeItem = items.find(
      (item) => item.type === "link" && item.isActive
    )

    if (!activeItem) {
      return items.length ? items[0] : undefined
    }

    return activeItem
  }, [items])
  return (
    <div className={clsx("relative z-50")} ref={navigationRef}>
      {selectedItem && (
        <MainNavigationDropdownSelected
          item={selectedItem}
          onClick={() => {
            setMenuOpen((prev) => !prev)
            if (!menuOpen) {
              track("nav_main_open", {
                url: window.location.href,
              })
            }
          }}
          isActive={menuOpen}
        />
      )}
      <MainNavigationDropdownMenu
        items={items}
        open={menuOpen}
        onSelect={() => setMenuOpen(false)}
      />
    </div>
  )
}
