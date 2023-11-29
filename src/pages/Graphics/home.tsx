import React from 'react'

import { LinkCard } from '../../components'

import { GraphicsUrl } from '../urls'

export const GraphicsHome: React.FC = () => {
    return (
        <>
            <p className="info">
                Graphic design is a hobby more than anything, but it seems like no
                matter what I am working on I can&apos;t help but create graphics for
                it. I have created logos, business cards, and other graphics for a few
                different projects.
            </p>

            <LinkCard
                title="UNB Trees"
                url={GraphicsUrl.UnbTrees}
                className="trees"
                subtitle="Milwaukee Based Tree Service"
                graphic={
                    <img
                        className="trees"
                        src="projects/unbtrees/citylogo.png"
                        alt="Logo with milwaukee skyline roots."
                    />
                }
                notes="Illustrator, InDesign, Photoshop"
            >
                <p>
                    UNB Trees is a Milwaukee, Wisconsin based tree service. I handled
                    all of the graphic design for the company, including the logo,
                    business cards, contracts, signage, and website.
                </p>
            </LinkCard>

            <LinkCard
                title="Mental Health Emotions"
                url={GraphicsUrl.Emotions}
                className="emotions"
                subtitle="Emotions and Mental Health"
                graphic={
                    <img
                        className="emotions"
                        src="projects/emotions/all.png"
                        alt="All Emotions"
                    />
                }
                notes="Illustrator"
            >
                <p>
                    Motivated by a fascination with Alexithymia, a condition
                    characterized by difficulty in identifying and expressing emotions,
                    I embarked on a creative endeavor to develop a series of graphics
                    that visually represent emotions.
                </p>
            </LinkCard>
        </>
    )
}
