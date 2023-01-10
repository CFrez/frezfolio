import { Project } from "../../components"

import { animalsImages } from "../../data"

import type { ProjectData } from "../../types"

export const animalDetails: ProjectData = {
    title: 'Animal Tracking',
    imageSet: animalsImages,
    details: <p>While volunteering and fostering with an Animal Resucue in Las Vegas, it became evident that their use of paper and google spreadsheets to manage data was not ideal. I worked through some of the requirements to generate a design option, but I did not have the chance to implement it prior to moving away.</p>,
    name: 'animal',
    description: 'an app to assist in tracking of fostered cats & dogs and adoptions',
    tags: ['design', 'planning', 'mockup'],
    process: ['planning', 'requirements'],
    type: 'software',

}

export default function Animals() {
    return <Project {...animalDetails} />
}
