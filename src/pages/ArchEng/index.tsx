import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ArchEngHome } from './home'
import { Labview } from './Labview'

import './index.sass'

export enum ArchEngUrl {
    Labview = 'labview',
}

export const ArchEng: React.FC = () => {
    return (
        <main id="arch-eng">
            <Routes>
                <Route index element={<ArchEngHome />} />
                <Route path={ArchEngUrl.Labview} element={<Labview />} />
            </Routes>
        </main>
    )
}
