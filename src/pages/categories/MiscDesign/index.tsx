import { ProjectData, CategoryInfo } from '@/app/types'

import { emotionsProject } from './Emotions'
import { unbTreesProject } from './UnbTrees'

export const miscDesignProjects: ProjectData[] = [emotionsProject, unbTreesProject]

export const miscDesignInfo: CategoryInfo = {
    category: 'MiscDesign',
    info: (
        <>
            <p>
                No matter the situation, I always seem to find a way to design
                something. My projects span a wide range—from graphics for businesses to
                kids&apos; Halloween costumes, and even a panel saw crafted from printed
                parts, unistrut, and conduit. You never know what kinds of creative
                designs you&apos;ll discover here!
            </p>
            <p>
                Although most of my miscellaneous designs are small projects around the
                house, I always aim to share them. If they&apos;re helpful to me, they
                could also benefit someone else.
            </p>
        </>
    ),
}
