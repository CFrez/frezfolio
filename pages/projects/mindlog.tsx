import { Project } from "../../components"

import { mindlogImages } from "../../data"

import type { ProjectData } from "../../types"

export const mindlogDetails: ProjectData = {
    title: 'Mindful Logging',
    imageSet: mindlogImages,
    details: <>
    <p>
    A tool to help capture and understand the different states of mind, and when they are used.
    </p>
    <p>
    [An article from Mindful](https://www.mindful.org/difference-between-being-and-doing/) provides good insight into the being and doing mind.
    </p>
    <p>
    This is an app that I took from start to finish.
    </p>
    </>,
    name: 'mindlog',
    description: 'quickly track how time is used and the mindful benefit.',
    tags: ['design', 'planning', 'app'],
    process: ['planning', 'requirements', 'analysis', 'development', 'testing', 'evaluation'],
    type: 'software',

}

export default function MindLog() {
    return <Project {...mindlogDetails} />
}
