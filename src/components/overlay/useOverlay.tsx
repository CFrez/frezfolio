import React, { useState, type ReactNode } from 'react';
import type {  HTMLProps } from 'react';

import {
    useFloating,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
} from '@floating-ui/react';
import type { UseFloatingReturn, ReferenceType } from '@floating-ui/react';

export interface UseOverlayProps {
    id: string;
    content: {
        header?: string;
        body: ReactNode;
        footer?: ReactNode;
    }
}

interface FloatingUIInterface {
    data: UseFloatingReturn<ReferenceType>;
    getReferenceProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
}


export interface UseOverlayInterface extends UseOverlayProps {
    isOpen: boolean;
    floatingUi: FloatingUIInterface;
    toggleOpen: () => void;
    toggleClose: () => void;
}


export function useOverlay(props: UseOverlayProps): UseOverlayInterface {
    const [isOpen, setIsOpen] = useState(false);

    const data = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const click = useClick(data.context);
    const dismiss = useDismiss(data.context, { outsidePressEvent: 'mousedown' });
    const role = useRole(data.context);

    const interactions = useInteractions([click, dismiss, role]);

    return {
        ...props,
        isOpen,
        floatingUi: {
            data,
            ...interactions,
        },
        toggleOpen: () => setIsOpen(true),
        toggleClose: () => setIsOpen(false),
    };
}
