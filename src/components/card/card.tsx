import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import './card.sass'

interface LinkCardProps {
    className: string
    children: ReactNode
    graphic: ReactNode
    title: string
    url: string
    notes?: string
    subtitle?: string
}

export const LinkCard: React.FC<LinkCardProps> = ({
    className,
    children,
    graphic,
    notes,
    subtitle,
    title,
    url,
}) => {
    return (
        <Link to={url} className={`link-card ${className}`}>
            <article>
                <header>
                    <h2>{title}</h2>
                    {subtitle && <p className="subtitle">{subtitle}</p>}
                </header>
                {<div className="details">{children}</div>}
                {notes && <footer>{notes}</footer>}
                <div className="graphic">{graphic}</div>
            </article>
        </Link>
    )
}
