import React, { type ReactNode } from 'react'

import { cn } from '@/lib/tailwind.utils'

interface PageSectionProps {
    title: string
    children: ReactNode
    className?: string
}

export const PageSection: React.FC<PageSectionProps> = ({
    title,
    children,
    className,
}) => {
    return (
        <section className={cn(`
            flex flex-col gap-4
        `, className)}>
            <h2 className='text-2xl'>{title}</h2>
            {children}
        </section>
    )
}
