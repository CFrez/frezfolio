import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

import { useAppContext } from '@/app/App.context'
import { Toggle } from '@/components/ui/toggle'
import { cn, useIsTablet } from '@/lib'

export const ThemeToggle: React.FC = () => {
    const { isLight, toggleTheme } = useAppContext()
    const isTablet = useIsTablet()

    return (
        <Toggle
            pressed={isLight}
            onPressedChange={toggleTheme}
            className={cn(isLight ? 'hover:text-secondary' : 'hover:text-primary')}
            size={isTablet ? 'xs' : 'sm'}
        >
            {isLight ? <SunIcon /> : <MoonIcon />}
        </Toggle>
    )
}
