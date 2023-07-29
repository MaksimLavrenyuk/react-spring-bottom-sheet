import React from 'react';
import type { defaultSnapProps, RefHandles } from './types';
export declare const BottomSheet: React.ForwardRefExoticComponent<{
    initialState: 'OPEN' | 'CLOSED';
    lastSnapRef: React.MutableRefObject<number | null>;
} & {
    children: React.ReactNode;
    sibling?: React.ReactNode;
    onSpringStart?: (event: import("./types").SpringEvent) => void;
    onSpringCancel?: (event: import("./types").SpringEvent) => void;
    onSpringEnd?: (event: import("./types").SpringEvent) => void;
    open: boolean;
    className?: string;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    initialFocusRef?: false | React.RefObject<HTMLElement>;
    onDismiss?: () => void;
    blocking?: boolean;
    maxHeight?: number;
    scrollLocking?: boolean;
    snapPoints?: import("./types").snapPoints;
    defaultSnap?: number | ((props: defaultSnapProps) => number);
    reserveScrollBarGap?: boolean;
    skipInitialTransition?: boolean;
    expandOnContentDrag?: boolean;
} & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "children"> & React.RefAttributes<RefHandles>>;
