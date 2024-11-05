import React from 'react'

const imgStyle = 'h-[30px] opacity-85 hover:opacity-100'

export const Contact: React.FC = () => (
    <div className="flex flex-row w-full gap-3 justify-end items-end">
        <a href="https://www.linkedin.com/in/cfrezynski/">
            <img className={imgStyle} src="/images/linkedin.png" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/CFrez/">
            <img className={imgStyle} src="/images/github.svg" alt="Github logo" />
        </a>
        <a href="https://www.printables.com/@RedFrez">
            <img
                className={imgStyle}
                src="/images/printables.png"
                alt="printables logo"
            />
        </a>
    </div>
)
