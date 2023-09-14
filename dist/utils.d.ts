export declare function clamp(number: number, lower: number, upper: number): number;
export declare function deleteNaN(arr: any): unknown[];
export declare function roundAndCheckForNaN(unrounded: any): number;
export declare function processSnapPoints(unsafeSnaps: number | number[], maxHeight: any): {
    snapPoints: number[];
    minSnap: number;
    maxSnap: number;
};
export declare const debugging: boolean;
