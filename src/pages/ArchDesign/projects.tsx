import { ProjectData } from '@/types'

import { TexasAM } from './TexasAM'
import { NellisOR } from './NellisOR'

export const archDesignProjects: ProjectData[] = [
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
    {
        category: 'ArchDesign',
        date: new Date(2009, 5, 1),
        title: "Bachelor's of Environmental Design",
        url: 'texas-am',
        element: <TexasAM />,
        subtitle: 'Texas A&M University',
        graphic: {
            src: 'projects/cosc/perspective.jpg',
            alt: 'Rendering of a potential design for the College of Construction Science building at Texas A&M University.',
        },
        notes: 'August 2005 - May 2009',
        details: `
            I started this Bachelor&apos;s degree with aspirations of becoming a home 
            designer, inspired by my love for home renovation shows. However, in 
            my third year, I discovered healthcare architecture, which sparked a 
            deeper passion and became my focus during my final semester.
        `,
    },
]
