import { Project } from "../../components"

import { lendingImages } from "../../data"

import type { ProjectData } from "../../types"

export const lendingDetails: ProjectData = {
    title: 'Lending Library',
    imageSet: lendingImages,
    details: <p>
    I have envisioned a Library App that allows for tracking what books I have, what I thought about them, and then others I want. The most important aspect of this app will be the ability to share this information with friends, and track books that I have leant and to whom.
    </p>,
    name: 'lending',
    description: 'A quick and easy way to track what books are on my shelf and which have been leant to a friend.',
    tags: ['planning'],
    process: ['planning'],
    type: 'software',

}

export default function Lending() {
    return <Project {...lendingDetails} />
}
