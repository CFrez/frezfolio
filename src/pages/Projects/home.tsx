import React from 'react'

import type { ProjectData } from '@/types'
import { LinkCard } from '@/components'


export const ProjectsHome: React.FC<{projects: ProjectData[]}> = ({projects}) => {
    return (
        <div className={`p-4 flex flex-row flex-wrap gap-8`}>
            {projects.map((project) => (
                <LinkCard key={project.title} {...project} />
            ))}
        </div>
    )
}
