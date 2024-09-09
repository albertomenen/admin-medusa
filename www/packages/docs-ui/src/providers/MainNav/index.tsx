"use client"

import React, { createContext, useContext, useMemo } from "react"
import { NavigationDropdownItem } from "types"

export type MainNavContext = {
  navItems: NavigationDropdownItem[]
  activeItem?: NavigationDropdownItem
  reportIssueLink: string
  editDate?: string
}

const MainNavContext = createContext<MainNavContext | null>(null)

export type MainNavProviderProps = {
  navItems: NavigationDropdownItem[]
  reportIssueLink: string
  editDate?: string
  children?: React.ReactNode
}

export const MainNavProvider = ({
  navItems,
  reportIssueLink,
  children,
  editDate,
}: MainNavProviderProps) => {
  const activeItem = useMemo(
    () => navItems.find((item) => item.type === "link" && item.isActive),
    [navItems]
  )

  return (
    <MainNavContext.Provider
      value={{
        navItems,
        activeItem,
        reportIssueLink,
        editDate,
      }}
    >
      {children}
    </MainNavContext.Provider>
  )
}

export const useMainNav = () => {
  const context = useContext(MainNavContext)

  if (!context) {
    throw new Error("useMainNav must be used within a MainNavProvider")
  }

  return context
}
