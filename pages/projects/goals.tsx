import { Project } from "../../components"

import { goalDetails } from "../../data/projects"


export default function Goals() {
    return <Project {...goalDetails} />
}
