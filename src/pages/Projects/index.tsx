import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ProjectsHome } from './home'
import { useProjectFilter } from './useProjectFilter'
import { ProjectsLayout } from './layout'

export const Projects: React.FC = () => {
    const { allProjects, filteredProjects } = useProjectFilter()

    return (
        <Routes>
            <Route index element={<ProjectsHome projects={filteredProjects} />} />
            <Route element={<ProjectsLayout />}>
                {allProjects.map((project) => (
                    <Route
                        key={project.title}
                        path={project.url}
                        element={project.element}
                    />
                ))}
            </Route>
        </Routes>
    )
}
