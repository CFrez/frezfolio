import type { ProjectData } from '@/app/types'
import { Emotions } from './Emotions'

import Sample from './images/sample.svg?react'

export const emotionsProject: ProjectData = {
    category: 'MiscDesign',
    date: new Date(2020, 7, 1),
    title: 'Emotions',
    url: 'emotions',
    element: <Emotions />,
    subtitle: 'Emotions and Mental Health',
    graphic: {
        element: Sample,
        alt: 'All Emotions',
    },
    notes: 'Illustrator',
    details: `
        Motivated by a fascination with Alexithymia, I embarked on a creative
        endeavor to develop a series of graphics that visually represent
        emotions.
       `,
}
