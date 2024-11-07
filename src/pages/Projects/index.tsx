import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProjectsHome } from './home'

import { archDesignProjects } from '../ArchDesign/projects'
import { archEngProjects } from '../ArchEng/projects'
import { miscDesignProjects } from '../MiscDesign/projects'
import { softwareProjects } from '../Software/projects'
import { userExperienceProjects } from '../UserExperience/projects'
import { ProjectData } from '@/types'

export const Projects: React.FC = () => {
    const allProjects: ProjectData[] = [
        ...archDesignProjects,
        ...archEngProjects,
        ...miscDesignProjects,
        ...softwareProjects,
        ...userExperienceProjects,
    ]

    return (
        <main id="projects" className={``}>
            <Routes>
                <Route index element={<ProjectsHome projects={allProjects} />} />
                {allProjects.map((project) => (
                    <Route
                        key={project.title}
                        path={project.url}
                        element={project.element}
                    />
                ))}
            </Routes>
        </main>
    )
}
