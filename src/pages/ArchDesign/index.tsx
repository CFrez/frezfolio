import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ArchDesignHome } from './home'
import { TexasAM } from './TexasAM'
import { NellisOR } from './NellisOR'

import './index.sass'

export enum ArchDesignUrl {
    TexasAM = 'texas-am',
    AirForce = 'air-force',
}

export const ArchDesign: React.FC = () => {
    return (
        <main id="arch-design">
            <Routes>
                <Route index element={<ArchDesignHome />} />
                <Route path={ArchDesignUrl.TexasAM} element={<TexasAM />} />
                <Route path={ArchDesignUrl.AirForce} element={<NellisOR />} />
            </Routes>
        </main>
    )
}
