import { Project } from "../../components"

import { recipezImages } from "../../data"

import type { ProjectData } from "../../types"

export const recipezDetails: ProjectData = {
    title: 'RecipEZ',
    imageSet: recipezImages,
    details: <p>
    version control recipe tracker that knows your pantry and tells you what to cook
    </p>,
    name: 'recipez',
    description: 'the app I have dreamed of creating the most',
    tags: ['design', 'planning', 'mockup'],
    process: ['planning', 'requirements'],
    type: 'software',
}

export default function RecipEZ() {
    return <Project {...recipezDetails} />
}
