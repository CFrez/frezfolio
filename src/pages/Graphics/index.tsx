import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GraphicsHome } from './home'
import { UnbTrees } from './UnbTrees'
import { Emotions } from './Emotions'

import './index.sass'

export enum GraphicsUrl {
    UnbTrees = 'unb-trees',
    Emotions = 'emotions',
}

export const Graphics: React.FC = () => {
    return (
        <main id="graphics">
            <Routes>
                <Route index element={<GraphicsHome />} />
                <Route path={GraphicsUrl.UnbTrees} element={<UnbTrees />} />
                <Route path={GraphicsUrl.Emotions} element={<Emotions />} />
            </Routes>
        </main>
    )
}
