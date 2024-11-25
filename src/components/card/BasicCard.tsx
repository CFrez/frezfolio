import React from 'react'

import { useAppContext } from '@/app/App.context'
import { categoryColors } from '@/data/categories'
import { cn } from '@/lib'
import type { ProjectData } from '@/types'

import { Card, CardContent, CardHeader, CardTitle } from '../ui'

export const BasicCard: React.FC<ProjectData> = ({
    graphic: { src, srcDark, alt, element: Element },
    title,
    details,
    category,
}) => {
    const { isDark } = useAppContext()

    const borderStyle = `border-[1px] ${categoryColors[category].border}`
    const imgStyle = `w-full max-w-[50%] mx-auto rounded-sm`

    return (
        <Card className={cn(`w-[80vw] overflow-hidden p-2`, borderStyle)}>
            <CardHeader
                className={cn(
                    `text-lg flex flex-col gap-2 border-b-2`,
                    categoryColors[category].border,
                )}
            >
                {Element ? (
                    <Element className={cn(imgStyle, 'border-[1px] border-gray-300')} />
                ) : (
                    <img
                        className={imgStyle}
                        src={isDark && srcDark ? srcDark : src}
                        alt={alt}
                    />
                )}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base">{details}</p>
            </CardContent>
        </Card>
    )
}
