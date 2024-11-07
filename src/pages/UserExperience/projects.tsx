import { ProjectData } from '@/types'

import { UserExperienceUrl } from '../urls' 
import { Zirtual } from './Zirtual'

export const userExperienceProjects: ProjectData[] = [
    {
        category: 'UserExperience',
        title: "Zirtual Hiring",
        url: UserExperienceUrl.Zirtual,
        element: <Zirtual />,
        graphic:{
            src: 'projects/zirtual/hiring1.png',
            alt: 'Hiring Initial Analysis',
        },
        notes:"2014",
        details: (
            <p>
                Zirtual is a virtual assistant company that was acquired by
                Startups.co in 2016. I worked on the hiring process for Zirtual,
                which included a web application for applicants to apply to be a
                virtual assistant. I worked on the initial analysis of the
                hiring process, and then worked on improving the process.
            </p>
        ),
    },
]
