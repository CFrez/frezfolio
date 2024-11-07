import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { BasicCard } from './BasicCard'
import { FlippingCard } from './FlippingCard'
import { ProjectData } from '@/types'
import { cn } from '@/lib/tailwind.utils'


export const LinkCard: React.FC<ProjectData> = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const {url } = props

    return (
        <Link to={url} className={cn(`w-max`)}>
            {isMobile ? <BasicCard {...props} /> : <FlippingCard {...props} />}
        </Link>
    )
}
