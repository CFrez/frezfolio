import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ArchEngUrl } from '../urls'

import { ArchEngHome } from './home'
import { Labview } from './Labview'

import './index.sass'

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
