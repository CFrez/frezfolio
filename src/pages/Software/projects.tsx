import { ProjectData } from '@/types'

import { SoftwareUrl } from '../urls'

import { Animals } from './Animals'


export const softwareProjects: ProjectData[] = [
    {
        category: 'Software',
        title:"Pet Rescue",
        url: SoftwareUrl.Animals,
        element: <Animals />,
        graphic:{
            src: 'projects/animals/quick.png',
            alt: "Partial interface of an Animal's dashboard page.",
        },
        notes:"2014-2016",
        details: (
            <p>
                During my involvement with a foster-based pet rescue
                organization in Las Vegas, Nevada, I became aware of the
                pressing need for improved tracking and monitoring systems for
                the animals. Recognizing this gap, I undertook a design exercise
                aimed at conceptualizing and visualizing potential solutions to
                address this issue. The primary objective was to envision a
                comprehensive and efficient tracking and monitoring system that
                would enhance the organization&apos;s ability to manage and care
                for the animals under its care.
            </p>
        ),
    },
]
