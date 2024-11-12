import React from 'react'

import { Dialog } from '@/components/ui'

import { PageTitle, PageSection, usePhotoModal } from '../../components'
import { nellisPhotos } from '../../data'

export const NellisOR: React.FC = () => {
    const { generatePhotoModal, generateTriggerFigure } = usePhotoModal<
        typeof nellisPhotos
    >({
        id: 'nellis-or',
        photos: nellisPhotos,
    })

    return (
        <Dialog>
            <PageTitle
                title="Medical Center Operating Room Renovation"
                subtitle="Nellis Air Force Base, NV"
                category="ArchDesign"
            >
                <p>
                    The Nellis Air Force Base Medical Center realignment project was a
                    $100M project to renovate the existing medical center. The project
                    included 30 departments and 25 phases of construction over 3 years.
                    I acted as the owner&apos;s representative for the project and was a
                    liaison between the contractor and the medical center.
                </p>
                <p>
                    Below takes a look at the design process for one of the more complex
                    rooms, the operating room.
                </p>
            </PageTitle>

            <PageSection title="Identifing the Problem">
                <p>
                    To initiate the process, it is crucial to gain a comprehensive grasp
                    of the existing circumstances and issues. By conducting on-site
                    visits and engaging in conversations with the users, we obtained
                    invaluable insights into the present state. Although the operating
                    rooms had undergone certain limited renovations, they were not
                    adequately equipped or optimized for the contemporary equipment and
                    procedures in use.
                </p>
                {generateTriggerFigure('initial')}
            </PageSection>

            <PageSection title="Understanding Requirements">
                <p>
                    The subsequent phase involves identifying the specific requirements
                    of the users. This objective is achieved through conducting
                    interviews with the users and gaining a full understanding of the
                    procedures and equipment utilized within the given space. The
                    interviews incorporate the implementation of supply, input,
                    procedures, output, and control (SIPOC) mapping to comprehend the
                    underlying process.
                </p>
                {generateTriggerFigure('SIPOC')}
                {generateTriggerFigure('surgerySIPOC')}
                {generateTriggerFigure('ORSIPOC')}
            </PageSection>

            <PageSection title="Requirements & Design">
                <p>
                    Once the requirements have been fine-tuned, they serve as the
                    foundation for defining the scope of work. This scope of work
                    becomes instrumental in soliciting proposals from contractors who
                    will participate in the project.
                </p>
                <p>
                    The design process operates on an iterative basis, where continuous
                    refinement is key. It commences with the development of preliminary
                    floor plans that serve as initial representations of the envisioned
                    space. These floor plans are then subjected to a series of reviews
                    in collaboration with the users. Through these iterative reviews,
                    feedback and input from the users are gathered and carefully
                    considered to inform subsequent refinements of the floor plans. This
                    collaborative approach ensures that the final design aligns
                    precisely with the users&apos; requirements, preferences, and
                    operational needs. The iterative nature of the process enables a
                    thorough exploration of various design possibilities and ensures
                    that the end result is a well-optimized and user-centric solution.
                </p>
            </PageSection>

            <PageSection title="Mockup">
                <p>
                    To facilitate the design process for this particular project, a
                    mockup of the new Hybrid OR was created, enabling users to immerse
                    themselves in the space and offer valuable feedback on the design.
                    Incorporating hands-on feedback from users is an essential and
                    particularly significant step, especially in cases where there is no
                    existing space available as a point of reference.
                </p>
                {generateTriggerFigure('hybridMockup')}
            </PageSection>

            <PageSection title="Constructions & Final Solution">
                <p>
                    Through the iterative design process it will hopefully reduce
                    changes during construction. However, there can always be unforeseen
                    issues that arise. The design team must be flexible and work with
                    the contractor to find solutions that meet the user&apos;s needs and
                    the requirements of the project.
                </p>
                {generateTriggerFigure('hybridFinal')}
                {generateTriggerFigure('final')}
            </PageSection>
            {generatePhotoModal()}
        </Dialog>
    )
}
