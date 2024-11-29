import React from 'react'

import { PageTitle, PageSection, usePhotoModal } from '@/components'
import { Dialog } from '@/components/ui'

import { zirtualPhotos } from './images'

export const Zirtual: React.FC = () => {
    const { generatePhotoModal, generateTriggerFigure } = usePhotoModal<
        typeof zirtualPhotos
    >({
        id: 'zirtual-hiring',
        photos: zirtualPhotos,
    })
    return (
        <Dialog>
            <PageTitle
                title="Zirtual"
                subtitle="Hiring Process Automation"
                category="UserExperience"
            >
                <p>
                    By conducting user interviews and analyzing the hiring process at
                    Zirtual, we uncovered pain points that the hiring team was facing.
                    Through our findings, we identified specific tasks that could be
                    automated, resulting in significant improvements. By implementing
                    these automation solutions, the team was able to streamline their
                    workflow, freeing up time previously spent on mundane tasks and
                    enabling them to concentrate on more crucial responsibilities. This
                    led to a reduction in required man hours, from five full-time
                    employees to just one part-time employee, resulting in increased
                    efficiency, enhanced throughput, and improved visibility throughout
                    the hiring process. Moreover, the automation allowed for
                    comprehensive statistical analysis, empowering the team to gain
                    valuable insights and make data-driven decisions for continuous
                    improvement.
                </p>
            </PageTitle>
            <PageSection title="Hiring Process Analysis">
                {generateTriggerFigure('initial')}
                {generateTriggerFigure('final')}
            </PageSection>
            {generatePhotoModal()}
        </Dialog>
    )
}
