import React from 'react'

import { LinkCard } from '../../components'

import { UserExperienceUrl } from '.'

import hiring1 from '/images/projects/zirtual/hiring1.png'

export const UserExperienceHome: React.FC = () => {
    return (
        <>
            <p className='info'>
                User Experience and Human Factors
            </p>

            - for Arch
            - for CS
            - design of everyday things
            - motorcycle project
            <ul>
                <li>Fitt's Law - target distance and size</li>
                <li>Hick's Law - decision time increases with number and complexity</li>
                <li>Miller's Law - 7 +/- 2</li>
                <li>Jakob's Law - work the same as known things</li>
                <li>...</li>
            </ul>

            <LinkCard
                title='Zirtual Hiring'
                url={UserExperienceUrl.Zirtual}
                className='zirtual'
                graphic={<img className='zirtual' src={hiring1} alt="Hiring Initial Analysis" />}
            />

            <LinkCard
                title='Laws of Human Factors?'
                url={UserExperienceUrl.Laws}
                className='recipez'
                graphic={<img className='recipez' src={''} alt="Something" />}
            />
        </>
    )
}
