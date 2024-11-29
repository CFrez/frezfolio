import { useAppContext } from '@/app/App.context'
import type { Graphic } from '@/app/types'

export const useGraphic = (imgStyle?: string) => {
    const { isDark } = useAppContext()

    return (graphic: Graphic) => {
        if ('element' in graphic) {
            const { element: Element, alt } = graphic
            return (
                <Element
                    className={imgStyle}
                    aria-description={alt}
                    style={{ fill: 'currentcolor', stroke: 'currentcolor' }}
                />
            )
        }
        const { src, srcDark, alt } = graphic
        return (
            <img
                className={imgStyle}
                src={isDark && srcDark ? srcDark : src}
                alt={alt}
            />
        )
    }
}
