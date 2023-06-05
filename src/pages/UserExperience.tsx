import React from 'react'


import hiring1 from '/images/projects/zirtual/hiring1.png'
import hiring2 from '/images/projects/zirtual/hiring2.png'

export const UserExperience: React.FC = () => {
    return (
        <main id="user-experience">
            <h1>User Experience Goes Here</h1>

            <img className='hiring' src={hiring1} alt="Hiring workload prior to process improvement" />
            <img className='hiring' src={hiring2} alt="Hiring workload after process improvement" />

        </main>
    )
}
