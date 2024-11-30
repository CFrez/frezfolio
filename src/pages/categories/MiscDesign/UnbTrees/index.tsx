import type { ProjectData } from '@/app/types'

import { UnbTrees } from './UnbTrees'

export const unbTreesProject: ProjectData = {
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
}
