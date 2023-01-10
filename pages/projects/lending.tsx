import { Project } from "../../components"


import { lendingDetails } from "../../data/projects"


export default function Lending() {
    return <Project {...lendingDetails} />
}
