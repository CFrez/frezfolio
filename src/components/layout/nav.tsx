import React from 'react'
import { NavLink } from 'react-router-dom'

import { PageUrl } from '@/pages'
import { useAppContext } from '@/app/App.context'

const navLinkStyle = 'text-grey-800 hover:underline [&.active]:underline'

export const Nav: React.FC = () => {
    const { resetCategories } = useAppContext()

    return (
        <nav className="flex flex-row lg:flex-col gap-5 lg:gap-0 self-start">
            <NavLink
                className={navLinkStyle}
                to={PageUrl.About}
                onClick={resetCategories}
            >
                About
            </NavLink>
            <NavLink
                className={navLinkStyle}
                to={PageUrl.Projects}
                onClick={resetCategories}
            >
                Projects
            </NavLink>
        </nav>
    )
}
