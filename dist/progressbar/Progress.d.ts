export type Segment = {
    value: number;
    color: string;
};
type ProgressProps = {
    segments: Segment[];
    animate?: boolean;
    animationDuration?: number;
    maxValue?: number;
};
export declare function Progress({ segments, animate, animationDuration, maxValue, }: Readonly<ProgressProps>): import("react/jsx-runtime").JSX.Element;
export {};
