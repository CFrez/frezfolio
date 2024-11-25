import React from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '@/app/App.context'
import { cn, useIsTablet } from '@/lib'
import type { ProjectData } from '@/types'

import { BasicCard } from './BasicCard'
import { FlippingCard } from './FlippingCard'

export const LinkCard: React.FC<ProjectData> = (projectData) => {
    const isTablet = useIsTablet()
    const { setCategory } = useAppContext()

    const { url, category } = projectData

    return (
        <Link to={url} className={cn(`w-max`)} onClick={() => setCategory(category)}>
            {isTablet ? (
                <BasicCard {...projectData} />
            ) : (
                <FlippingCard {...projectData} />
            )}
        </Link>
    )
}
