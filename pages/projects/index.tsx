import { projects } from '../../data/projects'

import { Card } from '../../components'

export default function Projects() {
    return (
        <>
            <h1>Various Assortment of Personal Projects</h1>
            <hr/>
            <div className='masonry-grid'>
            {projects.map((project) => <Card {...project} key={project.name}/>)}
            </div>
        </>
    )
}
