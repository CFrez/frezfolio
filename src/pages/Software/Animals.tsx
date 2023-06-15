import React from 'react'

import { PageTitle, PageSection, Overlay, usePhotoModal } from '../../components'

import { AnimalsImage, animalsPhotos } from '../../data'
import { AnimalProcess } from './AnimalProcess'
import { AnimalRoles, AnimalFeatures } from './AnimalTables'

export const Animals: React.FC = () => {
    const { photoHook, generateTriggerFigure } = usePhotoModal({
        id: 'animals',
        images: Object.values(AnimalsImage),
        photos: animalsPhotos,
    })

    return (
        <>
            <PageTitle
                title="Pet Rescue Animal Tracker"
                subtitle="Foreclosed Upon Pets, Inc"
            >
                <p>
                    As a volunteer and foster for FUPI (Foreclosed Upon Pets, Inc), I
                    actively participated in various aspects of the organization. I
                    noticed that much of their tracking and documentation relied on
                    manual paper forms and spreadsheets. To address this inefficiency
                    and enhance their operations, I took the initiative to design a
                    comprehensive system that would revolutionize their tracking and
                    management processes for animals, fosters, and adopters.
                </p>
                <p>
                    The system I designed aimed to provide FUPI with precise and
                    real-time tracking of animals and their related information. By
                    transitioning from paper-based methods to a digital platform, the
                    organization could enjoy the benefits of accurate and up-to-date
                    data on animal availability. Moreover, the system facilitated the
                    tracking of essential medical information and history, enabling
                    comprehensive care and treatment. Additionally, since not all
                    fosters were volunteers, the system provided a way for volunteers at
                    adoption events to access animal information from the foster.
                </p>
                <p>
                    Overall, the system I envisioned empowered FUPI to streamline their
                    operations, optimize their data management, and enhance their
                    overall efficiency. By digitizing their processes, the organization
                    could improve accuracy, accessibility, and the overall experience
                    for all stakeholders involved.
                </p>
            </PageTitle>
            <PageSection title="Data Gathering">
                <p>
                    Data for the project was collected through interviews with board
                    members of the organization and supplemented by personal experience.
                </p>
                <details>
                    <summary>
                        Ideal process of how an animal gets received through adoption
                    </summary>
                    <AnimalProcess />
                </details>
                <details>
                    <summary>Table of roles and potential data models</summary>
                    <AnimalRoles />
                </details>
                <details>
                    <summary>Table of feature analysis</summary>
                    <AnimalFeatures />
                </details>
            </PageSection>
            <PageSection title="Dashboard">
                <p>
                    The dashboard served as the main access point for users, providing
                    tailored views based on their roles. Fosters could see their
                    assigned animals, while volunteers had an overview of all animals.
                    The dashboard displayed key information, such as status, age, and
                    other relevant details, allowing for quick assessment and efficient
                    management.
                </p>
                {generateTriggerFigure({ image: AnimalsImage.Dashboard })}
                <div className="set">
                    {generateTriggerFigure({
                        image: AnimalsImage.NewAnimal,
                        className: 'modal',
                    })}
                    {generateTriggerFigure({
                        image: AnimalsImage.EditAnimal,
                        className: 'modal',
                    })}
                </div>
            </PageSection>
            <PageSection title="Animal Page">
                {generateTriggerFigure({
                    image: AnimalsImage.AnimalHome,
                    className: 'animal',
                })}
                {/* TODO: Is this worth creating a component vs relying on className? */}
                <div className="set">
                    {generateTriggerFigure({
                        image: AnimalsImage.AnimalHomeExpanded,
                        className: 'animal',
                    })}
                    {generateTriggerFigure({
                        image: AnimalsImage.AnimalVetExpanded,
                        className: 'animal',
                    })}
                </div>
                <div className="set">
                    {generateTriggerFigure({
                        image: AnimalsImage.NewRecord,
                        className: 'modal',
                    })}
                    {generateTriggerFigure({
                        image: AnimalsImage.EditRecord,
                        className: 'modal',
                    })}
                </div>
            </PageSection>
            <Overlay {...photoHook} />
        </>
    )
}
