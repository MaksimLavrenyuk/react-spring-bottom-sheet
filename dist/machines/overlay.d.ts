interface OverlayStateSchema {
    states: {
        closed: {};
        opening: {
            states: {
                start: {};
                transition: {};
                immediately: {
                    states: {
                        open: {};
                        activating: {};
                    };
                };
                smoothly: {
                    states: {
                        visuallyHidden: {};
                        activating: {};
                        open: {};
                    };
                };
                end: {};
                done: {};
            };
        };
        open: {};
        dragging: {};
        snapping: {
            states: {
                start: {};
                snappingSmoothly: {};
                end: {};
                done: {};
            };
        };
        resizing: {
            states: {
                start: {};
                resizingSmoothly: {};
                end: {};
                done: {};
            };
        };
        closing: {
            states: {
                start: {};
                deactivating: {};
                closingSmoothly: {};
                end: {};
                done: {};
            };
        };
    };
}
declare type OverlayEvent = {
    type: 'OPEN';
} | {
    type: 'SNAP';
    payload: {
        y: number;
        velocity: number;
        source: 'dragging' | 'custom' | string;
    };
} | {
    type: 'CLOSE';
} | {
    type: 'DRAG';
} | {
    type: 'RESIZE';
};
interface OverlayContext {
    initialState: 'OPEN' | 'CLOSED';
}
export declare const overlayMachine: import("xstate").StateMachine<OverlayContext, OverlayStateSchema, OverlayEvent, {
    value: any;
    context: OverlayContext;
}, import("xstate").ActionObject<OverlayContext, OverlayEvent>>;
export {};
