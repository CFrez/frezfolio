import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserExperienceHome } from './home'
import { Laws } from './Laws'
import { Zirtual } from './Zirtual'

import './index.sass'

export enum UserExperienceUrl {
    Laws = 'laws',
    Zirtual = 'zirtual',
}

export const UserExperience: React.FC = () => {
    return (
        <main id="user-experience">
            <Routes>
                <Route index element={<UserExperienceHome />} />
                <Route path={UserExperienceUrl.Laws} element={<Laws />} />
                <Route path={UserExperienceUrl.Zirtual} element={<Zirtual />} />
            </Routes>
        </main>
    )
}
