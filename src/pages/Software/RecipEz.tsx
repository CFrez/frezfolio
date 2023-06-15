import React from 'react'

import { PageTitle, PageSection, Overlay, usePhotoModal } from '../../components'

import { RecipezImage, recipezPhotos } from '../../data'

export const RecipEz: React.FC = () => {
    const { photoHook, generateTriggerFigure } = usePhotoModal({
        id: 'recipez',
        images: Object.values(RecipezImage),
        photos: recipezPhotos,
    })

    return (
        <>
            <PageTitle title="RecipEZ" subtitle="Version Control Recipe Manager">
                <p>
                    This is the one app that I am determined to build one day, unless someone else creates it first.
                </p>
            </PageTitle>
            <PageSection title="Only Page">
                {generateTriggerFigure({ image: RecipezImage.Main })}
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
