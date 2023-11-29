import type { ReactNode, FC } from 'react'

import type { UseOverlayInterface } from './useOverlay'

export const OverlayTrigger: FC<UseOverlayInterface & { children: ReactNode }> = ({
    children,
    floatingUi,
}) => {
    const { data, getReferenceProps } = floatingUi
    return (
        <button type="button" ref={data.refs.setReference} {...getReferenceProps()}>
            {children}
        </button>
    )
}
