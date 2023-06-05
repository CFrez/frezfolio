import React from 'react'

import { PageTitle, PageSection } from '../../components'

import sipoc from '/images/projects/nellis/sipoc.jpg'
import orInitial from '/images/projects/nellis/initial.jpg'
import orFinal from '/images/projects/nellis/final.jpg'

export const NellisOR: React.FC = () => {
    return (
        <>
            <PageTitle
                title="Medical Center Operating Room Renovation"
                subtitle="Nellis Air Force Base, NV"
                description='This was a project to renovate the Medical Center on Nellis AFB.'
            />

            <PageSection title="Identifing the Problem">
                <img
                    src={orInitial}
                    alt="Picture of the Nellis Operating Room before construction."
                />
            </PageSection>

            <PageSection title="Understanding Requirements">
                <img src={sipoc} alt="Planning SIPOC map during design." />
            </PageSection>

            <PageSection title="Final Solution">
                <img
                    src={orFinal}
                    alt="Picture of the Nellis Operating Room at completion."
                />
            </PageSection>
        </>
    )
}
