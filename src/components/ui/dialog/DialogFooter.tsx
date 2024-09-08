import * as React from 'react'

import { cn } from '@/lib/tailwind.utils'

interface DialogFooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
    <footer
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            className,
        )}
        {...props}
    />
)
DialogFooter.displayName = 'DialogFooter'

export { DialogFooter, type DialogFooterProps }
