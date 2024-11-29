import React from 'react'

import { Dialog } from '@/components/ui'

import { PageTitle, PageSection, usePhotoModal } from '@/components'
import { unbtreesPhotos } from './images'

export const UnbTrees: React.FC = () => {
    const { generatePhotoModal, generateTriggerFigure } = usePhotoModal<
        typeof unbtreesPhotos
    >({
        id: 'unbtrees',
        photos: unbtreesPhotos,
    })

    return (
        <Dialog>
            <PageTitle title="UNB Trees" category="MiscDesign">
                <p>
                    The tree service was a family-owned and operated business that
                    desired a professional yet approachable graphics.
                </p>
            </PageTitle>
            <PageSection title="Logo">
                <p>
                    Throughout the evolution of the logo, a noticeable progression
                    occurred in the size and visibility of the leaves on the tree. Over
                    time, this iterative process resulted in larger and more prominent
                    leaves within the design. To further emphasize the company&apos;s
                    location and affiliation with the city, the Milwaukee skyline was
                    incorporated as the roots of the tree. This addition served as a
                    symbolic representation of the company&apos;s connection to its
                    local surroundings and its presence within the community.
                </p>
                {generateTriggerFigure('logo')}
            </PageSection>
            <PageSection title="Business Card">
                <p>
                    The business card was meticulously designed to exude simplicity,
                    cleanliness, and professionalism, serving as an effective
                    representation of the company. The back of the card was specifically
                    crafted as a convenient reference, providing a quick overview of the
                    services offered. To enhance visual impact, the card was designed in
                    a unique square shape, allowing it to stand out from conventional
                    business cards while still fitting seamlessly into a wallet or
                    cardholder.
                </p>
                <div className="w-full flex gap-6 sm:gap-8 items-center justify-center mx-auto my-0 flex-wrap">
                    {generateTriggerFigure('bCFront', {
                        className: 'w-80 mx-0 min-w-[unset]',
                    })}
                    {generateTriggerFigure('bCBack', {
                        className: 'w-80 mx-0 min-w-[unset]',
                    })}
                </div>
            </PageSection>
            <PageSection title="Flyer">
                <p>
                    The flyer was thoughtfully crafted to ensure easy distribution and
                    legibility. The front side of the flyer presented a concise overview
                    of the company and its range of services. On the back, a selection
                    of photographs provided visual examples of the quality and outcomes
                    customers could expect. The flyer was printed on sturdy card stock,
                    measuring 8.5 x 5.5 inches, ensuring durability and a professional
                    appearance.
                </p>
                <div className="w-full flex gap-6 sm:gap-8 items-center justify-center mx-auto my-0 flex-wrap">
                    {generateTriggerFigure('flyerFront', {
                        className: 'w-96 max-h-[unset] mx-0',
                    })}
                    {generateTriggerFigure('flyerBack', {
                        className: 'w-96 max-h-[unset] mx-0',
                    })}
                </div>
            </PageSection>
            <PageSection title="Contract">
                <p>
                    The contract was thoughtfully crafted to prioritize simplicity and
                    clarity, ensuring a user-friendly experience for both the customer
                    and the company. It was designed to be easily filled out digitally
                    and could then be printed on standard letter-sized paper or emailed.
                    This format allowed for convenient storage, distribution, and easy
                    reference when needed. The emphasis on simplicity in the contract
                    aimed to promote a smooth and efficient agreement process while
                    maintaining a professional and organized approach.
                </p>
                {generateTriggerFigure('contract')}
            </PageSection>
            <PageSection title="Yard Signs">
                <p>
                    The yard signs were designed to be easily visible and legible from a
                    distance and aimed to create a lasting impression and effectively
                    communicate the company&apos;s message to passersby and potential
                    customers. The signs were printed on durable corrugated plastic,
                    measuring 18 x 24 inches, ensuring a professional appearance and
                    long-lasting quality.
                </p>
                {generateTriggerFigure('yardSign')}
                <p>
                    The &quot;Free Wood&quot; sign served as a valuable tool for
                    customers who wished to keep the cut wood on their property and
                    allow their neighbors to take it. This sign not only provided an
                    opportunity for the customer to receive a discount but also
                    generated additional business through positive word-of-mouth. By
                    offering this service, the company fostered a sense of community
                    engagement and goodwill, creating a mutually beneficial arrangement
                    where customers could benefit from a reduced cost while expanding
                    the company&apos;s reach through organic referrals.
                </p>
                {generateTriggerFigure('woodSign')}
            </PageSection>
            {generatePhotoModal()}
        </Dialog>
    )
}
