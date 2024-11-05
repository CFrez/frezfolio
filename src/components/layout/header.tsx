import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { topperProperties } from '@/data'
import { cn } from '@/lib/tailwind.utils'

import { LogoLink } from './logo'
import { Contact } from './contact'

export const Header: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <header
            className={`
            bg-gradient-to-b from-accent-half to-secondary-light 
            border-b-2 sm:border-b-[6px] 
            border-neutral-800
        `}
        >
            <div className="flex flex-col w-full gap-0 items-center justify-center">
                <div className="flex flex-row w-full max-w-7xl justify-between items-start px-6 pt-4">
                    <LogoLink />
                    <Contact />
                </div>
                <div
                    className={`
                    sticky bottom-0 
                    min-h-[82.72154px] h-[25.85048vw] max-h-[192px]
                    min-w-[320px] w-[100vw] max-w-[742.7328px]
                    mt-[0] md:mt-[-48px]
                `}
                >
                    {Object.entries(topperProperties).map(
                        ([key, { src, alt, link, style }]) => (
                            <Link key={key} className={key} to={link}>
                                <img
                                    className={cn(
                                        'absolute bottom-0 h-full saturate-0 hover:saturate-[.75]',
                                        style,
                                        pathname.includes(link) && 'saturate-100',
                                    )}
                                    src={src}
                                    alt={alt}
                                />
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </header>
    )
}
