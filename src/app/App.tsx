import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AppContext, useAppContextHook } from './App.context'
import { Home, About, Projects, PageUrl, Layout } from '../pages'

export const App: React.FC = () => {
    const appContext = useAppContextHook()

    return (
        <AppContext.Provider value={appContext}>
            <Routes>
                <Route path={PageUrl.Home} element={<Home />} />
                <Route element={<Layout />}>
                    <Route path={PageUrl.About} element={<About />} />
                    <Route path={`${PageUrl.Projects}/*`} element={<Projects />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    )
}
