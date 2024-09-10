import React from 'react'

import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    type DialogContentProps,
} from '../ui'
import { cn } from '@/lib/tailwind.utils'

interface ModalProps extends DialogContentProps {
    className?: string
    children: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
}

export const Modal = ({
    children,
    className,
    header,
    footer,
    ...props
}: ModalProps) => {
    return (
        <DialogContent
            className={cn(
                `
                flex flex-col
            `,
                className,
            )}
            {...props}
        >
            {header && (
                <DialogHeader className={`px-6 py-4 border-b-1`}>{header}</DialogHeader>
            )}
            <div className="grow overflow-hidden">{children}</div>
            {footer && (
                <DialogFooter className={`px-6 py-4 border-t-2`}>{footer}</DialogFooter>
            )}
        </DialogContent>
    )
}
