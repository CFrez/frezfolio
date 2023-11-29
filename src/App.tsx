import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'

import { PageUrl } from './pages/urls'
import {
    Layout,
    Home,
    ArchDesign,
    ArchEng,
    Graphics,
    Software,
    UserExperience,
    System,
} from './pages'

import './App.sass'

export const App: React.FC = () => {
    return (
        <MantineProvider>
            <div className="app">
                <Routes>
                    <Route path={PageUrl.Home} element={<Home />} />
                    <Route element={<Layout />}>
                        <Route
                            path={`${PageUrl.ArchDesign}/*`}
                            element={<ArchDesign />}
                        />
                        <Route
                            path={`${PageUrl.ArchEngineering}/*`}
                            element={<ArchEng />}
                        />
                        <Route
                            path={`${PageUrl.UserExperience}/*`}
                            element={<UserExperience />}
                        />
                        <Route
                            path={`${PageUrl.GraphicDesign}/*`}
                            element={<Graphics />}
                        />
                        <Route
                            path={`${PageUrl.SoftwareEngineering}/*`}
                            element={<Software />}
                        />
                    </Route>
                    <Route path={`${PageUrl.System}`} element={<System />} />
                </Routes>
            </div>
        </MantineProvider>
    )
}
