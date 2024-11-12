import React from 'react'

import { CategoryFilterImage } from '../category'

import { LogoLink } from './LogoLink'
import { Contact } from './Contact'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'

export const Header: React.FC = () => {
    return (
        <header
            className={`
            bg-contain bg-repeat-x bg-center
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
                    <div
                        className={`
                            flex flex-row gap-2
                        `}
                    >
                        <Contact />
                        <ThemeToggle />
                    </div>
                </div>
                <CategoryFilterImage />
            </div>
        </header>
    )
}
