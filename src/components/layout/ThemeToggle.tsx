import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

import { useAppContext } from '@/app/App.context'
import { Toggle } from '@/components/ui/toggle'
import { cn, useIsMobile } from '@/lib'

export const ThemeToggle: React.FC = () => {
    const { isLight, toggleTheme } = useAppContext()
    const isMobile = useIsMobile()

    return (
        <Toggle
            pressed={isLight}
            onPressedChange={toggleTheme}
            className={cn(isLight ? 'hover:text-secondary' : 'hover:text-primary')}
            size={isMobile ? 'xs' : 'sm'}
        >
            {isLight ? <SunIcon /> : <MoonIcon />}
        </Toggle>
    )
}
