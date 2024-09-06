import { cn } from '@/lib/tailwind.utils'
import React, { useState } from 'react'

interface ExpandableTruncatedTextProps {
    children: string
    className?: string
    defaultOpen?: boolean
    splitOn?: string
}

export const ExpandableTruncatedText = ({ children, className, defaultOpen = false, splitOn = '. ' }: ExpandableTruncatedTextProps) => {
    const [isExpanded, setIsExpanded] = useState(defaultOpen)

    const truncatedText = children.split(splitOn)[0]+'...'

    const switchExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setIsExpanded((prev) => !prev)
    }

    const expansionButton = (
        <button
            className="text-sm text-muted-foreground inline-block"
            onClick={switchExpanded}
        >
            {isExpanded ? 'less' : 'more'}
        </button>
    )

    return (
        <div className={cn('whitespace-pre-line' + className)}>
            {isExpanded ? children : truncatedText}
            {' '}
            {expansionButton}
        </div>
    )
}