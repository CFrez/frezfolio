import React from 'react'

import { Hero, Contact, LogoLink } from '../components'
import './Home.sass'

export const Home: React.FC = () => {
    return (
        <main id="home">
            <div className="links">
                <LogoLink />
                <Contact />
            </div>
            <h1>
                Designer & Engineer
                <br />
                in any medium
            </h1>
            <Hero />
        </main>
    )
}
