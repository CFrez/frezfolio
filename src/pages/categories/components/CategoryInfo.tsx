import React, { type ReactNode } from 'react'

import {
    type Category,
    categoryColors,
    categoryTitles,
} from '@/pages/categories/categories'
import { cn } from '@/lib/tailwind.utils'
import { Link } from 'react-router-dom'
import { useAppContext } from '@/app/App.context'

interface CategoryInfoProps {
    category: Category
    children?: ReactNode
    className?: string
    reverse?: boolean
}

export const CategoryInfo: React.FC<CategoryInfoProps> = ({
    category,
    children,
    className,
    reverse = false,
}) => {
    const { setCategory } = useAppContext()

    return (
        <Link to="/projects" onClick={() => setCategory(category)} className="group">
            <section
                id={category}
                className={cn(
                    `
                    max-w-7xl mx-auto
                    flex flex-row gap-4 md:gap-8 
                    flex-wrap md:flex-nowrap
                    justify-center items-center
                    [&>p]:w-full [&>p]:text-center [&>p]:sm:text-start
                `,
                    reverse && 'flex-row-reverse sm:[&>div]:text-right',
                    className,
                )}
            >
                <h1
                    className={cn(
                        `
                        scroll-m-20 text-3xl font-extrabold lg:text-4xl
                        text-center
                        sm:p-4
                        md:p-12
                    `,
                        categoryColors[category].groupHoverColor,
                    )}
                >
                    {categoryTitles[category]}
                </h1>
                <div className="w-full [&>p]:text-base flex flex-col gap-4">
                    {children}
                </div>
            </section>
        </Link>
    )
}
