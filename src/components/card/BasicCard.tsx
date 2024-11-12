import React from 'react'

import { categoryColors } from '@/data/categories'
import { cn } from '@/lib'
import type { ProjectData } from '@/types'

import { Card, CardContent, CardHeader, CardTitle } from '../ui'

export const BasicCard: React.FC<ProjectData> = ({
    graphic,
    title,
    details,
    category,
}) => {
    const borderStyle = `border-[1px] ${categoryColors[category].border}`

    return (
        <Card className={cn(`w-[80vw] overflow-hidden p-2`, borderStyle)}>
            <CardHeader
                className={cn(
                    `text-lg flex flex-col gap-2 border-b-2`,
                    categoryColors[category].border,
                )}
            >
                <img
                    className={`w-full object-contain rounded-md`}
                    src={graphic.src}
                    alt={graphic.alt}
                />
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base">{details}</p>
            </CardContent>
        </Card>
    )
}
