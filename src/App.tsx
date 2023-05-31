import React from 'react'
import { Switch, Route, useLocation } from 'react-router'

import { Footer, Header, Nav } from './components'
import { About, Home } from './pages'

import './App.sass'

export const App: React.FC = () => {
    const { pathname } = useLocation()

    const isHome = pathname === '/'

    if (isHome) {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }

    return (
        <div className="app">
            <div className="container">
                <Header />
                <Nav />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
    )
}
