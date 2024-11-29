import type { CategoryInfo, ProjectData } from '@/app/types'

import { mastersProjects } from './Masters'

export const archEngProjects: ProjectData[] = [...mastersProjects]

export const archEngInfo: CategoryInfo = {
    category: 'ArchEng',
    info: (
        <>
            <p>
                Architectural Engineering has captivated me for its practical
                applications and significant value, especially as someone living in a
                century-old home. While I never intended to pursue it as a career, I
                thoroughly enjoyed learning the foundational principles and practices of
                the field.
            </p>
            <p>
                During the pursuit of this Master&apos;s degree, I had the chance to
                explore this field deeply and explore a range of scientific programming
                languages and tools. These included Ansys, Matlab, LabVIEW, Jupyter, and
                Python. This furthered my interest in software development and data
                analysis.
            </p>
        </>
    ),
}
