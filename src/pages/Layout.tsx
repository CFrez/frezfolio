import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header, Nav } from '../components'

export const Layout: React.FC = () => {
    return (
        <div
            className={`
            bg-background
            mx-auto my-0
            min-h-screen h-full
            min-w-96
            flex flex-col gap-0
            [&>main]:flex-1
            [&>main]:flex [&>main]:flex-col [&>main]:gap-6 [&>main]:md:gap-8
            [&>main]:px-8 [&>main]:py-8 [&>main]:md:py-10
        `}
        >
            <Header />
            {/* <Nav /> */}
            <Outlet />
            <Footer />
        </div>
    )
}
