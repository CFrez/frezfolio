import React from 'react'

import { LinkCard } from '../../components'

import { UserExperienceUrl } from '.'

import hiring1 from '/images/projects/zirtual/hiring1.png'

export const UserExperienceHome: React.FC = () => {
    return (
        <>
            <p className="info">User Experience and Human Factors</p>

            - for Arch - for CS
            - design of everyday things - motorcycle project
            <ul>
                <li>Fitt's Law - target distance and size</li>
                <li>Hick's Law - decision time increases with number and complexity</li>
                <li>Miller's Law - 7 +/- 2</li>
                <li>Jakob's Law - work the same as known things</li>
                <li>...</li>
            </ul>

            <LinkCard
                title="Zirtual Hiring"
                url={UserExperienceUrl.Zirtual}
                className="zirtual"
                graphic={
                    <img
                        className="zirtual"
                        src={hiring1}
                        alt="Hiring Initial Analysis"
                    />
                }
                notes="2014"
            >
                <p>
                    Zirtual is a virtual assistant company that was acquired by Startups.co in 2016. I worked on the
                    hiring process for Zirtual, which included a web application for applicants to apply to be a
                    virtual assistant. I worked on the initial analysis of the hiring process, and then worked on
                    improving the process.
                </p>
            </LinkCard>

        </>
    )
}
