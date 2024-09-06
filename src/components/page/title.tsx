import React, { type ReactNode } from 'react'


interface PageTitleProps {
    title: string
    subtitle?: string
    children?: ReactNode
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, children }) => {
    return (
        <header className="w-full flex justify-between items-baseline flex-wrap gap-5">
            <h1 className="text-3xl/7 font-head shadow-underline">{title}</h1>
            {subtitle && <p className="text-2xl font-subhead text-primary-dark">{subtitle}</p>}
            {children && <div className="w-full flex flex-col gap-4">{children}</div>}
        </header>
    )
}
