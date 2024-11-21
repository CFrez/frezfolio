import React, { type ReactNode } from 'react'

import { type Category, categoryColors, categoryTitles } from '@/data/categories'
import { cn } from '@/lib/tailwind.utils'
import { Link } from 'react-router-dom'
import { useAppContext } from '@/app/App.context'

interface CategoryInfoProps {
    category: Category
    children?: ReactNode
    className?: string
}

export const CategoryInfo: React.FC<CategoryInfoProps> = ({
    category,
    children,
    className,
}) => {
    const { setCategory } = useAppContext()

    return (
        <section
            id={category}
            className={cn(
                `
                max-w-7xl mx-auto
                flex flex-row gap-4 sm:gap-8 
                flex-wrap sm:flex-nowrap
                justify-center items-center
                [&>p]:w-full [&>p]:text-center [&>p]:sm:text-start
            `,
                className,
            )}
        >
            <Link to="/projects" onClick={() => setCategory(category)}>
                <h1
                    className={cn(
                        `
                        scroll-m-20 text-3xl font-extrabold lg:text-4xl
                        text-center
                        sm:p-12
                    `,
                        categoryColors[category].hoverColor,
                    )}
                >
                    {categoryTitles[category]}
                </h1>
            </Link>
            <div className="w-full [&>p]:text-base flex flex-col gap-4">{children}</div>
        </section>
    )
}
