import React, {  useRef, type WheelEvent } from 'react'
import { Link } from 'react-router-dom'

import { topperProperties } from '../../data/pages'

import './hero.sass'


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
