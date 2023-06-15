import React, { useCallback } from 'react'

import { PageTitle } from '../../components'

import { emotionsPhotos } from '../../data'
import { ImageData } from '../../types'

export const Emotions: React.FC = () => {
    const generateEmotion = useCallback(
        (emotion: ImageData) => (
            <figure key={emotion.src} className="emotion">
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
            <section className="emotions">
                {Object.values(emotionsPhotos).map(generateEmotion)}
            </section>
        </>
    )
}
