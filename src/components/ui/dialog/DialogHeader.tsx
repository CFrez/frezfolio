import * as React from 'react'

import { cn } from '@/lib/tailwind.utils'

interface DialogHeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
    <header
        className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
        {...props}
    />
)
DialogHeader.displayName = 'DialogHeader'

export { DialogHeader, type DialogHeaderProps }
