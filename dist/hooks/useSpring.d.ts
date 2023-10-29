export declare function useSpring(): [import("react-spring").AnimatedValue<import("react-spring").ForwardedProps<{
    y: unknown;
    ready: unknown;
    maxHeight: import("csstype").Property.MaxHeight<string | number>;
    minSnap: unknown;
    maxSnap: unknown;
}>>, import("react-spring").SetUpdateFn<{
    y: unknown;
    ready: unknown;
    maxHeight: import("csstype").Property.MaxHeight<string | number>;
    minSnap: unknown;
    maxSnap: unknown;
}>];
export type Spring = ReturnType<typeof useSpring>[0];
export type SpringSet = ReturnType<typeof useSpring>[1];
