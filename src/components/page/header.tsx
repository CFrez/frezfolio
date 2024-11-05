import { Page, pageTitles } from '@/data/pages'
import React from 'react'

interface PageHeaderProps {
    page: Page
    children?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ page, children }) => {
    return (
        <div
            className={`
            flex flex-row gap-4 sm:gap-8 
            flex-wrap sm:flex-nowrap
            justify-center items-center
        `}
        >
            <h1
                className={`
                scroll-m-20 text-3xl font-extrabold lg:text-5xl
                text-center sm:text-start
                sm:text-nowrap
            `}
            >
                {pageTitles[page]}
            </h1>
            <p className="w-full text-center sm:text-start">{children}</p>
        </div>
    )
}
