import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { ExpandableTruncatedText, LinkCard } from '../../components'

import { ArchDesignUrl } from '../urls'

export const ArchDesignHome: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

    return (
        <>
            <p className="w-full text-center">
                My fascination with architecture first ignited during my high school
                years when I enrolled in a drafting class. However, it was during my
                time at Texas A&M University that my passion became focused on the
                captivating realm of Healthcare Design. This newfound interest paved the
                way for my career path as an officer in the Air Force.
            </p>

            <LinkCard
                title="Health Facilities Planning, Design, and Construction"
                url={ArchDesignUrl.AirForce}
                className="air-force"
                subtitle="United States Air Force"
                graphic={{
                    src: "projects/nellis/final.jpg",
                    alt: "Nellis Operating Room at completion."
                }}
                notes="July 2010 - December 2016"
            >
                {isMobile ? (
                    <ExpandableTruncatedText>
                        During my career in the Air Force, I had the opportunity to engage
                        in a diverse range of projects, encompassing both minor renovations
                        and ambitious new constructions. From the initial stages of planning
                        to the final stages of construction, I was actively involved in
                        various project life cycles, gaining valuable experience and insight
                        at every step.
                    </ExpandableTruncatedText>
                ) : (
                    <>
                        <p>
                            During my career in the Air Force, I had the opportunity to engage
                            in a diverse range of projects, encompassing both minor renovations
                            and ambitious new constructions. From the initial stages of planning
                            to the final stages of construction, I was actively involved in
                            various project life cycles, gaining valuable experience and insight
                            at every step.
                        </p>
                        <p>
                            I was afforded the privilege of collaborating with a multitude of
                            professionals, including medical staff, architects, engineers, and
                            contractors. This rich and dynamic exchange of ideas and expertise
                            fostered a truly multidisciplinary approach, ensuring that the
                            healthcare facilities we developed addressed the distinct
                            requirements of our esteemed servicemen and women.
                        </p>
                    </>
                )}

            </LinkCard>

            <LinkCard
                title="Bachelor's of Environmental Design"
                url={ArchDesignUrl.TexasAM}
                className="texas-am"
                subtitle="Texas A&M University"
                graphic={{
                    src:"projects/cosc/perspective.jpg",
                    alt:"Rendering of a potential design for the College of Construction Science building at Texas A&M University.",
                }}
                notes="August 2005 - May 2009"
            >
            {isMobile ? (
                <ExpandableTruncatedText>
                    The Bachelor of Environmental Design program at Texas A&M University
                    is an interdisciplinary undergraduate degree focused on
                    architecture. It offers a comprehensive education in design
                    thinking, problem-solving, and architectural principles. Students
                    engage in studio-based courses, explore sustainability and cultural
                    context, and gain practical experience through a study abroad
                    program.
                </ExpandableTruncatedText>
            ) : (
                <p>
                    The Bachelor of Environmental Design program at Texas A&M University
                    is an interdisciplinary undergraduate degree focused on
                    architecture. It offers a comprehensive education in design
                    thinking, problem-solving, and architectural principles. Students
                    engage in studio-based courses, explore sustainability and cultural
                    context, and gain practical experience through a study abroad
                    program.
                </p>
            )}
            </LinkCard>
        </>
    )
}
