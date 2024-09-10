import React, { useCallback } from 'react'

import { PageTitle } from '../../components'
import { emotionsPhotos } from '../../data'
import { ImageData } from '../../types'

import './Emotions.css'

export const Emotions: React.FC = () => {
    const generateEmotion = useCallback(
        (emotion: ImageData) => (
            <figure
                key={emotion.src}
                className={`
                shadow hover:shadow-md
                h-80 w-80 p-8
                rounded-md
                bg-white
            `}
            >
                <img src={emotion.src} alt={emotion.alt} />
                <figcaption>{emotion.alt}</figcaption>
            </figure>
        ),
        [],
    )

    return (
        <>
            <PageTitle title="Emotions">
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
