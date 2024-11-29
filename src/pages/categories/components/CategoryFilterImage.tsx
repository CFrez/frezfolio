import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useAppContext } from '@/app/App.context'
import { topperProperties, type Category } from '@/pages/categories/categories'
import { cn } from '@/lib'

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
            scrollToCategory({ category: activeCategories[0] })
            resetCategories()
        }
    })

    // TODO: make it so when you double click it doesn't first flash/toggle the single click
    const handleCategoryClick = (category: Category, isDouble: boolean = false) => {
        if (isAbout) {
            scrollToCategory({ category })
        } else if (isProjects) {
            isDouble ? setCategory(category) : toggleCategory(category)
        } else {
            navigate('/projects')
            setCategory(category)
        }
    }

    return (
        <div
            className={`
            relative bottom-0 
            min-h-[82.72154px] h-[25.85048vw] max-h-[124.082304px] md:max-h-[192px]
            min-w-[320px] w-[100vw] max-w-[480px] md:max-w-[742.7328px]
            mt-[0] sm:mt-[-24px] lg:mt-[-48px]
        `}
        >
            {Object.entries(topperProperties).map(([key, { src, alt, style }]) => {
                const category = key as Category
                return (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        onDoubleClick={() => handleCategoryClick(category, true)}
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
