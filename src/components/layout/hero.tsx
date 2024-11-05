import React, { useRef, type WheelEvent } from 'react'
import { Link } from 'react-router-dom'

import { topperProperties } from '@/data'
import { cn } from '@/lib/tailwind.utils'

export const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)

    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
        const element = ref.current
        if (element) {
            if (e.deltaY === 0) return
            element.scrollTo({
                left: element.scrollLeft + e.deltaY,
            })
        }
    }

    return (
        <div className="w-full overflow-x-scroll" ref={ref} onWheel={onWheel}>
            <div
                className={`
                mx-auto my-0
                sticky bottom-0
                min-w-[1050px] w-[227.5vh] max-w-[2800px]
                min-h-[300px] h-[65vh] max-h-[800px]
            `}
            >
                {Object.entries(topperProperties).map(
                    ([key, { srcLabeled, alt, link, style }]) => (
                        <Link key={key} to={link}>
                            <img
                                className={cn(
                                    `
                                    absolute bottom-0 h-full 
                                    saturate-0 hover:saturate-100
                                    `,
                                    style,
                                )}
                                src={srcLabeled}
                                alt={alt}
                            />
                        </Link>
                    ),
                )}
            </div>
        </div>
    )
}
