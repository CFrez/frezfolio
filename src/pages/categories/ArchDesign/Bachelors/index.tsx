import type { ProjectData } from '@/app/types'

import { TexasAM } from './TexasAM'

export const bachelorsProjects: ProjectData[] = [
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
