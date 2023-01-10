import React from 'react';

import Link from 'next/link';

import type { ProjectData } from '../types';

export const Card: React.FC<ProjectData> = (project) => {
    const image = project.imageSet.find((image) => image.primary === true)
    const ribbonSrc = `images/process/${project.process}-line.png`
    return (
        <Link className="card" href={`projects/${project.name}`}>
            {image && <img src={`/images/projects/${project.name}/${image.src}.png`} alt={image.alt}/>}
            <div className="content">
                <h3>{ project.title }</h3>
                <p>{ project.description }</p>
                <img className="ribbon" src={ribbonSrc} alt={project.process}/>
            </div>
        </Link>
    )
}