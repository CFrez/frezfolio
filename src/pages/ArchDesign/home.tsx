import React from 'react'

import { LinkCard } from '../../components'

import { ArchDesignUrl } from '.'

import cosc from '/images/projects/cosc/perspective.jpg'
import orFinal from '/images/projects/nellis/final.jpg'

export const ArchDesignHome: React.FC = () => {
    return (
        <>
            <p className="info">
                My passion for architecture started during high school when I took a
                drafting class. Then, while attending Texas A&M University, my passion
                narrowed to Healthcare Design. This led me to a career as an officer in
                the Air Force, where I was part of the team that was responsible for the
                planning, design, and construction for all healthcare facilities in the
                Air Force.
            </p>

            <LinkCard
                title="Health Facilities Planning, Design, and Construction"
                url={ArchDesignUrl.AirForce}
                className="air-force"
                subtitle="United States Air Force"
                graphic={
                    <img
                        className="nellis-or"
                        src={orFinal}
                        alt="Picture of the Nellis Operating Room at completion."
                    />
                }
                notes="July 2010 - December 2016"
            >
                <p>
                    This is a small sample of part of one of the projects I worked on. I does a
                    a good job representing the type of work I did while in the Air Force.
                </p>
            </LinkCard>

            <LinkCard
                title="Bachelor's of Environmental Design"
                url={ArchDesignUrl.TexasAM}
                className="texas-am"
                subtitle="Texas A&M University"
                graphic={
                    <img
                        className="cosc"
                        src={cosc}
                        alt="Rendering of a potential design for the College of Construction Science building at Texas A&M University."
                    />
                }
                notes="August 2005 - May 2009"
            >
                <p>
                    I graduated from Texas A&M University with a Bachelor's of Environmental Design.
                </p>
            </LinkCard>

        </>
    )
}
