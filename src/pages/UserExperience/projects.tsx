import { ProjectData } from '@/types'

import { Zirtual } from './Zirtual'

export const userExperienceProjects: ProjectData[] = [
    {
        category: 'UserExperience',
        date: new Date(2014, 7, 6),
        title: 'Zirtual Hiring',
        url: 'zirtual',
        element: <Zirtual />,
        graphic: {
            src: 'projects/zirtual/hiring1.png',
            alt: 'Hiring Initial Analysis',
        },
        notes: '2014',
        details: `
            At Zirtual, I primarily focused on improving the user experience within 
            the hiring process. This involved analyzing the existing system, 
            identifying areas for improvement, and helping to implement these 
            enhancements.
        `,
    },
]
