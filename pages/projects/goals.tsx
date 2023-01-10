import { Project } from "../../components"

import { goalsImages } from "../../data"

import type { ProjectData } from "../../types"

export const goalDetails: ProjectData = {
    title: 'Goal Accomplishments Log',
    imageSet: goalsImages,
    details: <p>
        While this app in many forms does exist, the goal was to have one that easily integrated with my other apps.
        </p>,
    name: 'goals',
    description: 'a pretty app for tracking different types of goals and thoughts',
    tags: ['design', 'planning', 'mockup'],
    process: ['planning', 'requirements', 'analysis', 'development'],
    type: 'software',

}

export default function Goals() {
    return <Project {...goalDetails} />
}
