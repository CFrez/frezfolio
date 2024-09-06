import React from 'react'

import { LinkCard } from '../../components'

import { ArchEngUrl } from '../urls'

export const ArchEngHome: React.FC = () => {
    return (
        <>
            <p className="w-full text-center">
                Architectural Engineering has captivated my interest due to its inherent
                value and practical applications, especially given my residence in a
                century-old house. During the pursuit of this Master&apos;s degree, I
                had the opportunity to delve into the realm of this field and explore a
                range of scientific programming languages and tools. These included
                Ansys, Matlab, LabVIEW, Jupyter, and Python, enabling me to conduct
                experiments and analysis with versatility and precision.
            </p>

            <LinkCard
                title="LabVIEW"
                url={ArchEngUrl.Labview}
                className="labview"
                subtitle="MSOE Master's Project"
                graphic={{
                    src: '/projects/labview/gui.png',
                    alt: 'Main user interface of LabVIEW structural program.',
                }}
            >
                <p>
                    For the Materials and Methods Lab, I undertook the task of revamping
                    the software utilized by undergraduate students. With the equipment
                    undergoing updates, it was essential to ensure that the accompanying
                    software was also brought up to date. Leveraging LabVIEW, I
                    developed a program that enabled students to conduct tests on
                    various materials and seamlessly generate data for subsequent
                    analysis.
                </p>
            </LinkCard>
        </>
    )
}
