import React from 'react';
export declare function useAriaHider({ targetRef, enabled, }: {
    targetRef: React.RefObject<Element>;
    enabled: boolean;
}): React.MutableRefObject<{
    activate: () => void;
    deactivate: () => void;
}>;
