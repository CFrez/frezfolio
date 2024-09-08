import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import { cn } from '@/lib/tailwind.utils'

import { DialogPortal } from '.'
import { DialogOverlay } from './DialogOverlay'

interface DialogContentProps
    extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                `
                fixed left-[50%] top-[50%] 
                translate-x-[-50%] translate-y-[-50%] 
                z-50 
                bg-background 
                shadow-lg 
                sm:rounded-lg
                duration-200 
                data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
                data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
                `,
                className,
            )}
            {...props}
        >
            {children}
            <DialogPrimitive.Close
                className={`
                absolute right-4 top-3
                rounded-sm
                opacity-70
                transition-opacity
                hover:opacity-100
                focus:outline-none
                focus:ring-1
                focus:ring-ring
                focus:ring-offset-1
                disabled:pointer-events-none
                text-muted-foreground
            `}
            >
                <Cross2Icon className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export { DialogContent, type DialogContentProps }
