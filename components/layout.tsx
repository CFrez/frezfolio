import React, {ReactNode} from 'react';
import Head from 'next/head'

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <Head>
                <title>FrezFolio</title>
                <meta name="description" content="Christina Frezysnki's Personal Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main id="page_body">
                {children}
            </main>
            <Footer/>
        </>
    )
}