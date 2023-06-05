import React from 'react'
import { Link } from 'react-router-dom'

import { PageUrl } from '../../data/pages'

import { Logo } from '../../assets/logo'

import './logo.sass'

export const LogoLink: React.FC = () => {
    return (
        <div className="logo-link">
            <Link to={PageUrl.Home} >
                <Logo />
            </Link>
        </div>
    )
}
