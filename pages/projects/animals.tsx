import { Project } from "../../components"

import { animalDetails } from "../../data/projects"


export default function Animals() {
    return <Project {...animalDetails} />
}
