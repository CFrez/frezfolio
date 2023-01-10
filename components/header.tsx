import React from 'react';

import { Nav } from './nav';

export const Header: React.FC = () => {
    return (
        <header id="page_header" aria-label="Header">
            <img src="/images/topper.svg" alt="Progression" className='topper' />
            <Nav/>
        </header>
    )
}