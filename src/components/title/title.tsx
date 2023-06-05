import React from 'react'

import './title.sass'

interface PageTitleProps {
    title: string
    subtitle?: string
    description?: string
}


export const PageTitle: React.FC<PageTitleProps> = ({title, subtitle, description}) => {
    return (
        <section className='title'>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {description && <p>{description}</p>}
        </section>
    )
}
