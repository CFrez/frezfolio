import React from 'react'

import './contact.sass'

export const Contact: React.FC = () => {
    return (
        <div className="contact">
            <a href="https://www.linkedin.com/in/cfrezynski/">
                <img src="/images/linkedin.png" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/CFrez/">
                <img src="/images/github.svg" alt="Github logo" />
            </a>
            <a href="https://www.printables.com/@RedFrez">
                <img src="/images/printables.png" alt="printables logo" />
            </a>
        </div>
    )
}
