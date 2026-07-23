import { createContext, useContext, useMemo, type ReactNode } from 'react'

import { navigationItems, searchScopes, userMenuItems, userProfile } from '@/data/mockData'

type AppContextValue = {
  user: typeof userProfile
  navigationItems: typeof navigationItems
  userMenuItems: typeof userMenuItems
  searchScopes: typeof searchScopes
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const value = useMemo(
    () => ({
      user: userProfile,
      navigationItems,
      userMenuItems,
      searchScopes,
    }),
    [],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
