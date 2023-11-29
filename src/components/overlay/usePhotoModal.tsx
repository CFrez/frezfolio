import React, { useMemo, useCallback } from 'react'

import { type UseOverlayInterface, useOverlay } from './useOverlay'
import type { ImageData } from '../../types'

export interface PhotoModalProps {
    id: string
    /** enum used to build photos object */
    images: string[]
    photos: Record<string, ImageData>
}

export interface PhotoModalInterface {
    photoHook: UseOverlayInterface
    togglePhoto: (image: string) => void
    generateTriggerFigure: (props: { image: string; className?: string }) => JSX.Element
}

export function usePhotoModal({
    id,
    images,
    photos,
}: PhotoModalProps): PhotoModalInterface {
    const [isVisible, setIsVisible] = React.useState(false)
    const [imageIndex, setImageIndex] = React.useState(0)

    const imagesCount = useMemo(() => images.length, [images])
    const currentPhotoKey = useMemo(() => images[imageIndex], [imageIndex, images])

    const togglePhoto = useCallback(
        (image: string) => {
            const index = images.indexOf(image)
            setImageIndex(index)
            setIsVisible(true)
        },
        [images],
    )

    const generateTriggerFigure = useCallback(
        ({ image, className }: { image: string; className?: string }) => (
            <div
                key={image}
                role="button"
                className='photo-trigger'
                onClick={() => togglePhoto(image)}
                onKeyUp={() => togglePhoto(image)}
                tabIndex={0}
            >
                <figure className={className}>
                    <img src={photos[image].src} alt={photos[image].alt} />
                    <figcaption>
                        {photos[image].caption || photos[image].alt}
                    </figcaption>
                </figure>
            </div>
        ),
        [togglePhoto, photos],
    )

    const modalBody = (
        <>
            <button
                type="button"
                onClick={() => setImageIndex((prev) => prev - 1)}
                disabled={imageIndex === 0}
            >
                <span className="material-icons">chevron_left</span>
            </button>
            <img
                src={photos[currentPhotoKey].src}
                alt={photos[currentPhotoKey].alt}
                className={photos[currentPhotoKey].className}
            />
            <button
                type="button"
                onClick={() => setImageIndex((prev) => prev + 1)}
                disabled={imageIndex === imagesCount - 1}
            >
                <span className="material-icons">chevron_right</span>
            </button>
        </>
    )

    const photoHook = useOverlay({
        id,
        className: 'photo-modal',
        content: {
            header: photos[currentPhotoKey].caption || photos[currentPhotoKey].alt,
            body: modalBody,
        },
        visibility: { isVisible, setIsVisible },
    })

    return {
        photoHook,
        generateTriggerFigure,
        togglePhoto,
    }
}
