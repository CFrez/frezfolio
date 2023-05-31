import React, { useRef, useEffect } from 'react'

import { Hero, Contact, LogoLink } from '../../components'
import './Home.sass'

export const Home: React.FC = () => {
    const logRef = useRef(0)
    useEffect(() => {
        if (logRef.current === 0) {
            console.log(
                'Please note that the height of the hero does not take into account if the inspection window is open at the bottom of the screen.',
                '\nThank you for taking the time to look closer at my code!',
            )
            logRef.current++
        }
    }, [])

    return (
        <main id="home">
            <div className="links">
                <LogoLink />
                <Contact />
            </div>
            <h1>
                Designer & Engineer
                <br />
                with any medium
            </h1>
            <Hero />
        </main>
    )
}
