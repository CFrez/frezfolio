import { useMemo } from 'react'

import { useAppContext } from '@/app/App.context'
import type { ProjectData } from '@/app/types'

import { archDesignProjects } from '../ArchDesign'
import { archEngProjects } from '../ArchEng'
import { miscDesignProjects } from '../MiscDesign'
import { softwareProjects } from '../Software'
import { userExperienceProjects } from '../UserExperience'

const allProjects: ProjectData[] = [
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

    return { allProjects, filteredProjects }
}
