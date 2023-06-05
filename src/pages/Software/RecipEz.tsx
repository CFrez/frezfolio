
import React from 'react'

import { PageTitle } from '../../components'

import dashboard from '/images/projects/recipez/recipe-main.png'


export const RecipEz: React.FC = () => {
    return (
        <>
            <PageTitle title="RecipEz" subtitle="Version Control Recipe Manager" />
            More Content
            <img className='dashboard' src={dashboard} alt="Main page of a single recipe." />
        </>
    )
}
