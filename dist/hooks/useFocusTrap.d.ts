/// <reference types="react" />
export declare function useFocusTrap({ targetRef, fallbackRef, initialFocusRef, enabled, }: {
    targetRef: React.RefObject<HTMLElement>;
    fallbackRef: React.RefObject<HTMLElement>;
    initialFocusRef?: React.RefObject<HTMLElement>;
    enabled: boolean;
}): import("react").MutableRefObject<{
    activate: () => void;
    deactivate: () => void;
}>;
