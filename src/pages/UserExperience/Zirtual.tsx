import React from 'react'

import { PageTitle, PageSection, Overlay, usePhotoModal } from '../../components'

import { ZirtualImage, zirtualPhotos } from '../../data'

export const Zirtual: React.FC = () => {
    const { photoHook, generateTriggerFigure } = usePhotoModal({
        id: 'zirtual-hiring',
        images: Object.values(ZirtualImage),
        photos: zirtualPhotos,
    })
    return (
        <>
            <PageTitle title="Zirtual" subtitle="Version Control Recipe Manager">
                <p>More Content</p>
            </PageTitle>
            <PageSection title="Hiring Process">
                {generateTriggerFigure({ image: ZirtualImage.Initial })}
                {generateTriggerFigure({ image: ZirtualImage.Final })}
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
