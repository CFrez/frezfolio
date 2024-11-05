import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import {
    Card,
    CardBack,
    CardContent,
    CardFooter,
    CardFront,
    CardHeader,
    CardTitle,
    FlipCard,
} from '../ui'
import { useMediaQuery } from 'react-responsive'

interface LinkCardProps {
    className: string
    children: ReactNode
    graphic: {
        src: string
        alt: string
    }
    title: string
    url: string
    notes?: string
    subtitle?: string
}

export const LinkCard: React.FC<LinkCardProps> = ({
    className,
    children,
    graphic,
    notes,
    subtitle,
    title,
    url,
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

    return (
        <Link to={url} className={`w-max ${className}`}>
            {isMobile ? (
                <Card>
                    <CardHeader
                        className={`
                `}
                    >
                        <CardTitle
                            className={`text-base md:text-xl border-b-2 border-secondary `}
                        >
                            {title}
                        </CardTitle>
                        {subtitle && (
                            <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>
                        )}
                    </CardHeader>
                </Card>
            ) : (
                <FlipCard className={`w-[400px] h-[500px]`}>
                    <CardFront className={`flex flex-col p-4`}>
                        <CardHeader
                            className={`
                    `}
                        >
                            <CardTitle
                                className={`text-base md:text-xl border-b-2 border-secondary `}
                            >
                                {title}
                            </CardTitle>
                            {subtitle && (
                                <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>
                            )}
                        </CardHeader>
                        <CardContent className="grow">
                            <img
                                className={`w-full object-contain`}
                                src={graphic.src}
                                alt={graphic.alt}
                            />
                        </CardContent>
                        {notes && (
                            <CardFooter className={`text-base`}>{notes}</CardFooter>
                        )}
                    </CardFront>
                    <CardBack className={`p-6`}>
                        <CardContent>{children}</CardContent>
                    </CardBack>
                </FlipCard>
            )}
        </Link>
    )
}
