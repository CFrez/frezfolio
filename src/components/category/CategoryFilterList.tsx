import React from 'react'
import { RotateCcwIcon, EyeIcon, EyeClosedIcon } from 'lucide-react'

import { useAppContext } from '@/app/App.context'
import { categoryColors, categoryTitles, type Category } from '@/data/categories'
import { cn } from '@/lib'

export const CategoryFilterList: React.FC = () => {
    const { activeCategories, toggleCategory, resetCategories, setCategory } =
        useAppContext()

    const noCategoriesActive = activeCategories.length === 0
    const multipleCategoriesActive = activeCategories.length > 1
    const allCategoriesActive =
        activeCategories.length === Object.keys(categoryTitles).length

    return (
        <aside
            className={cn(
                `flex flex-col items-start gap-2 sticky top-0 w-36 xl:w-auto`,
            )}
        >
            {Object.entries(categoryTitles).map(([key, title]) => {
                const category = key as Category
                const selected = activeCategories.includes(category)
                return (
                    <div
                        key={category}
                        className={cn(
                            `flex flex-row gap-2 items-start`,
                            categoryColors[category].color,
                        )}
                    >
                        <button onClick={() => toggleCategory(category)}>
                            {selected || noCategoriesActive ? (
                                <EyeIcon size={28} />
                            ) : (
                                <EyeClosedIcon size={28} />
                            )}
                        </button>
                        <button
                            className={cn(
                                !selected && 'text-foreground hover:underline',
                                'text-start text-lg',
                            )}
                            disabled={selected && !multipleCategoriesActive}
                            onClick={() => setCategory(category)}
                        >
                            {title}
                        </button>
                    </div>
                )
            })}
            <button
                onClick={resetCategories}
                disabled={allCategoriesActive}
                className={cn(
                    'flex flex-row items-center gap-1',
                    !allCategoriesActive && 'hover:underline',
                )}
            >
                <RotateCcwIcon width="28px" size={22} strokeWidth={3} />
                Reset
            </button>
        </aside>
    )
}
