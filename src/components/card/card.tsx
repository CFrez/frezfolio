import React, {ReactNode} from 'react'
import { Link } from 'react-router-dom'

import './card.sass'

interface LinkCardProps {
    title: string
    graphic: ReactNode
    url: string
    className: string
    subtitle?: string
    description?: string
}


export const LinkCard: React.FC<LinkCardProps> = ({title, url, subtitle, className, description, graphic}) => {
    return (
        <Link to={url} className={`link-card ${className}`}>
            <article>
                <header>
                <h2>{title}</h2>
                {subtitle && <p className='subtitle'>{subtitle}</p>}
                </header>
                {description && <p>{description}</p>}
                <div className='graphic'>{graphic}</div>
            </article>
        </Link>
    )
}
