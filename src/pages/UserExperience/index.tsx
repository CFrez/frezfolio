import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserExperienceUrl } from '../urls'

import { UserExperienceHome } from './home'
import { Zirtual } from './Zirtual'

import './index.sass'

export const UserExperience: React.FC = () => {
    return (
        <main id="user-experience">
            <Routes>
                <Route index element={<UserExperienceHome />} />
                <Route path={UserExperienceUrl.Zirtual} element={<Zirtual />} />
            </Routes>
        </main>
    )
}
