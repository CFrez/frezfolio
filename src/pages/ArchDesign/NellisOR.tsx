import React from 'react'

import { PageTitle } from '../../components'

import sipoc from '/images/projects/nellis/sipoc.jpg'
import orInitial from '/images/projects/nellis/initial.jpg'
import orFinal from '/images/projects/nellis/final.jpg'


export const NellisOR: React.FC = () => {
    return (
        <>
            <PageTitle title="Medical Center Operating Room Renovation" subtitle="Nellis Air Force Base" />
            <img src={sipoc} alt="Planning SIPOC map during design." />
            <img src={orInitial} alt="Picture of the Nellis Operating Room before construction." />
            <img src={orFinal} alt="Picture of the Nellis Operating Room at completion." />
        </>
    )
}
