import React from 'react'

import { LinkCard } from '../../components'

import { GraphicsUrl } from '.'


import treeslogo from '/images/projects/unbtrees/citylogo.png'
import fearful from '/images/projects/emotions/fearful.svg'

export const GraphicsHome: React.FC = () => {
    return (
        <>
            <p className='info'>
                - UNB
                - UNB Trees
                - Assorted Graphics?
            </p>

            <LinkCard
                title='UNB Trees'
                url={GraphicsUrl.UnbTrees}
                className='trees'
                subtitle='Milwaukee Based Tree Service'
                graphic={<img className='trees' src={treeslogo} alt="Logo with milwaukee skyline roots." />}
            />

            <LinkCard
                title='Mental Health Emotions'
                url={GraphicsUrl.MentalHealth}
                className='emotions'
                subtitle='Emotions and Mental Health'
                graphic={<img className='emotions' src={fearful} alt="Fearful graphic." />}
            />
        </>
    )
}
