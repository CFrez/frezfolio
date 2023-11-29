import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header, Nav } from '../components'

export const Layout: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}
