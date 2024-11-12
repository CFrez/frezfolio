import React from 'react'

import { Outlet } from 'react-router-dom'

export const ProjectsLayout: React.FC = () => {
    return (
        <main id="projects" className="flex flex-col gap-4 p-8 max-w-7xl mx-auto my-0">
            <Outlet />
        </main>
    )
}
