import { ProjectData } from '@/types'

import { Labview } from './Labview'

export const archEngProjects: ProjectData[] = [
    {
        category: 'ArchEng',
        date: new Date(2020, 5, 1),
        title: 'Materials and Methods Lab',
        url: 'labview',
        element: <Labview />,
        subtitle: "MSOE Master's Project",
        graphic: {
            src: '/projects/labview/gui.png',
            alt: 'Main user interface of LabVIEW structural program.',
        },
        notes: 'LabVIEW',
        details: `
            For my graduate project, I redesigned software in the Materials and 
            Methods Lab at MSOE to teach structural analysis and design, requiring 
            knowledge of both software and structural principles. I used LabVIEW 
            for maintainability, as it's the platform from the testing 
            equipment's manufacturer.
        `,
    },
]
