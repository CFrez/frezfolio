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
import { useAppContext } from '@/app/App.context'

export const FlippingCard: React.FC<ProjectData> = ({
    details,
    graphic: { src, srcDark, alt, element: Element },
    notes,
    title,
    category,
}) => {
    const { isDark } = useAppContext()

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
                <CardContent className="grow">
                    {Element ? (
                        <Element className={`w-full h-full object-cover`} />
                    ) : (
                        <img
                            className={`w-full h-full object-cover`}
                            src={isDark && srcDark ? srcDark : src}
                            alt={alt}
                        />
                    )}
                </CardContent>
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
