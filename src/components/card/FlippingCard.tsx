import React from 'react'

import { categoryColors } from '@/data/categories'
import { cn } from '@/lib/tailwind.utils'
import type { ProjectData } from '@/types'

import {
    CardBack,
    CardContent,
    CardFooter,
    CardFront,
    CardHeader,
    CardTitle,
    FlipCard,
} from '../ui'


export const FlippingCard: React.FC<ProjectData> = ({
    details,
    graphic,
    notes,
    subtitle,
    title,
    category
}) => {

    const borderStyle = `border-[1px] ${categoryColors[category].border}`

    return (
        <FlipCard className={`w-[25vw] h-[30vw] max-w-[300px] max-h-[400px] `}>
            <CardFront className={cn(`flex flex-col p-4`, borderStyle)}>
                <CardHeader
                    className={``}
                >
                    <CardTitle
                        className={cn(`text-base md:text-xl border-b-4`, categoryColors[category].border)}
                    >
                        {title}
                    </CardTitle>
                    {subtitle && <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>}
                </CardHeader>
                <CardContent className="grow">
                    <img
                        className={`w-full object-contain`}
                        src={graphic.src}
                        alt={graphic.alt}
                    />
                </CardContent>
                {notes && <CardFooter className={`text-base`}>{notes}</CardFooter>}
            </CardFront>
            <CardBack className={cn(`p-6 overflow-hidden`, borderStyle)}>
                <CardContent className='overflow-x-auto'>{details}</CardContent>
            </CardBack>
        </FlipCard>
    )
}
