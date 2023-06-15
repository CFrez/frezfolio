import React, { type ReactNode } from 'react'

import {
    FloatingPortal,
    FloatingNode,
    FloatingTree,
    useFloatingNodeId,
    useFloatingParentNodeId,
} from '@floating-ui/react'

/**
 * This should be used in place of the FloatingPortal component.
 * It will create a new node and portal for the floating ui, and handle if it is nested or not.
 *
 * It will conditionally render the children based on the open prop.
 *
 * This should only be used while creating components and not directly in the app.
 */
export const OverlayWrapper: React.FC<{ open: boolean; children: ReactNode }> = ({
    open,
    children,
}) => {
    const nodeId = useFloatingNodeId()
    const parentId = useFloatingParentNodeId()

    const nested = parentId != null

    const floatingNode = (
        <FloatingNode id={nodeId}>
            <FloatingPortal id="FrezPortal">{open ? children : <></>}</FloatingPortal>
        </FloatingNode>
    )

    if (nested) {
        return <FloatingTree>{floatingNode}</FloatingTree>
    }

    return floatingNode
}
