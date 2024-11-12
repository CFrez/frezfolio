import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '@/assets/logo'
import { PageUrl } from '@/pages'

export const LogoLink: React.FC = () => {
    return (
        <Link to={PageUrl.Home} className="text-grey-800 hover:text-accent">
            <Logo className="h-[36px] sm:h-[52px] fill-current" />
        </Link>
    )
}
