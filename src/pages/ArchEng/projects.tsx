import { ProjectData } from '@/types'

import { ArchEngUrl } from '../urls'
import { Labview } from './Labview'

export const archEngProjects: ProjectData[] = [
    {
        category: 'ArchEng',
        title:"LabVIEW",
        url: ArchEngUrl.Labview,
        element: <Labview />,
        subtitle:"MSOE Master's Project",
        graphic:{
            src: '/projects/labview/gui.png',
            alt: 'Main user interface of LabVIEW structural program.',
        },
        details: (
            <p>
                For the Materials and Methods Lab, I undertook the task of
                revamping the software utilized by undergraduate students. With
                the equipment undergoing updates, it was essential to ensure
                that the accompanying software was also brought up to date.
                Leveraging LabVIEW, I developed a program that enabled students
                to conduct tests on various materials and seamlessly generate
                data for subsequent analysis.
            </p>
        ),
    },
]
