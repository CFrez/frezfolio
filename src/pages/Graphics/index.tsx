import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GraphicsHome } from './home'
import { UnbTrees } from './UnbTrees'
import { MentalHealth } from './MentalHealth'

import './index.sass'

export enum GraphicsUrl {
    UnbTrees = 'unb-trees',
    MentalHealth = 'mental-health',
}

export const Graphics: React.FC = () => {
    return (
        <main id="graphics">
            <Routes>
                <Route index element={<GraphicsHome />} />
                <Route path={GraphicsUrl.UnbTrees} element={<UnbTrees />} />
                <Route path={GraphicsUrl.MentalHealth} element={<MentalHealth />} />
            </Routes>
        </main>
    )
}
