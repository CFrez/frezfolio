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
                    Pet Rescue is a web application that allows animal shelters to manage their animals, volunteers, and
                    events. I worked on the front end of the application, which was built with React and Typescript.
                </p>
            </LinkCard>

            <LinkCard
                title="RecipEz"
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
                    RecipEz is a web application that allows users to search for recipes, save recipes, and create
                    shopping lists. I worked on the front end of the application, which was built with React and
                    Typescript.
                </p>
            </LinkCard>
        </>
    )
}
