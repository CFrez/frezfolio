import type { ProjectData } from '@/app/types'

import { NellisOR } from './NellisOR'

export const airForceProjects: ProjectData[] = [
    {
        category: 'ArchDesign',
        date: new Date(2016, 12, 16),
        title: 'MOFMC Realignment Project',
        url: 'mofmc-realignment',
        element: <NellisOR />,
        subtitle: 'United States Air Force',
        graphic: {
            src: 'projects/nellis/final.jpg',
            alt: 'Nellis Operating Room at completion.',
        },
        notes: 'July 2010 - December 2016',
        details: `
        I worked at Mike O'Callaghan Federal Medical Center (MOFMC) on Nellis AFB 
        in Las Vegas, NV, where I contributed to realigning the space after the 
        VA vacated the building. I then served as the Owner's Representative 
        for the Air Force throughout the renovation process.
    `,
    },
]
