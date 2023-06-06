import React from 'react'

import { LinkCard } from '../../components'

import { SoftwareUrl } from '.'

import quickAnimals from '/images/projects/animals/quick.png'
import recipEzDashboard from '/images/projects/recipez/recipe-main.png'

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
            >
                <p>
                    While working with a foster based pet rescue in Las Vegas, Nevada I realized the need for better
                    tracking and monitoring of the animals. This was a design exercise to determine what that might look
                    like.
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
                    RecipEZ is recipe app that allows for version control. It is a work in progress, but the goal is to
                    allow users to create recipes and then make changes to them without losing the original recipe. This
                    is useful for recipes that are constantly being tweaked.
                </p>
            </LinkCard>
        </>
    )
}
