import React from 'react'
import { NavLink } from 'react-router-dom'

import { PageUrl } from '@/data/pages'

import './nav.sass'

export const Nav: React.FC = () => {
    return (
        <nav>
            <NavLink to={PageUrl.ArchDesign}>Architectural Design</NavLink>
            <NavLink to={PageUrl.ArchEngineering}>Architectural Engineering</NavLink>
            <NavLink to={PageUrl.UserExperience}>User Experience</NavLink>
            <NavLink to={PageUrl.GraphicDesign}>Graphic Design</NavLink>
            <NavLink to={PageUrl.SoftwareEngineering}>Software Engineering</NavLink>
        </nav>
    )
}
