import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui'

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
}) => (
    <Link to={url} className={`w-full ${className}`}>
        <Card
            className={`
            flex flex-col gap-2
            md:grid md:gap-4
            grid-cols-2 
            grid-rows-grow-middle
            p-6
        `}
        >
            <CardHeader
                className={`
                col-start-1
                row-start-1
            `}
            >
                <CardTitle className={`text-base md:text-xl border-b-2 border-secondary `}>{title}</CardTitle>
                {subtitle && <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>}
            </CardHeader>
            <div
                className={`
                    col-start-2
                    row-start-1 row-end-4
                    flex
                    place-content-center
                `}
            >
                <img className={`w-full object-contain`} src={graphic.src} alt={graphic.alt} />
            </div>
            {notes && (
                <CardFooter className={`col-start-1 row-start-3 text-base`}>{notes}</CardFooter>
            )}
            <CardContent
                className={`
                col-start-1
                row-start-2
                flex flex-col gap-2
                [&>p]:text-base
            `}
            >
                {children}
            </CardContent>
        </Card>
    </Link>
)
