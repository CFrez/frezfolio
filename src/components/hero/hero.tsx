import React, {useCallback,useMemo, useRef, type WheelEvent} from "react";
import { Link } from "react-router-dom";

import background from '/images/topper/labeled-bg.svg'
import archdesign from '/images/topper/labeled-ad.svg'
import archeng from '/images/topper/labeled-ae.svg'
import humanfactors from '/images/topper/labeled-hf.svg'
import code from '/images/topper/labeled-se.svg'
import ux from '/images/topper/labeled-ux.svg'

enum Image { bg = 'bg', ux = 'ux', se = 'se', hf = 'hf', ae = 'ae', ad = 'ad' }

interface ImageProperties {src: string, alt: string, link: string, percentage: number }

const widthHeightRatio = 3.5

const imageProperties: Record<Image, ImageProperties > = {
    [Image.bg]: {
        src: background,
        alt: 'dallas skyline background',
        link: '/',
        percentage: 0,
    },
    [Image.ux]: {
        src: ux,
        alt: 'user experience',
        link: '/ux',
        percentage: 966 / 1470,
    },
    [Image.se]: {
        src: code,
        alt: 'software engineering',
        link: '/software',
        percentage: 1143 / 1470,
    },
    [Image.hf]: {
        src: humanfactors,
        alt: 'human factors',
        link: '/humanfactors',
        percentage: 715 / 1470,
    },
    [Image.ae]: {
        src: archeng,
        alt: 'architectural engineering',
        link: '/archeng',
        percentage: 435 / 1470,
    },
    [Image.ad]: {
        src: archdesign,
        alt: 'architectural design',
        link: '/archdesign',
        percentage: 58 / 1470,
    },
}


import './hero.sass'

export const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);


    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
        const elelemnt = ref.current;
        if (elelemnt) {
            if (e.deltaY == 0) return;
            elelemnt.scrollTo({
                left: elelemnt.scrollLeft + e.deltaY,
            });
        }
    };

    const windowHeight =  useMemo(() => {
        if (window.screen.height < window.outerHeight){
            return window.screen.height
        }
        return window.outerHeight;
    }, []);

    const height = useMemo(() => {
        if (windowHeight > 800) {
            return windowHeight * .67
        } else {
            return 800
        }
    }, [windowHeight])


    const determineStyle = useCallback((percentage: number) => {
        const width = height * widthHeightRatio
        const left = `${width * percentage}px`
        return {left, height}
    }, [height])


    return (
        <div className="hero" style={{height: height}}>
            <div className="topper" ref={ref} onWheel={onWheel}>
                {Object.entries(imageProperties).map(([key, {src, alt, link, percentage}]) => (
                    <Link key={key} className={key} to={link}>
                        <img className={key} src={src} alt={alt} style={determineStyle(percentage)} />
                    </Link>
                ))}

            </div>
        </div>
    )
}