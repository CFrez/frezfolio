import { useEffect, useMemo, useState } from 'react'

import type { Theme } from './types'

export function useTheme() {
    const matchDark = '(prefers-color-scheme: dark)'
    const [theme, setTheme] = useState<Theme>(() =>
        window.matchMedia(matchDark).matches ? 'dark' : 'light',
    )

    useEffect(() => {
        const onThemeChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light')
        }

        // Listen for changes to the prefers-color-scheme media query
        const darkMatcher = window.matchMedia(matchDark)
        darkMatcher.addEventListener('change', onThemeChange)
        return () => darkMatcher.removeEventListener('change', onThemeChange)
    }, [])

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
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
