import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { SoftwareHome } from './home'
import { Animals } from './Animals'
import { RecipEz } from './RecipEz'

import './index.sass'

export enum SoftwareUrl {
    Animals = 'animals',
    RecipEz = 'recipez',
}

export const Software: React.FC = () => {
    return (
        <main id="software">
            <Routes>
                <Route index element={<SoftwareHome />} />
                <Route path={SoftwareUrl.Animals} element={<Animals />} />
                <Route path={SoftwareUrl.RecipEz} element={<RecipEz />} />
            </Routes>
        </main>
    )
}
