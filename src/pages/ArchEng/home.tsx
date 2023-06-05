import React from 'react'

import { LinkCard } from '../../components'

import { ArchEngUrl } from '.'


import labview from '/images/projects/labview/gui.png'

export const ArchEngHome: React.FC = () => {
    return (
        <>
            <p className='info'>
                - 100 y/o house
                - bored
                - interesting
                - structural
                - matlab, jupiter, python, labview, ansys
            </p>

            <LinkCard
                title='Labview'
                url={ArchEngUrl.Labview}
                className='labview'
                subtitle='MSOE Master&apos;s Project'
                graphic={<img className='labview' src={labview} alt="Main user interface of labview structural program." />}
                description='A Labview program that assists with testing of structural components.'
            />

        </>
    )
}
