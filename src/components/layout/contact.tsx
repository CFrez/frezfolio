import { cn, useIsMobile } from '@/lib'
import React from 'react'

export const Contact: React.FC = () => {
    const isMobile = useIsMobile()
    const imgStyle = cn('opacity-85 hover:opacity-100', isMobile ? 'h-6' : 'h-8')

    return (
        <div className="flex flex-row w-full gap-3 justify-end items-end">
            <a href="https://www.linkedin.com/in/cfrezynski/">
                <img
                    className={imgStyle}
                    src="/images/linkedin.png"
                    alt="LinkedIn logo"
                />
            </a>
            <a href="https://github.com/CFrez/">
                <img className={imgStyle} src="/images/github.svg" alt="Github logo" />
            </a>
            <a href="https://www.printables.com/@RedFrez">
                <img
                    className={imgStyle}
                    src="/images/printables.png"
                    alt="printables logo"
                />
            </a>
        </div>
    )
}
