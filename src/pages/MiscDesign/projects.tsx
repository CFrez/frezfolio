import { ProjectData } from '@/types'

import { UnbTrees } from './UnbTrees'
import { Emotions } from './Emotions'
import { EmotionsSample } from './EmotionsSample'

export const miscDesignProjects: ProjectData[] = [
    {
        category: 'MiscDesign',
        date: new Date(2019, 5, 1),
        title: 'Milwaukee Tree Service',
        url: 'unb-trees',
        element: <UnbTrees />,
        subtitle: 'Milwaukee Based Tree Service',
        graphic: {
            src: 'projects/unbtrees/citylogo.svg',
            srcDark: 'projects/unbtrees/gray-logo.svg',
            alt: 'Logo with milwaukee skyline roots.',
        },
        notes: 'Illustrator, InDesign, Photoshop',
        details: `
            I managed all graphic design needs for the company, including the logo, 
            business cards, contracts, signage, and website.
        `,
    },
    {
        category: 'MiscDesign',
        date: new Date(2020, 7, 1),
        title: 'Emotions',
        url: 'emotions',
        element: <Emotions />,
        subtitle: 'Emotions and Mental Health',
        graphic: {
            element: EmotionsSample,
            src: 'projects/emotions/sample.svg',
            alt: 'All Emotions',
        },
        notes: 'Illustrator',
        details: `
            Motivated by a fascination with Alexithymia, I embarked on a creative
            endeavor to develop a series of graphics that visually represent
            emotions.
           `,
    },
]
