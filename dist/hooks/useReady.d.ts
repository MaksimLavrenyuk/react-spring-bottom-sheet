export declare function useReady(): {
    ready: boolean;
    registerReady: (key: string) => () => void;
};
