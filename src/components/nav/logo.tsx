import React from 'react'
import { Link } from 'react-router-dom'

import { PageUrl } from '../../pages/urls'

import { Logo } from '../../assets/logo'

import './logo.sass'

export const LogoLink: React.FC = () => {
    return (
        <div className="logo-link">
            <Link to={PageUrl.Home}>
                <Logo />
            </Link>
        </div>
    )
}
