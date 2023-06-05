import React from 'react'

import { LinkCard } from '../../components'

import { ArchDesignUrl } from '.'


import cosc from '/images/projects/cosc/perspective.jpg'
import orFinal from '/images/projects/nellis/final.jpg'

export const ArchDesignHome: React.FC = () => {
    return (
        <>
            <p className='info'>
                My passion for architecture started during high school when I took a drafting class.
                Then, while attending Texas A&M University, my passion narrowed to Healthcare Design.
                This led me to a career as an officer in the Air Force, where I was part of the team
                that was responsible for the planning, design, and construction for all healthcare
                facilities in the Air Force.
            </p>

            <LinkCard
                title='Bachelor&apos;s of Environmental Design'
                url={ArchDesignUrl.TexasAM}
                className='texas-am'
                subtitle='Texas A&M University'
                graphic={<img className='cosc' src={cosc} alt="Rendering of a potential design for the College of Construction Science building at Texas A&M University." />}
            />

            <LinkCard
                title='Health Facilities Planning, Design, and Construction'
                url={ArchDesignUrl.AirForce}
                className='air-force'
                subtitle='United States Air Force'
                graphic={<img className='nellis-or' src={orFinal} alt="Picture of the Nellis Operating Room at completion." />}
                description='This is just a glimpse into the work I did while in the Air Force.'
            />

        </>
    )
}
