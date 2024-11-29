import React, { type ReactNode } from 'react'

import { type Category, categoryColors } from '@/app/categories'
import { cn } from '@/lib'

interface PageTitleProps {
    title: string
    subtitle?: string
    category: Category
    children?: ReactNode
}

export const PageTitle: React.FC<PageTitleProps> = ({
    title,
    subtitle,
    children,
    category,
}) => {
    return (
        <header className="w-full flex justify-between items-baseline flex-wrap gap-5">
            <h1
                className={cn(
                    'text-3xl/7 font-head underline underline-offset-4',
                    categoryColors[category].decoration,
                )}
            >
                {title}
            </h1>
            {subtitle && (
                <p className="text-2xl font-subhead text-primary-dark dark:text-primary-light">
                    {subtitle}
                </p>
            )}
            {children && <div className="w-full flex flex-col gap-4">{children}</div>}
        </header>
    )
}
