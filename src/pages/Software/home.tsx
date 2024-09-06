import React from 'react'

import { LinkCard } from '../../components'

import { SoftwareUrl } from '../urls'

export const SoftwareHome: React.FC = () => {
    return (
        <>
            <p className="w-full text-center">
                The field of software development has become a passion of mine, to the
                point where it no longer feels like work, but rather an engaging and
                fulfilling pursuit. The intricate nature of software development
                continuously presents me with a diverse range of challenges and problems
                to solve, igniting my curiosity and driving my motivation. From
                unraveling complex algorithms to designing user-friendly interfaces,
                every step in the software development process offers its own set of
                unique hurdles and opportunities for growth.
            </p>

            <p className="w-full text-center">
                The dynamic nature of the software development landscape ensures that I
                am constantly learning and evolving. As technology evolves and new
                paradigms emerge, I am driven to stay at the forefront of these
                advancements, embracing new frameworks, languages, and tools. This
                constant state of learning and growth keeps me engaged and motivated,
                propelling me forward in my journey as a software developer.
            </p>

            <LinkCard
                title="Pet Rescue"
                url={SoftwareUrl.Animals}
                className="animals"
                graphic={{
                    src: 'projects/animals/quick.png',
                    alt: "Partial interface of an Animal's dashboard page.",
                }}
                notes="2014-2016"
            >
                <p>
                    During my involvement with a foster-based pet rescue organization in
                    Las Vegas, Nevada, I became aware of the pressing need for improved
                    tracking and monitoring systems for the animals. Recognizing this
                    gap, I undertook a design exercise aimed at conceptualizing and
                    visualizing potential solutions to address this issue. The primary
                    objective was to envision a comprehensive and efficient tracking and
                    monitoring system that would enhance the organization&apos;s ability
                    to manage and care for the animals under its care.
                </p>
            </LinkCard>

            {/* TODO: Generate More content for this app! */}
            {/* <LinkCard
                title="RecipEZ"
                url={SoftwareUrl.RecipEz}
                className="recipez"
                graphic={
                    <img
                        className="recipez"
                        src='projects/recipez/recipe-main.png'
                        alt="Main page of a single recipe."
                    />
                }
            >
                <p>
                    RecipEZ is an innovative recipe app that incorporates the concept of
                    version control. Although still a work in progress, the app aims to
                    empower users to create and modify recipes while preserving the
                    original version. This feature proves particularly valuable for
                    recipes that undergo constant refinement and adjustment. By
                    leveraging version control capabilities, RecipEZ ensures that users
                    can experiment, make changes, and fine-tune their recipes without
                    the risk of losing the initial version. The app's ultimate goal is
                    to provide a seamless and intuitive platform for culinary
                    enthusiasts to create and manage their recipes with flexibility and
                    confidence.
                </p>
            </LinkCard> */}
        </>
    )
}
