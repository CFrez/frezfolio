import React, { useState } from 'react'

export const ExpandableTruncatedSentence: React.FC<{ children: string, defaultOpen: boolean }> = ({ children, defaultOpen = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultOpen)

    const firstSentence = children.split('. ')[0]
    
    return (
        <p className="truncate">{children}</p>
    )
}