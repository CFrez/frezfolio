import * as React from 'react'

import { cn } from '@/lib/tailwind.utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <article
            ref={ref}
            className={cn(
                'rounded-lg bg-card text-card-foreground shadow hover:shadow-lg transition-shadow',
                className,
            )}
            {...props}
        />
    ),
)
Card.displayName = 'Card'

const FlipCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <article
            ref={ref}
            className={cn('group perspective-1000', className)}
            {...props}
        />
    ),
)
FlipCard.displayName = 'FlipCard'

const CardFront = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <Card
        ref={ref}
        className={cn(
            `
                    w-full h-full
                    backface-hidden
                    transform transition duration-1000
                    group-hover:rotate-y-180
                    absolute t-0 l-0
                `,
            className,
        )}
        {...props}
    />
))
CardFront.displayName = 'CardFront'

const CardBack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <Card
            ref={ref}
            className={cn(
                `
                    w-full h-full
                    backface-hidden
                    transform transition duration-1000
                    rotate-y-180 group-hover:rotate-y-0
                    absolute t-0 l-0
                `,
                className,
            )}
            {...props}
        />
    ),
)
CardBack.displayName = 'CardBack'

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <header ref={ref} className={cn('flex flex-col', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn('font-head font-semibold leading-none tracking-tight', className)}
        {...props}
    />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <footer ref={ref} className={cn('flex', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export {
    Card,
    CardBack,
    CardContent,
    CardDescription,
    CardFooter,
    CardFront,
    CardHeader,
    CardTitle,
    FlipCard,
}
