import React, {type ReactNode} from 'react'

import './section.sass'

interface PageSectionProps {
    title: string
    children: ReactNode
    className?: string
}

export const PageSection: React.FC<PageSectionProps> = ({
    title,
    children,
    className
}) => {
    return (
        <section className={`page-section ${className}`}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
