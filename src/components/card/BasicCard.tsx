import React from 'react'

import type { ProjectData } from '@/types'

import { Card, CardHeader, CardTitle } from '../ui'

export const BasicCard: React.FC<ProjectData> = ({ subtitle, title }) => {
    return (
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
                {subtitle && <h3 className={`text-sm md:text-lg`}>{subtitle}</h3>}
            </CardHeader>
        </Card>
    )
}
