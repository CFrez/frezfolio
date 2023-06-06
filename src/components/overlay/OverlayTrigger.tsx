import React, { type ReactNode } from 'react';

import type { UseOverlayInterface} from './useOverlay'



export const OverlayTrigger: React.FC<UseOverlayInterface & { children: ReactNode }> = ({
    children,
    floatingUi,
}) => {
    const { data, getReferenceProps } = floatingUi;
    return (
        <button ref={data.refs.setReference} {...getReferenceProps()}>
            {children}
        </button>
    );
};