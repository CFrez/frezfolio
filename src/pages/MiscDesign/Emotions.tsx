import React, { useCallback } from 'react'

import { PageTitle } from '../../components'
import { emotionsPhotos } from '../../data'
import { ImageData } from '../../types'

export const Emotions: React.FC = () => {
    const generateEmotion = useCallback(
        ({ alt, element: Image, src }: ImageData) => (
            <figure
                key={src}
                className={`
                shadow hover:shadow-md
                h-80 w-80 p-8
                rounded-md
                bg-card
                group
            `}
            >
                {Image ? (
                    <Image style={{ fill: 'currentcolor', stroke: 'currentcolor' }} />
                ) : (
                    <img src={src} alt={alt} />
                )}
                <figcaption className="hidden group-hover:block text-muted-foreground">
                    {alt}
                </figcaption>
            </figure>
        ),
        [],
    )

    return (
        <>
            <PageTitle title="Emotions" category="MiscDesign">
                <p>
                    Recognizing how individuals with Alexithymia often connect with
                    emotions through physical sensations, I embarked on a fascinating
                    project to translate those sensations into visual representations.
                    Using mostly lines as a medium, I aimed to capture the essence of
                    these feelings and their link to emotions.
                </p>
            </PageTitle>
            <section className="flex flex-wrap gap-12 justify-center items-center emotions">
                {Object.values(emotionsPhotos).map(generateEmotion)}
            </section>
        </>
    )
}
