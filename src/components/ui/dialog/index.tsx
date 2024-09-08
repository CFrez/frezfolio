import * as DialogPrimitive from '@radix-ui/react-dialog'

export * from './DialogContent'
export * from './DialogDescription'
export * from './DialogFooter'
export * from './DialogHeader'
export * from './DialogOverlay'
export * from './DialogTitle'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

export { Dialog, DialogPortal, DialogTrigger, DialogClose }
