import React from 'react'

import { Tabs } from '@mantine/core'

import { alters } from '../../data'
import type { Alter } from '../../data'

import './index.sass'

export const System: React.FC = () => {
    return (
        <main id="system">
            <Tabs unstyled defaultValue='system' className='tabs'>
                <Tabs.List className='tab-list'>
                    {alters.map((alter: Alter) => (
                        <Tabs.Tab key={alter.name} value={alter.name}>
                            {alter.avatar}
                            {alter.name}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panel value='system'>
                    <p className='info'>
                        Some people have names and then I started getting lazy and so
                        others are only letters. As a system, we go by Christina. Some
                        of our discovery was sabotaged by one member making up people...
                        so we kinda took a break and reset and these are the ones that
                        have been more &quot;formalized&quot; since. This is designed
                        to be a living document that will grow and change as we discover
                        more about our system.
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
