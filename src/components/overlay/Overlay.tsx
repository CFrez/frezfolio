import React from 'react';

import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react';

import { OverlayWrapper } from './OverlayWrapper';
import type { UseOverlayInterface} from './useOverlay'



export const Overlay: React.FC<UseOverlayInterface> = ({
    content,
    floatingUi,
    id,
    isOpen,
    toggleClose,
}) => {
    const { data, getFloatingProps } = floatingUi;
    return (
        <OverlayWrapper open={isOpen}>
            <FloatingOverlay lockScroll>
                <FloatingFocusManager
                    context={data.context}
                    initialFocus={data.refs.floating}
                >
                    <div
                        ref={data.refs.setFloating}
                        {...getFloatingProps({
                            id,
                        })}
                    >
                        <header>
                            {content.header && <h3>{content.header}</h3>}
                            <button type="button" onClick={toggleClose}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                            </button>
                        </header>
                        <div className="content">
                            {content.body}
                        </div>
                        {content.footer && (
                            <footer data-testid="footer">
                                {content.footer}
                            </footer>
                        )}
                    </div>
                </FloatingFocusManager>
            </FloatingOverlay>
        </OverlayWrapper>
    );
};