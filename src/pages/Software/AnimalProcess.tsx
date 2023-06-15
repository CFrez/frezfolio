import React from 'react'

export const AnimalProcess: React.FC = () => {
    return (
        <>
            <details>
                <summary>1. Receive Animal</summary>
                <ul>
                    <li>Call FUPI hotline</li>
                    <li>Enter into database</li>
                    <li>Schedule meeting</li>
                    <li>Relinquishment Form</li>
                    <li>Transport dog to Vet</li>
                </ul>
            </details>
            <details>
                <summary>2. Process Animal</summary>
                <ul>
                    <li>Vet checks dog out</li>
                    <li>Spay/Neuter/Vaccination as needed</li>
                    <li>Input Vet Records to database</li>
                    <li>Mark animal as Available in database unless on hold</li>
                </ul>
            </details>
            <details>
                <summary>3. House Animal</summary>
                <ul>
                    <li>
                        Availability Check
                        <ul>
                            <li>Foster</li>
                            <li>Day Care</li>
                            <li>Leave at Vet</li>
                        </ul>
                    </li>
                    <li>
                        Animal transported from Vet
                        <ul>
                            <li>Transfer recorded in database</li>
                        </ul>
                    </li>
                    <li>
                        If animal transferred to:
                        <ul>
                            <li>
                                Foster
                                <ul>
                                    <li>
                                        Stays with Foster until Adopted/Unusual
                                        Circumstance
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Day Care / Pet Store
                                <ul>
                                    <li>Continue to look for Foster if needed</li>
                                </ul>
                            </li>
                            <li>
                                Vet
                                <ul>
                                    <li>Continue to look for Foster or Day Care</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </details>
            <details>
                <summary>4. Market Animal</summary>
                <ul>
                    <li>Input missing animal information/pictures into database</li>
                    <li>Set animal as available on website</li>
                </ul>
            </details>
            <details>
                <summary>5. Adoption Events</summary>
                <ul>
                    <li>Identify what location the animal will be</li>
                    <li>Generate advertisement of adoptable animals for event</li>
                </ul>
            </details>
            <details>
                <summary>6. Applications</summary>
                <ul>
                    <li>Initial Adoption Application</li>
                </ul>
            </details>
            <details>
                <summary>7. Approve Application</summary>
                <ul>
                    <li>“Board” reviews and decides</li>
                </ul>
            </details>
            <details>
                <summary>8. Home Check</summary>
                <ul>
                    <li>PetSmart Release Form</li>
                    <li>FUPI Adoption Agreement</li>
                    <li>Microchip Registration</li>
                    <li>Leave animal with new owners</li>
                </ul>
            </details>
            <details>
                <summary>9. Mark as Adopted</summary>
                <ul>
                    <li>Change status in database</li>
                    <li>Link to Adopter</li>
                </ul>
            </details>
        </>
    )
}
