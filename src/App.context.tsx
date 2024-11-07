import React, { useEffect, useState } from 'react'
import { allCategories, Category } from './data/categories'
import type { Theme } from './types'

export function useAppContextHook() {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme as Theme)
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

    const [activeCategories, setActiveCategory] = useState<Category[]>(allCategories)

    const toggleCategory = (category: Category) => {
        setActiveCategory((prev) => {
            if (prev.includes(category)) {
                return prev.filter((c) => c !== category)
            } else {
                return [...prev, category]
            }
        })
    }

    const setCategory = (category: Category) => setActiveCategory([category])

    const resetCategories = () => setActiveCategory(allCategories)

    const scrollToCategory = (category: Category) => {
        const element = document.getElementById(category)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return {
        theme,
        toggleTheme,
        activeCategories,
        toggleCategory,
        setCategory,
        scrollToCategory,
        resetCategories,
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
