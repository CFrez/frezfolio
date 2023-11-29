import React from 'react'

import { LinkCard } from '../../components'

import { UserExperienceUrl } from '../urls'

export const UserExperienceHome: React.FC = () => {
    return (
        <>
            <p className="info">
                Architecture Design inspired me to pursue a Master&apos;s degree in
                Human Factors. Initially, my intention was to apply this expertise to
                the design of healthcare facilities. However, as I delved deeper into
                the field, my interests took a slight shift towards software design
                instead.
            </p>

            <LinkCard
                title="Zirtual Hiring"
                url={UserExperienceUrl.Zirtual}
                className="zirtual"
                graphic={
                    <img
                        className="zirtual"
                        src="projects/zirtual/hiring1.png"
                        alt="Hiring Initial Analysis"
                    />
                }
                notes="2014"
            >
                <p>
                    Zirtual is a virtual assistant company that was acquired by
                    Startups.co in 2016. I worked on the hiring process for Zirtual,
                    which included a web application for applicants to apply to be a
                    virtual assistant. I worked on the initial analysis of the hiring
                    process, and then worked on improving the process.
                </p>
            </LinkCard>
        </>
    )
}
