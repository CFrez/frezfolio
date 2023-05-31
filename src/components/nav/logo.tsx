import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { PageUrl } from '../../data/pages'

import { Logo } from '../../assets/logo'

import './logo.sass'

export const LogoLink: React.FC = () => {
    const { pathname } = useLocation()

    const isAbout = pathname === PageUrl.About

    return (
        <div className="logo-link">
            <Link
                to={isAbout ? PageUrl.Home : PageUrl.About}
                className={isAbout ? 'home' : 'about'}
            >
                <Logo />
            </Link>
        </div>
    )
}
