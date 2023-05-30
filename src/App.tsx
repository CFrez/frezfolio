import React from 'react'
import { Switch, Route, useLocation} from 'react-router'

import { Footer, Header, Nav } from './components'
import { About, Home } from './pages'


export const App: React.FC =() => {
    const {pathname} = useLocation()

    const isHome = pathname === '/'


    return (
        <div className="App">
            {!isHome && <Header />}
            {!isHome && <Nav />}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            {!isHome && <Footer />}
        </div>
    )
}