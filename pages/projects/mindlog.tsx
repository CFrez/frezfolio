import { Project } from "../../components"

import { mindlogDetails } from "../../data/projects"

import type { ProjectData } from "../../types"


export default function MindLog() {
    return <Project {...mindlogDetails} />
}
