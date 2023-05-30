
import { lendingImages, animalsImages,goalsImages, mindlogImages, recipezImages, trackerImages } from "../data"

import { Process } from "../constants"
import type { ProjectData } from "../types"

export const animalDetails: ProjectData = {
    title: 'Animal Tracking',
    imageSet: animalsImages,
    details: <p>While volunteering and fostering with an Animal Resucue in Las Vegas, it became evident that their use of paper and google spreadsheets to manage data was not ideal. I worked through some of the requirements to generate a design option, but I did not have the chance to implement it prior to moving away.</p>,
    name: 'animals',
    description: 'an app to assist in tracking of fostered cats & dogs and adoptions',
    tags: ['design', 'planning', 'mockup'],
    process: Process.Requirements,
    type: 'software',

}

export const goalDetails: ProjectData = {
    title: 'Goal Accomplishments Log',
    imageSet: goalsImages,
    details: (
        <p>
            While this app in many forms does exist, the goal was to have one that easily integrated with my other apps.
        </p>
    ),
    name: 'goals',
    description: 'a pretty app for tracking different types of goals and thoughts',
    tags: ['design', 'planning', 'mockup'],
    process: Process.Development,
    type: 'software',

}

export const lendingDetails: ProjectData = {
    title: 'Lending Library',
    imageSet: lendingImages,
    details: (
        <p>
            I have envisioned a Library App that allows for tracking what books
            I have, what I thought about them, and then others I want. The most
            important aspect of this app will be the ability to share this information
            with friends, and track books that I have leant and to whom.
        </p>
    ),
    name: 'lending',
    description: 'A quick and easy way to track what books are on my shelf and which have been leant to a friend.',
    tags: ['planning'],
    process: Process.Planning,
    type: 'software',

}


export const mindlogDetails: ProjectData = {
    title: 'Mindful Logging',
    imageSet: mindlogImages,
    details: (
        <>
            <p>
                A tool to help capture and understand the different states of mind, and when they are used.
            </p>
            <p>
                <a href="https://www.mindful.org/difference-between-being-and-doing/">An article from Mindful</a>
                provides good insight into the being and doing mind.
            </p>
            <p>
                This is an app that I took from start to finish.
            </p>
        </>
    ),
    name: 'mindlog',
    description: 'quickly track how time is used and the mindful benefit.',
    tags: ['design', 'planning', 'app'],
    process: Process.Evaluation,
    type: 'software',

}


export const recipezDetails: ProjectData = {
    title: 'RecipEZ',
    imageSet: recipezImages,
    details: (
        <p>
            version control recipe tracker that knows your pantry and tells you what to cook
        </p>
    ),
    name: 'recipez',
    description: 'the app I have dreamed of creating the most',
    tags: ['design', 'planning', 'mockup'],
    process: Process.Requirements,
    type: 'software',
}


export const trackerDetails: ProjectData = {
    title: 'Project Tracker',
    imageSet: trackerImages,
    details: (
        <>
            <p>
                This is an application I have dreamed of the most, but have yet to actually start building.
            </p>
            <p>
                It will be application that is a maker&apos;s best friend, allowing for rating/ranking of projects that are on your &quot;todo&quot; list, and then use those rankings to help choose which project to do next. It will help maintain an inventory of supplies. Importantly it will have a knowledge center of techniques or skills that would be needed to execute the project. Then if by chance you don&apos;t finish the project in one shot.... it will help document progress to enable easier resuming.
            </p>
        </>
    ),
    name: 'tracker',
    description: 'new best friend of any maker.',
    tags: ['design', 'planning'],
    process: Process.Requirements,
    type: 'software',

}

export const projects = [
    animalDetails,
    goalDetails,
    lendingDetails,
    mindlogDetails,
    recipezDetails,
    trackerDetails,
]