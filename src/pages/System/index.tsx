import React from 'react'

import { Tabs } from '@mantine/core'

import { alters } from '../../data'
import type { Alter } from '../../data'

import './index.sass'

export const System: React.FC = () => {
    return (
        <main id="system">
            <Tabs defaultValue="system" unstyled>
                <Tabs.List>
                    {alters.map((alter: Alter) => (
                        <Tabs.Tab key={alter.name} value={alter.name}>
                            {alter.avatar}
                            {alter.name}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panel value="system" className="info">
                    <h2>System</h2>
                    <p>
                        Some people have names, and others are more characteristics that
                        we have used thus far for categorization. Our theory is that one
                        day everyone will end up with some sort of name. There are more
                        characteristics that belong to new people or some of the ones
                        below. Some of our discovery was sabotaged by one member making
                        up people... so we kinda took a break and reset and these are
                        the ones that have been more "formalized" since.
                    </p>
                </Tabs.Panel>

                {alters.map((alter: Alter) => (
                    <Tabs.Panel key={alter.name} value={alter.name}>
                        {alter.avatar}
                        <h2>{alter.name}</h2>
                        <p>{alter.description}</p>
                    </Tabs.Panel>
                ))}
            </Tabs>
        </main>
    )
}
