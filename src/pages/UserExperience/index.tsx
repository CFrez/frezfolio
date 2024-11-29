import { CategoryInfo, ProjectData } from '@/app/types'

import { zirtualProject } from './Zirtual'

export const userExperienceProjects: ProjectData[] = [zirtualProject]

export const userExperienceInfo: CategoryInfo = {
    category: 'UserExperience',
    info: (
        <>
            <p>
                My interest in architectural design led me to pursue a Master&apos;s
                degree in Human Factors, initially with the intent of applying my
                knowledge to healthcare facility design. However, as I explored the
                field further, my focus shifted toward user experience and software
                design.
            </p>
            <p>
                This degree sparked my passion for ensuring that accessibility and
                usability are a priority in all products and services I contribute to.
            </p>
        </>
    ),
}
