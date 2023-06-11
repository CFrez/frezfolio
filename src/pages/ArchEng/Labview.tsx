import React from 'react'

import { PageTitle, PageSection, usePhotoModal, Overlay } from '../../components'
import { LabViewImage, labViewPhotos } from '../../data'

import icon from '/projects/labview/icon.svg'
import inspiration from '/projects/labview/testing.jpg'

export const Labview: React.FC = () => {
    const { photoHook, generateTriggerFigure } = usePhotoModal({id:'labview',images: Object.values(LabViewImage), photos: labViewPhotos});
    return (
        <>
            <PageTitle
                title="Structural Analysis Lab"
                subtitle="Milwaukee School of Engineering"
            >
                <p>
                    The Structural Analysis Lab teaches students how structures should react when forces are
                    applied and then assists with testing the theory. Since the equipment was getting updated to
                    simplier National Instruments hardware, the software needed to be updated as well. I was tasked
                    with creating a new LabVIEW program to control the equipment and collect data.
                </p>
            </PageTitle>

            <PageSection title="Requirements">
                <p>
                    The requirements were fairly simple. The program needed to be able to control the equipment
                    and collect data. The equipment was controlled by a National Instruments cDAQ and the data
                    was collected from a National Instruments USB-6009. The program needed to be able to control
                    the equipment and collect data from the USB-6009. The program also needed to be able to
                    collect data from the cDAQ, but that was not a requirement.
                </p>
                {generateTriggerFigure({image: LabViewImage.Initial})}
            </PageSection>

            <PageSection title="Design">
                {generateTriggerFigure({image: LabViewImage.GUI})}
            </PageSection>



            <PageSection title="Graphics" className='graphics'>
                <p>
                    This was possibly my favorite part of the program, which is not actually part of the program. I
                    created this icon character based on the test equipment used for the lab. I don't know how I never
                    gave him a name, but he still makes me smile.
                </p>
                <div className='icon'>
                    <img src={inspiration} alt="testing equipment that inspired icon" />
                    <img src={icon} alt="icon" />
                </div>
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
