import React from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '@/app/App.context'
import { cn, useIsMobile } from '@/lib'
import type { ProjectData } from '@/types'

import { BasicCard } from './BasicCard'
import { FlippingCard } from './FlippingCard'

export const LinkCard: React.FC<ProjectData> = (projectData) => {
    const isMobile = useIsMobile()
    const { setCategory } = useAppContext()

    const { url, category } = projectData

    return (
        <Link to={url} className={cn(`w-max`)} onClick={() => setCategory(category)}>
            {isMobile ? (
                <BasicCard {...projectData} />
            ) : (
                <FlippingCard {...projectData} />
            )}
        </Link>
    )
}
