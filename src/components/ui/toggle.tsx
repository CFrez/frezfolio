import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/tailwind.utils'

const toggleVariants = cva(
    `
        inline-flex items-center justify-center gap-2 
        rounded-md bg-transparent
        text-sm font-medium 
        transition-colors 
        disabled:pointer-events-none disabled:opacity-50
    `,
    {
        variants: {
            size: {
                default: 'h-9 min-w-9',
                xs: 'h-6 min-w-6',
                sm: 'h-8 min-w-8',
                lg: 'h-10 min-w-10',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    },
)

const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
        VariantProps<typeof toggleVariants>
>(({ className, size, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ size, className }))}
        {...props}
    />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
