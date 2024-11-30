import React from 'react'

import { categoryColors } from '@/pages/categories/categories'
import { useGraphic, cn } from '@/lib'
import type { ProjectData } from '@/app/types'

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
    title,
    category,
}) => {
    const generateImage = useGraphic(`w-full h-full object-cover`)

    return (
        <FlipCard
            className={`
                w-[250px] h-[187.5px] 
                lg:w-[400px] lg:h-[300px] 
            `}
        >
            <CardFront
                className={cn(
                    `flex flex-col overflow-hidden border-[1px]`,
                    categoryColors[category].border,
                )}
            >
                <CardContent className="grow">{generateImage(graphic)}</CardContent>
            </CardFront>
            <CardBack
                className={cn(
                    `p-6 overflow-hidden flex flex-col gap-2 border-[1px] border-border`,
                )}
            >
                <CardHeader>
                    <CardTitle
                        className={cn(
                            `text-base md:text-xl border-b-4`,
                            categoryColors[category].border,
                        )}
                    >
                        {title}
                    </CardTitle>
                    {/* {subtitle && <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>} */}
                </CardHeader>
                <CardContent className="overflow-x-auto grow">
                    <p className="text-base">{details}</p>
                </CardContent>
                {notes && (
                    <CardFooter className={`text-base justify-self-end`}>
                        {notes}
                    </CardFooter>
                )}
            </CardBack>
        </FlipCard>
    )
}
