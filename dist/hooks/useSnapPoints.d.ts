import React from 'react';
import type { defaultSnapProps, ResizeSource, snapPoints } from '../types';
import { useReady } from './useReady';
export declare function useSnapPoints({ contentRef, controlledMaxHeight, footerEnabled, footerRef, getSnapPoints, headerEnabled, headerRef, heightRef, lastSnapRef, ready, registerReady, resizeSourceRef, }: {
    contentRef: React.RefObject<Element>;
    controlledMaxHeight?: number;
    footerEnabled: boolean;
    footerRef: React.RefObject<Element>;
    getSnapPoints: snapPoints;
    headerEnabled: boolean;
    headerRef: React.RefObject<Element>;
    heightRef: React.RefObject<number>;
    lastSnapRef: React.RefObject<number>;
    ready: boolean;
    registerReady: ReturnType<typeof useReady>['registerReady'];
    resizeSourceRef: React.MutableRefObject<ResizeSource>;
}): {
    minSnap: number;
    maxSnap: number;
    findSnap: (numberOrCallback: number | ((state: defaultSnapProps) => number)) => number;
    maxHeight: number;
};
