import React from 'react'

import type { CategoryInfo as CategoryInfoType } from '@/app/types'

import {
    archDesignInfo,
    archEngInfo,
    CategoryInfo,
    miscDesignInfo,
    softwareInfo,
    userExperienceInfo,
} from './categories'

export const About: React.FC = () => {
    const generateInfo = (
        { category, info }: CategoryInfoType,
        reverse: boolean = false,
    ) => <CategoryInfo category={category} children={info} reverse={reverse} />

    return (
        <main id="about" className={`flex flex-col gap-8 sm:gap-[48px] md:pt-10`}>
            {generateInfo(archDesignInfo)}
            <hr />
            {generateInfo(archEngInfo, true)}
            <hr />
            {generateInfo(userExperienceInfo)}
            <hr />
            {generateInfo(miscDesignInfo, true)}
            <hr />
            {generateInfo(softwareInfo)}
        </main>
    )
}
