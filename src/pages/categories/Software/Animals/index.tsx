import type { ProjectData } from '@/app/types'

import { Animals } from './Animals'

export const animalsProject: ProjectData = {
    category: 'Software',
    date: new Date(2016, 7, 4),
    title: 'Pet Rescue',
    url: 'pet-rescue',
    element: <Animals />,
    graphic: {
        src: 'projects/animals/quick.png',
        alt: "Partial interface of an Animal's dashboard page.",
    },
    notes: '2014-2016',
    details: `
        While working with a foster-based pet rescue in Las Vegas, I noticed
        a need for better tracking and monitoring systems for the animals. 
        I initiated a design project to conceptualize and visualize solutions
        aimed at improving the organization's ability to manage and care 
        for the animals.
    `,
}
