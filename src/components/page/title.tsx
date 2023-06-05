import React, { type ReactNode } from 'react'

import './title.sass'

interface PageTitleProps {
    title: string
    subtitle?: string
    children?: ReactNode
}

export const PageTitle: React.FC<PageTitleProps> = ({
    title,
    subtitle,
    children,
}) => {
    return (
        <header className="page-title">
            <h1>{title}</h1>
            {subtitle && <p className='subtitle'>{subtitle}</p>}
            {children && <div className='description'>{children}</div>}
        </header>
    )
}
