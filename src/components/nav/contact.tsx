import React from 'react'

import github from '/images/github.svg'
import linkedin from '/images/linkedin.png'
import printables from '/images/printables.png'

import './contact.sass'

export const Contact: React.FC = () => {
    return (
        <div className="contact">
            <a href="https://www.linkedin.com/in/cfrezynski/">
                <img src={linkedin} alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/CFrez/">
                <img src={github} alt="Github logo" />
            </a>
            <a href="https://www.printables.com/@RedFrez">
                <img src={printables} alt="printables logo" />
            </a>
        </div>
    )
}
