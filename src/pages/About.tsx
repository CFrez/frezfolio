import React from 'react'
import { ArchEngInfo } from './ArchEng/Info'
import { ArchDesignInfo } from './ArchDesign/Info'
import { UserExperienceInfo } from './UserExperience/Info'
import { MiscDesignInfo } from './MiscDesign/Info'
import { SoftwareInfo } from './Software/Info'

export const About: React.FC = () => {
    return (
        <main id="about" className={`flex flex-col gap-8 sm:gap-[48px] md:pt-10`}>
            <ArchDesignInfo />
            <hr />
            <ArchEngInfo />
            <hr />
            <UserExperienceInfo />
            <hr />
            <MiscDesignInfo />
            <hr />
            <SoftwareInfo />
        </main>
    )
}
