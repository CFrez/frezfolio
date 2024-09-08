import React from 'react'

import { Dialog } from '@/components/ui'

import { PageTitle, PageSection, usePhotoModal } from '../../components'

import { recipezPhotos } from '../../data'

export const RecipEz: React.FC = () => {
    const { generatePhotoModal, generateTriggerFigure } = usePhotoModal<
        typeof recipezPhotos
    >({
        id: 'recipez',
        photos: recipezPhotos,
    })

    return (
        <Dialog>
            <PageTitle title="RecipEZ" subtitle="Version Control Recipe Manager">
                <p>
                    This is the one app that I am determined to build one day, unless
                    someone else creates it first.
                </p>
            </PageTitle>
            <PageSection title="Only Page">{generateTriggerFigure('main')}</PageSection>
            {generatePhotoModal()}
        </Dialog>
    )
}
