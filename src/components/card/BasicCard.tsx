import React from 'react'

import { categoryColors } from '@/app/categories'
import { cn, useGraphic } from '@/lib'
import type { ProjectData } from '@/app/types'

import { Card, CardContent, CardHeader, CardTitle } from '../ui'

export const BasicCard: React.FC<ProjectData> = ({
    graphic,
    title,
    details,
    category,
}) => {
    const generateImage = useGraphic(
        `w-full max-w-[50%] mx-auto rounded-sm border-[1px] border-gray-300`,
    )
    const borderStyle = `border-[1px] ${categoryColors[category].border}`

    return (
        <Card className={cn(`w-[80vw] overflow-hidden p-2`, borderStyle)}>
            <CardHeader
                className={cn(
                    `text-lg flex flex-col gap-2 border-b-2`,
                    categoryColors[category].border,
                )}
            >
                {generateImage(graphic)}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base">{details}</p>
            </CardContent>
        </Card>
    )
}
