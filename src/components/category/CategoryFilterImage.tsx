import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '@/app/App.context'
import { topperProperties } from '@/data'
import type { Category } from '@/data/categories'
import { cn } from '@/lib/tailwind.utils'
import { useLocation } from 'react-router-dom'

export const CategoryFilterImage: React.FC = () => {
    const navigate = useNavigate()

    const {
        activeCategories,
        toggleCategory,
        scrollToCategory,
        resetCategories,
        setCategory,
    } = useAppContext()
    const { pathname } = useLocation()

    const isProjects = pathname === '/projects'
    const isAbout = pathname === '/about'

    useEffect(() => {
        if (isAbout && activeCategories.length === 1) {
            scrollToCategory(activeCategories[0])
            resetCategories()
        }
    })

    const handleCategoryClick = (category: Category) => {
        if (isAbout) {
            scrollToCategory(category)
        } else if (isProjects) {
            toggleCategory(category)
        } else {
            navigate('/projects')
            setCategory(category)
        }
    }

    return (
        <div
            className={`
            sticky bottom-0 
            min-h-[82.72154px] h-[25.85048vw] max-h-[192px]
            min-w-[320px] w-[100vw] max-w-[742.7328px]
            mt-[0] lg:mt-[-48px]
        `}
        >
            {Object.entries(topperProperties).map(([key, { src, alt, style }]) => {
                const category = key as Category
                return (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <img
                            className={cn(
                                'absolute bottom-0 h-full saturate-0 hover:saturate-[.75]',
                                style,
                                activeCategories.includes(category as Category) &&
                                    'saturate-100',
                                isAbout && 'saturate-50 hover:saturate-100',
                            )}
                            src={src}
                            alt={alt}
                        />
                    </button>
                )
            })}
        </div>
    )
}
