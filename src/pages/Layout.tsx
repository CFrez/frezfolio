import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../components'
import { cn, useIsMobile } from '@/lib'

export const Layout: React.FC = () => {
    const isMobile = useIsMobile()

    return (
        <div
            className={cn(
                `
            mx-auto my-0
            min-h-screen h-full
            min-w-96
            flex flex-col gap-0
        `,
                isMobile ? 'overflow-x-auto' : 'overflow-hidden',
            )}
        >
            <Header />
            <div
                className={cn(
                    `
                flex flex-col gap-8
                p-8 sm:py-0
                [&>main]:flex-1
            `,
                    !isMobile && 'overflow-x-auto',
                )}
            >
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
