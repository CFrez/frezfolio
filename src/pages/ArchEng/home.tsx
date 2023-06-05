import React from 'react'

import { LinkCard } from '../../components'

import { ArchEngUrl } from '.'

import labview from '/images/projects/labview/gui.png'

export const ArchEngHome: React.FC = () => {
    return (
        <>
            <p className="info">
                Architectural Engineering is a special interest with a lot of value, especially since I live in a 100
                year old house. While I worked my way through my Master's degree, I was able to experiment with many
                different scientific programming languages and tools, including Ansys, Matlab, Labiew, Jupyter, and Python.
            </p>

            <LinkCard
                title="Labview"
                url={ArchEngUrl.Labview}
                className="labview"
                subtitle="MSOE Master's Project"
                graphic={
                    <img
                        className="labview"
                        src={labview}
                        alt="Main user interface of labview structural program."
                    />
                }
                notes=""
            >
                <p>For my Master's Project I worked on remaking the software used by undergraduates in the Materials and Method's Lab.</p>
            </LinkCard>
        </>
    )
}
