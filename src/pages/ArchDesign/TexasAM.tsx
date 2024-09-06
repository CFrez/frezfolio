import React from 'react'

import { PageTitle } from '../../components'

export const TexasAM: React.FC = () => {
    return (
        <>
            <PageTitle
                title="Bachelor's of Environmental Design"
                subtitle="Texas A&M University"
            >
                <p>
                    Below is my portfolio that I created to showcase work from this
                    degree.
                </p>
            </PageTitle>
            <iframe
                className='flex-grow-1 w-full md:h-full md:min-h-[800px]'
                title="Bachelor Degree Portfolio"
                src="https://indd.adobe.com/embed/428fb9e3-b200-423f-9008-47b0a6f168b1?startpage=1&allowFullscreen=false"
            />
        </>
    )
}
