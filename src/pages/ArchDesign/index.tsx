import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ArchDesignUrl } from '../urls'

import { ArchDesignHome } from './home'
import { TexasAM } from './TexasAM'
import { NellisOR } from './NellisOR'

export const ArchDesign: React.FC = () => {
    return (
        <main id="arch-design" className="bg-design">
            <Routes>
                <Route index element={<ArchDesignHome />} />
                <Route path={ArchDesignUrl.TexasAM} element={<TexasAM />} />
                <Route path={ArchDesignUrl.AirForce} element={<NellisOR />} />
            </Routes>
        </main>
    )
}
