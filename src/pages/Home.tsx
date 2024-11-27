import React from 'react'

import { Hero, Contact, LogoLink } from '../components'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export const Home: React.FC = () => {
    return (
        <main
            id="home"
            className={`
                justify-center overflow-hidden 
                h-screen w-screen
                flex flex-col
                bg-gradient-to-b from-secondary-200 to-primary-500
                dark:from-primary-900 dark:to-secondary-300
            `}
        >
            <div
                className={`
                    flex flex-row w-full
                    justify-between items-start
                    px-6 pt-4
                `}
            >
                <LogoLink />
                <div className="flex flex-row gap-3">
                    <Contact />
                    <ThemeToggle />
                </div>
            </div>
            <h1
                className={`
                    grow
                    flex flex-col w-full gap-6 
                    justify-center items-center text-center
                    text-4xl sm:text-5xl
                `}
            >
                Designer & Engineer
                <br />
                in any medium
            </h1>
            <Hero />
        </main>
    )
}
