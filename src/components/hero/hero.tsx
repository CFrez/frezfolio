import React, { useCallback, useMemo, useRef, type WheelEvent } from 'react'
import { Link } from 'react-router-dom'

import { topperProperties } from '../../data/pages'

import './hero.sass'

const widthHeightRatio = 3.5

export const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)

    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
        const elelemnt = ref.current
        if (elelemnt) {
            if (e.deltaY == 0) return
            elelemnt.scrollTo({
                left: elelemnt.scrollLeft + e.deltaY,
            })
        }
    }

    // const height = useMemo(() => {
    //     const windowHeight =
    //         window.screen.height < window.outerHeight
    //             ? window.screen.height
    //             : window.outerHeight
    //     if (windowHeight > 800) {
    //         return windowHeight * 0.67
    //     } else {
    //         return 800
    //     }
    // }, [])

    // const determineStyle = useCallback(
    //     (percentage: number) => {
    //         const width = height * widthHeightRatio
    //         const left = `${width * percentage}px`
    //         return { left, height, width }
    //     },
    //     [height],
    // )

    return (
        <div className="hero" ref={ref} onWheel={onWheel}>
            <div className="hero__topper">
                {Object.entries(topperProperties).map(
                    ([key, { srcLabeled, alt, link }]) => (
                        <Link key={key} className={`${key}-labeled`} to={link}>
                            <img
                                className={`${key}-labeled`}
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
