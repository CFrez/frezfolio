import * as React from 'react'

import { cn } from '@/lib/tailwind.utils'

const baseCardStyle =
    'rounded-lg bg-card text-card-foreground shadow hover:shadow-lg transition-shadow'
const flipCardStyle = `w-full h-full backface-hidden transform transition duration-1000 absolute t-0 l-0`

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <article ref={ref} className={cn(baseCardStyle, className)} {...props} />
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
    <div
        ref={ref}
        className={cn(
            baseCardStyle,
            flipCardStyle,
            `group-hover:rotate-y-180 group-focus:rotate-y-180 group-active:rotate-y-180`,
            className,
        )}
        {...props}
    />
))
CardFront.displayName = 'CardFront'

const CardBack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                baseCardStyle,
                flipCardStyle,
                `rotate-y-180 group-hover:rotate-y-0 group-focus:rotate-y-0 group-active:rotate-y-0`,
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
