import React from 'react'

import type { ProjectData } from '@/app/types'
import { LinkCard } from '@/components'
import { useIsMobile } from '@/lib'

import { CategoryFilterList } from '../categories'

export const ProjectsHome: React.FC<{ projects: ProjectData[] }> = ({ projects }) => {
    const isMobile = useIsMobile()

    return (
        <main
            id="projects"
            className="grow flex flex-col gap-10 max-w-[1600px] mx-auto my-0 sm:p-6"
        >
            <header>
                <h2 className="text-center font-head text-xl">
                    Here&apos;s a selection of projects, and I&apos;ll continue adding
                    more as I collect their parts and pieces.
                </h2>
            </header>
            <div className="flex flex-row gap-8 mx-auto">
                {!isMobile && <CategoryFilterList />}
                <div className={`grid md:grid-cols-2 2xl:grid-cols-3 gap-6`}>
                    {projects.map((project) => (
                        <LinkCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </main>
    )
}
