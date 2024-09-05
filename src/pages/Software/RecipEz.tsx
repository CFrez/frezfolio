import React from 'react'

import { PageTitle, PageSection, Overlay, usePhotoModal } from '../../components'

import { recipezPhotos } from '../../data'

export const RecipEz: React.FC = () => {
    const { photoHook, generateTriggerFigure } = usePhotoModal<typeof recipezPhotos>({
        id: 'recipez',
        photos: recipezPhotos,
    })

    return (
        <>
            <PageTitle title="RecipEZ" subtitle="Version Control Recipe Manager">
                <p>
                    This is the one app that I am determined to build one day, unless
                    someone else creates it first.
                </p>
            </PageTitle>
            <PageSection title="Only Page">
                {generateTriggerFigure('main')}
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
