import React, {type ReactNode} from 'react'

import './section.sass'

interface PageSectionProps {
    title: string
    children: ReactNode
}

export const PageSection: React.FC<PageSectionProps> = ({
    title,
    children
}) => {
    return (
        <section className="page-section">
            <h2>{title}</h2>
            {children}
        </section>
    )
}
