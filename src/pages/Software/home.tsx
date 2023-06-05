import React from 'react'

import { LinkCard } from '../../components'

import { SoftwareUrl } from '.'

import quickAnimals from '/images/projects/animals/quick.png'
import recipEzDashboard from '/images/projects/recipez/recipe-main.png'

export const SoftwareHome: React.FC = () => {
    return (
        <>
            <p className='info'>
                Code!!
            </p>

            <LinkCard
                title='Pet Rescue'
                url={SoftwareUrl.Animals}
                className='animals'
                graphic={<img className='animals' src={quickAnimals} alt="Partial interface of an Animal's dashboard page." />}
            />

            <LinkCard
                title='RecipEz'
                url={SoftwareUrl.RecipEz}
                className='recipez'
                graphic={<img className='recipez' src={recipEzDashboard} alt="Main page of a single recipe." />}
            />
        </>
    )
}
