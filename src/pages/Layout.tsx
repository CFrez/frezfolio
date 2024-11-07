import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../components'

export const Layout: React.FC = () => {
    return (
        <div
            className={`
            overflow-hidden
            mx-auto my-0
            min-h-screen h-full
            min-w-96
            flex flex-col gap-0
        `}
        >
            <Header />
            <div
                className={`
                flex flex-col gap-8
                p-8 sm:py-0
                overflow-x-auto 
                [&>main]:flex-1
            `}
            >
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
