import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export const AnimalProcess: React.FC = () => {
    const ulStyle = 'text-base [&>li]:text-base ml-[16px]'
    return (
        <Accordion type="multiple">
            <AccordionItem value="1">
                <AccordionTrigger>1. Receive Animal</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Call FUPI hotline</li>
                        <li>Enter into database</li>
                        <li>Schedule meeting</li>
                        <li>Relinquishment Form</li>
                        <li>Transport dog to Vet</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionTrigger>2. Process Animal</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Vet checks dog out</li>
                        <li>Spay/Neuter/Vaccination as needed</li>
                        <li>Input Vet Records to database</li>
                        <li>Mark animal as Available in database unless on hold</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
                <AccordionTrigger>3. House Animal</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>
                            Availability Check
                            <ul className={ulStyle}>
                                <li>Foster</li>
                                <li>Day Care</li>
                                <li>Leave at Vet</li>
                            </ul>
                        </li>
                        <li>
                            Animal transported from Vet
                            <ul className={ulStyle}>
                                <li>Transfer recorded in database</li>
                            </ul>
                        </li>
                        <li>
                            If animal transferred to:
                            <ul className={ulStyle}>
                                <li>
                                    Foster
                                    <ul className={ulStyle}>
                                        <li>
                                            Stays with Foster until Adopted/Unusual
                                            Circumstance
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Day Care / Pet Store
                                    <ul className={ulStyle}>
                                        <li>Continue to look for Foster if needed</li>
                                    </ul>
                                </li>
                                <li>
                                    Vet
                                    <ul className={ulStyle}>
                                        <li>Continue to look for Foster or Day Care</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
                <AccordionTrigger>4. Market Animal</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Input missing animal information/pictures into database</li>
                        <li>Set animal as available on website</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
                <AccordionTrigger>5. Adoption Events</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Identify what location the animal will be</li>
                        <li>Generate advertisement of adoptable animals for event</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
                <AccordionTrigger>6. Applications</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Initial Adoption Application</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="7">
                <AccordionTrigger>7. Approve Application</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>“Board” reviews and decides</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="8">
                <AccordionTrigger>8. Home Check</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>PetSmart Release Form</li>
                        <li>FUPI Adoption Agreement</li>
                        <li>Microchip Registration</li>
                        <li>Leave animal with new owners</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="9">
                <AccordionTrigger>9. Mark as Adopted</AccordionTrigger>
                <AccordionContent>
                    <ul className={ulStyle}>
                        <li>Change status in database</li>
                        <li>Link to Adopter</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
