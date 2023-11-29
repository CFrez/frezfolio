import type { ReactNode, FC } from 'react'

/**
 * If `children` are a string, wrap it in a tag (default `p`) with remaining props.
 * Otherwise, return `children` unchanged.
 */
export const Tag: FC<{
    children: ReactNode
    tag?: keyof JSX.IntrinsicElements
    [x: string]: unknown
}> = ({ children, tag: StringTag = 'p', ...rest }): ReactNode => {
    if (typeof children === 'string') {
        return <StringTag {...rest}>{children}</StringTag>
    }
    return children
}
