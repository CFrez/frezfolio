import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { PageUrl } from './pages/urls'
import {
    Layout,
    Home,
    ArchDesign,
    ArchEng,
    Graphics,
    Software,
    UserExperience,
} from './pages'

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path={PageUrl.Home} element={<Home />} />
            <Route element={<Layout />}>
                <Route path={`${PageUrl.ArchDesign}/*`} element={<ArchDesign />} />
                <Route path={`${PageUrl.ArchEngineering}/*`} element={<ArchEng />} />
                <Route
                    path={`${PageUrl.UserExperience}/*`}
                    element={<UserExperience />}
                />
                <Route path={`${PageUrl.GraphicDesign}/*`} element={<Graphics />} />
                <Route
                    path={`${PageUrl.SoftwareEngineering}/*`}
                    element={<Software />}
                />
            </Route>
        </Routes>
    )
}
