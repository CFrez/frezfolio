import { Project } from "../../components"

import { trackerImages } from "../../data"

import type { ProjectData } from "../../types"

export const trackerDetails: ProjectData = {
    title: 'Project Tracker',
    imageSet: trackerImages,
    details: <>
    <p>
    This is an application I have dreamed of the most, but have yet to actually start building.
    </p>
    <p>
    It will be application that is a maker&apos;s best friend, allowing for rating/ranking of projects that are on your &quot;todo&quot; list, and then use those rankings to help choose which project to do next. It will help maintain an inventory of supplies. Importantly it will have a knowledge center of techniques or skills that would be needed to execute the project. Then if by chance you don&apos;t finish the project in one shot.... it will help document progress to enable easier resuming.
    </p>
    </>,
    name: 'tracker',
    description: 'new best friend of any maker.',
    tags: ['design', 'planning'],
    process: ['planning', 'requirements'],
    type: 'software',

}

export default function Tracker() {
    return <Project {...trackerDetails} />
}
