import React from 'react'

import { LinkCard } from '../../components'

import { UserExperienceUrl } from '.'

import hiring1 from '/images/projects/zirtual/hiring1.png'

export const UserExperienceHome: React.FC = () => {
    return (
        <>
            <p className="info">
                Architecture Design led to me to persue a Human Factors Master's degree. My original intent was to utilize
                it towards the design of healthcare facilities but instead my interest shifted to the design of software.
            </p>

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
