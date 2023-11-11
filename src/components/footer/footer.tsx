import React from 'react'

import './footer.sass'
import Coder from '../../assets/avatar/coder.svg?react'

export const Footer: React.FC = () => {
    return (
        <footer className="page-footer">
            <Coder />
            <p>© Christina Frezynski</p>
        </footer>
    )
}
