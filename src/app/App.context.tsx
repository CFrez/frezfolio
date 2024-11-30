import React from 'react'

import { useCategories } from '../pages/categories/useCategories'
import { useTheme } from './useTheme'

export function useAppContextHook() {
    const categories = useCategories()
    const theme = useTheme()

    return {
        ...categories,
        ...theme,
    }
}

export const AppContext = React.createContext<
    ReturnType<typeof useAppContextHook> | undefined
>(undefined)

export function useAppContext() {
    const context = React.useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContext.Provider')
    }
    return context
}
