import React from 'react'

import './footer.sass'
import { Avatar } from '../../assets/avatar'

export const Footer: React.FC = () => {
    return (
        <footer className='page-footer'>
            <Avatar />
            <p>© Christina Frezynski</p>
        </footer>
    )
}
