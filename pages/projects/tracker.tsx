import { Project } from "../../components"

import { trackerDetails } from "../../data/projects"


export default function Tracker() {
    return <Project {...trackerDetails} />
}
