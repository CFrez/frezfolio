import React from 'react'

import { LinkCard } from '../../components'

import { SoftwareUrl } from '.'

import quickAnimals from '/projects/animals/quick.png'
import recipEzDashboard from '/projects/recipez/recipe-main.png'

export const SoftwareHome: React.FC = () => {
    return (
        <>
            <p className="info">Code!!</p>

            <LinkCard
                title="Pet Rescue"
                url={SoftwareUrl.Animals}
                className="animals"
                graphic={
                    <img
                        className="animals"
                        src={quickAnimals}
                        alt="Partial interface of an Animal's dashboard page."
                    />
                }
                notes="2014-2016"
            >
                <p>
                    During my involvement with a foster-based pet rescue organization in
                    Las Vegas, Nevada, I became aware of the pressing need for improved
                    tracking and monitoring systems for the animals. Recognizing this
                    gap, I undertook a design exercise aimed at conceptualizing and
                    visualizing potential solutions to address this issue. The primary
                    objective was to envision a comprehensive and efficient tracking and
                    monitoring system that would enhance the organization's ability to
                    manage and care for the animals under its care.
                </p>
            </LinkCard>

            <LinkCard
                title="RecipEZ"
                url={SoftwareUrl.RecipEz}
                className="recipez"
                graphic={
                    <img
                        className="recipez"
                        src={recipEzDashboard}
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
            </LinkCard>
        </>
    )
}
