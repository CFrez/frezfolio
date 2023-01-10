import React from 'react';

import type { ProjectData } from '../types';

export const Project: React.FC<ProjectData> = ({ title, description, details, imageSet, name}) => {
    return (
        <>
            <div className="project-header">
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>

            <hr/>

            {details}

            <div className="masonry-grid">
                {imageSet.map((image) =>
                    <figure className="card" key={image.src}>
                        <img src={`/images/projects/${name}/${image.src}.png`} alt={image.alt} />
                        <figcaption>{ image.alt }</figcaption>
                    </figure>

                )}
            </div>
        </>
    )
}