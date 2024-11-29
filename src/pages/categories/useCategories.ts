import { useState } from 'react'

import { allCategories, type Category } from './categories'

export function useCategories() {
    const [activeCategories, setActiveCategory] = useState<Category[]>(allCategories)

    const toggleCategory = (category: Category) => {
        setActiveCategory((prev) => {
            if (prev.includes(category)) {
                return prev.filter((c) => c !== category)
            } else {
                return [...prev, category]
            }
        })
    }

    const setCategory = (category: Category) => setActiveCategory([category])

    const resetCategories = () => setActiveCategory(allCategories)

    const scrollToCategory = ({
        category,
        horizontal = false,
    }: {
        category: Category
        horizontal?: boolean
    }) => {
        const element = document.getElementById(category)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: horizontal ? 'nearest' : 'end',
                inline: horizontal ? 'start' : 'nearest',
            })
        }
    }

    return {
        activeCategories,
        toggleCategory,
        setCategory,
        scrollToCategory,
        resetCategories,
    }
}
