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
            <PageTitle title="RecipEz" subtitle="Version Control Recipe Manager">
                <p>More Content</p>
            </PageTitle>
            <PageSection title="Only Page">
                {generateTriggerFigure({ image: RecipezImage.Main })}
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
