import { ProjectData } from '@/types'

import { UnbTrees } from './UnbTrees'
import { Emotions } from './Emotions'

import { MiscDesignUrl } from '../urls'

export const miscDesignProjects: ProjectData[] = [
    {
        category: 'MiscDesign',
        title:"UNB Trees",
        url: MiscDesignUrl.UnbTrees,
        element: <UnbTrees />,
        subtitle:"Milwaukee Based Tree Service",
        graphic:{
            src: 'projects/unbtrees/citylogo.png',
            alt: 'Logo with milwaukee skyline roots.',
        },
        notes:"Illustrator, InDesign, Photoshop",
        details: (
            <p>
                UNB Trees is a Milwaukee, Wisconsin based tree service. I handled
                all of the graphic design for the company, including the logo,
                business cards, contracts, signage, and website.
            </p>
        ),
    },
    {
        category: 'MiscDesign',
        title: "Mental Health Emotions",
        url: MiscDesignUrl.Emotions,
        element: <Emotions />,
        subtitle: "Emotions and Mental Health",
        graphic: {
            src: 'projects/emotions/all.png',
            alt: 'All Emotions',
        },
        notes:"Illustrator",
        details: (
            <p>
                Motivated by a fascination with Alexithymia, a condition
                characterized by difficulty in identifying and expressing emotions,
                I embarked on a creative endeavor to develop a series of graphics
                that visually represent emotions.
            </p>
        ),
    },
]
