import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.sass'

export const Nav: React.FC = () => {
    return (
        <nav>
            <NavLink to="/archdesign">
                Architectural Design
            </NavLink>
            <NavLink to="/archeng">
                Architectural Engineering
            </NavLink>
            <NavLink to="/humanfactors">
                Human Factors
            </NavLink>
            <NavLink to="/ux">
                User Experience
            </NavLink>
            <NavLink to="/software">
                Software Engineering
            </NavLink>
        </nav>
    )
}
