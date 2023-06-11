import React from 'react'

import { PageTitle } from '../../components'

import hiring1 from '/projects/zirtual/hiring1.png'
import hiring2 from '/projects/zirtual/hiring2.png'

export const Zirtual: React.FC = () => {
    return (
        <>
            <PageTitle title="Zirtual" subtitle="Version Control Recipe Manager" />
            More Content
            <img
                className="hiring"
                src={hiring1}
                alt="Hiring workload prior to process improvement"
            />
            <img
                className="hiring"
                src={hiring2}
                alt="Hiring workload after process improvement"
            />
        </>
    )
}
