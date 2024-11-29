import React from 'react'

import type { CategoryInfo as CategoryInfoType } from '@/app/types'
import { cn } from '@/lib'

import { archDesignInfo } from './categories/ArchDesign'
import { archEngInfo } from './categories/ArchEng'
import { miscDesignInfo } from './categories/MiscDesign'
import { softwareInfo } from './categories/Software'
import { userExperienceInfo } from './categories/UserExperience'
import { CategoryInfo } from './categories/components'

export const About: React.FC = () => {
    const generateInfo = (
        { category, info }: CategoryInfoType,
        reverse: boolean = false,
    ) => (
        <CategoryInfo
            category={category}
            children={info}
            className={cn(reverse && 'flex-row-reverse sm:[&>div]:text-right')}
        />
    )

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
