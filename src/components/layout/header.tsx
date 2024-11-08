import React from 'react'

import { CategoryFilter } from '../category/CategoryFilter'

import { LogoLink } from './logo'
import { Contact } from './contact'
import { Nav } from './nav'
import { useAppContext } from '@/App.context'
import { Toggle } from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useAppContext()
    return (
        <header
            className={`
            bg-[url(images/topper/light-sky.svg)] 
            dark:bg-[url(images/topper/dark-sky.svg)]
            border-b-2 sm:border-b-[6px] 
            border-neutral-800
        `}
        >
            <div className="flex flex-col w-full gap-0 items-center justify-center">
                <div className="flex flex-row w-full max-w-7xl justify-between items-start px-6 pt-4">
                    <div className="flex flex-row gap-6">
                        <LogoLink />
                        <Nav />
                    </div>
                    <div className="flex flex-col items-end gap-6">
                        <Contact />
                        <Toggle pressed={theme === 'light'} onPressedChange={toggleTheme}>
                            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                        </Toggle>
                    </div>
                </div>
                <CategoryFilter />
            </div>
        </header>
    )
}
