import React, { useMemo, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

import { cn, useIsMobile } from '@/lib'
import type { ImageData } from '@/types'

import { Button, DialogDescription, DialogTitle, DialogTrigger } from '../ui'

import { Modal } from './Modal'

export interface PhotoModalProps {
    id: string
    photos: Record<string, ImageData>
}

export interface PhotoModalInterface<K extends string> {
    generatePhotoModal: () => JSX.Element | undefined
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
 * `generatePhotoModal` A function to generate the modal.
 *
 * `generateTriggerFigure` A function to generate a trigger figure that will open the modal when clicked.
 */
export function usePhotoModal<T, K extends string = Extract<keyof T, string>>({
    id,
    // TODO: instead of sending the type of photos, could we infer it from the photos object?
    photos,
}: PhotoModalProps): PhotoModalInterface<K> {
    const isMobile = useIsMobile()
    const [imageIndex, setImageIndex] = React.useState(0)

    const images = useMemo(() => Object.keys(photos), [photos])
    const imagesCount = useMemo(() => images.length, [images])
    const currentPhoto = useMemo(
        () => photos[images[imageIndex]],
        [photos, imageIndex, images],
    )

    const togglePhoto = useCallback(
        (image: K) => {
            setImageIndex(images.indexOf(image))
        },
        [images],
    )

    const generateTriggerFigure = useCallback(
        (imageKey: K, optional?: { className?: string }) => {
            const image = photos[imageKey]
            const figure = (
                <figure
                    className={`
                    flex flex-col-reverse sm:flex-col gap-2
                    items-center justify-center
                    mx-auto my-0
                    w-full md:w-unset md:max-w-xl max-h-96
                `}
                >
                    <img
                        className={`
                        min-h-0 object-contain
                        sm:h-full 
                        sm:object-cover 
                        sm:hover:cursor-pointer
                        sm:hover:shadow-md
                    `}
                        src={image.src}
                        alt={image.alt}
                    />
                    <figcaption className="cursor-default">
                        {image.caption || image.alt}
                    </figcaption>
                </figure>
            )

            if (isMobile) {
                return figure
            }
            return (
                <DialogTrigger
                    asChild
                    key={imageKey}
                    className={cn('self-center min-w-[33%]', optional?.className)}
                    onClick={() => togglePhoto(imageKey)}
                    onKeyUp={() => togglePhoto(imageKey)}
                    tabIndex={0}
                >
                    {figure}
                </DialogTrigger>
            )
        },
        [togglePhoto, photos],
    )

    const modalHeader = useMemo(() => {
        return (
            <>
                <DialogTitle className="text-2xl">
                    {currentPhoto.caption || currentPhoto.alt}
                </DialogTitle>
                <DialogDescription className="hidden">
                    {currentPhoto.alt}
                </DialogDescription>
            </>
        )
    }, [currentPhoto])

    const generatePhotoModal = useCallback(() => {
        if (isMobile) {
            return
        }
        return (
            <Modal
                id={id}
                className={`
                    w-[90vw] h-[90vh]
                    [&>button]:top-5 
                `}
                header={modalHeader}
                onCloseAutoFocus={(e) => e.preventDefault()}
            >
                <div className={`flex justify-center items-center h-full w-full`}>
                    <Button
                        className="grow h-full hover:bg-neutral-100"
                        type="button"
                        variant="text"
                        size="icon"
                        onClick={() => setImageIndex((prev) => prev - 1)}
                        disabled={imageIndex === 0}
                    >
                        <ChevronLeftIcon className="w-12 h-12" />
                    </Button>
                    <img
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        className={cn(
                            `max-h-full max-w-[80%] w-full md:w-max object-contain`,
                            currentPhoto.className,
                        )}
                    />
                    <Button
                        className="grow h-full hover:bg-neutral-100"
                        type="button"
                        variant="text"
                        size="icon"
                        onClick={() => setImageIndex((prev) => prev + 1)}
                        disabled={imageIndex === imagesCount - 1}
                    >
                        <ChevronRightIcon className="w-12 h-12" />
                    </Button>
                </div>
            </Modal>
        )
    }, [currentPhoto, imageIndex, imagesCount, setImageIndex])

    return {
        generatePhotoModal,
        generateTriggerFigure,
    }
}
