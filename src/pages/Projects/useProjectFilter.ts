import { useMemo } from 'react'

import type { ProjectData } from '@/types'

import { archDesignProjects } from '../ArchDesign/projects'
import { archEngProjects } from '../ArchEng/projects'
import { miscDesignProjects } from '../MiscDesign/projects'
import { softwareProjects } from '../Software/projects'
import { userExperienceProjects } from '../UserExperience/projects'
import { useAppContext } from '@/app/App.context'

export const allProjects: ProjectData[] = [
    ...archDesignProjects,
    ...archEngProjects,
    ...miscDesignProjects,
    ...softwareProjects,
    ...userExperienceProjects,
].sort((a, b) => b.date.getTime() - a.date.getTime())

export const useProjectFilter = () => {
    const { activeCategories } = useAppContext()

    const filteredProjects = useMemo(() => {
        if (activeCategories.length === 0) return allProjects

        return allProjects.filter((project) =>
            activeCategories.includes(project.category),
        )
    }, [activeCategories, allProjects])

    return { filteredProjects }
}
