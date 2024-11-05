import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GraphicsUrl } from '../urls'

import { GraphicsHome } from './home'
import { UnbTrees } from './UnbTrees'
import { Emotions } from './Emotions'

export const Graphics: React.FC = () => {
    return (
        <main id="graphics" className="bg-graphics">
            <Routes>
                <Route index element={<GraphicsHome />} />
                <Route path={GraphicsUrl.UnbTrees} element={<UnbTrees />} />
                <Route path={GraphicsUrl.Emotions} element={<Emotions />} />
            </Routes>
        </main>
    )
}
