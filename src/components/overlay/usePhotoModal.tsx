import React, { useMemo, useCallback } from 'react'

import { type UseOverlayInterface, useOverlay } from './useOverlay'
import type { ImageData } from '../../types'
import { cn } from '@/lib/tailwind.utils'

export interface PhotoModalProps {
    id: string
    photos: Record<string, ImageData>
}

export interface PhotoModalInterface<K extends string> {
    photoHook: UseOverlayInterface
    togglePhoto: (image: K) => void
    generateTriggerFigure: (image: K, optional?: { className?: string }) => JSX.Element
}

/**
 * This hook is used to create an overlay that displays images,
 * and allows the user to cycle through them.
 *
 * @param id The unique id of the modal.
 * @param photos The images to display in the modal.
 * All photos will be displayed even if a trigger image isn't generated.
 *
 * @returns
 * `photoHook` The hook to display the modal.
 *
 * `togglePhoto` A function to toggle the modal to a specific photo.
 *
 * `generateTriggerFigure` A function to generate a trigger figure that will open the modal when clicked.
 */
export function usePhotoModal<T, K extends string = Extract<keyof T, string>>({
    id,
    // TODO: instead of sending the type of photos, could we infer it from the photos object?
    photos,
}: PhotoModalProps): PhotoModalInterface<K> {
    const [isVisible, setIsVisible] = React.useState(false)
    const [imageIndex, setImageIndex] = React.useState(0)

    const images = useMemo(() => Object.keys(photos), [photos])
    const imagesCount = useMemo(() => images.length, [images])
    const currentPhotoKey = useMemo(() => images[imageIndex], [imageIndex, images])

    const togglePhoto = useCallback(
        (image: K) => {
            setImageIndex(images.indexOf(image))
            setIsVisible(true)
        },
        [images],
    )

    const generateTriggerFigure = useCallback(
        (image: K, optional?: { className?: string }) => (
            <div
                key={image}
                role="button"
                className={cn("self-center min-w-[33%]", optional?.className)}
                onClick={() => togglePhoto(image)}
                onKeyUp={() => togglePhoto(image)}
                tabIndex={0}
            >
                <figure className={`
                    flex flex-col gap-2
                    items-center justify-center
                    mx-auto my-0
                    max-w-xl max-h-96
                `}>
                    <img className={`
                        min-h-0 object-cover 
                        hover:cursor-pointer
                        hover:shadow-md
                    `} src={photos[image].src} alt={photos[image].alt} />
                    <figcaption className='cursor-default'>
                        {photos[image].caption || photos[image].alt}
                    </figcaption>
                </figure>
            </div>
        ),
        [togglePhoto, photos],
    )

    // TODO: Update this styling to handle mobile.
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
            {/* Add option for dots along bottom instead of side buttons? */}
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
