import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { topperProperties } from '../../data/pages'
import { LogoLink } from '../nav/logo'
import { Contact } from '../nav/contact'

import './header.sass'

export const Header: React.FC = () => {
    const { pathname } = useLocation()

    const topper = (
        <div className="topper">
            {Object.entries(topperProperties).map(([key, { src, alt, link }]) => (
                <Link key={key} className={key} to={link}>
                    <img
                        className={`${key} ${pathname.includes(link) ? 'active' : ''}`}
                        src={src}
                        alt={alt}
                    />
                </Link>
            ))}
        </div>
    )

    return (
        <header className="page-header">
            <div className="info">
                <LogoLink />
                <Contact />
            </div>
            {topper}
        </header>
    )
}
