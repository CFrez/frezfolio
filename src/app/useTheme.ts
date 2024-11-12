import { useEffect, useMemo, useState } from 'react'

import type { Theme } from '../types'

export function useTheme() {
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

    const isLight = useMemo(() => theme === 'light', [theme])
    const isDark = useMemo(() => theme === 'dark', [theme])

    return {
        theme,
        toggleTheme,
        isLight,
        isDark,
    }
}
