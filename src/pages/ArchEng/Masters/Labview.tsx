import React from 'react'

import { PageTitle, PageSection, usePhotoModal } from '@/components'
import { labViewPhotos } from './images'
import { Dialog } from '@/components/ui'

export const Labview: React.FC = () => {
    const { generatePhotoModal, generateTriggerFigure } = usePhotoModal<
        typeof labViewPhotos
    >({
        id: 'labview',
        photos: labViewPhotos,
    })

    return (
        <Dialog>
            <PageTitle
                title="Materials and Methods Lab"
                subtitle="Milwaukee School of Engineering"
                category="ArchEng"
            >
                <p>
                    The Materials and Methods Lab teaches students how structures should
                    react when forces are applied and then assists with testing the
                    theory. Since the equipment was getting updated to National
                    Instruments (NI) compact data acquisition chassis (cDAQ), the
                    software needed to be updated as well. I was tasked with creating a
                    new program to control the equipment and collect data.
                </p>
            </PageTitle>

            <PageSection title="Requirements">
                <p>
                    The previous setup entailed installing multiple LabVIEW programs on
                    the lab computer. However, the objective was to develop a new
                    solution that encompassed a single, versatile program installable on
                    any windows computer. This new program had to fulfill several
                    requirements, including equipment control, data collection, and data
                    visualization through graphs. Additionally, it needed to possess the
                    capability to save the data to a file for additional analysis.
                </p>
                <p>
                    When considering the programming language for this project, LabVIEW
                    was deliberately chosen due to its alignment with the lab&apos;s
                    standard practices. Moreover, as LabVIEW was developed by the same
                    company responsible for the hardware in use, it ensured a seamless
                    integration between the software and hardware components. Opting for
                    LabVIEW also provides the advantage of potential future support from
                    NI, further enhancing the reliability and longevity of the program.
                </p>
                {generateTriggerFigure('initial')}
            </PageSection>

            <PageSection title="Design">
                <p>
                    In order to establish the desired functionality of the program, I
                    collaborated closely with professors and lab technicians to gain a
                    comprehensive understanding of the lab&apos;s workflow. This
                    involved reviewing the existing programs and identifying the
                    essential features that needed to be incorporated. Given the
                    program&apos;s complexity, it was crucial to step outside of the
                    LabVIEW environment and meticulously plan and strategize the
                    program&apos;s logic. This thoughtful approach ensured a robust and
                    effective implementation of the program.
                </p>
                {generateTriggerFigure('gui')}
            </PageSection>

            <PageSection title="Documentation">
                <p>
                    As an integral part of the project, I prepared comprehensive
                    instructions for students regarding the installation and utilization
                    of the program. Additionally, I created a detailed guide that
                    provides step-by-step explanations on how the program functions,
                    including instructions on how to incorporate new tests or add a new
                    cDAQ if needed in the future. The final report utilized{' '}
                    <a
                        href="https://streamlit.io/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-secondary-dark"
                    >
                        Streamlit
                    </a>{' '}
                    to calculate and then graph theoretical calculations to compare with
                    the test results.
                </p>
                <div className="flex flex-wrap gap-6 justify-center align-center text-center">
                    <figure className="h-96 max-w-80">
                        <iframe
                            className="grow h-full"
                            title="Student Instructions"
                            src="https://indd.adobe.com/embed/89ab3bbf-a322-4a5b-a108-bd9217de7f44?startpage=1&allowFullscreen=true"
                            allowFullScreen
                        />
                        <figcaption>Student Instructions</figcaption>
                    </figure>
                    <figure className="h-96 max-w-80">
                        <iframe
                            className="grow h-full"
                            title="LabVIEW Guide"
                            src="https://indd.adobe.com/embed/68e996d3-5954-4ffc-97f5-6f740da7b179?startpage=1&allowFullscreen=true"
                            allowFullScreen
                        />
                        <figcaption>LabVIEW Guide</figcaption>
                    </figure>
                    <figure className="h-96 max-w-80">
                        <iframe
                            className="grow h-full"
                            title="Final Report"
                            src="https://indd.adobe.com/embed/9fb33c5d-c375-486e-bbd0-34a061c808db?startpage=1&allowFullscreen=true"
                            allowFullScreen
                        />
                        <figcaption>Final Report</figcaption>
                    </figure>
                </div>
            </PageSection>

            <PageSection title="Graphics">
                <p>
                    This was possibly my favorite part of the program, which is not
                    actually part of the program. I created this icon character based on
                    the test equipment used for the lab. I don&apos;t know how I never
                    gave him a name, but he still makes me smile.
                </p>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    <img
                        className="h-80"
                        src="/projects/labview/testing.jpg"
                        alt="testing equipment that inspired icon"
                    />
                    <img
                        className="h-80"
                        src="/projects/labview/icon.svg"
                        alt="icon inspired by testing equipment"
                    />
                </div>
            </PageSection>
            {generatePhotoModal()}
        </Dialog>
    )
}
