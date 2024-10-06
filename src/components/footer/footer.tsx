import React from 'react'

import Coder from '../../assets/avatar/coder.svg?react'

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col gap-2 justify-center items-center px-12 py-6 ">
            <Coder className="h-16" />
            <p className="text-base">© Christina Frezynski</p>
        </footer>
    )
}
