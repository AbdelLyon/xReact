export interface SliderValues {
    min: number;
    max: number;
}
export interface SliderProps {
    className?: string;
    values: SliderValues;
    onChange?: (values: SliderValues) => void;
    max?: number;
    step?: number;
    min?: number;
    showTooltips?: boolean;
}
export declare function Slider({ className, onChange, values, max, min, step, showTooltips, ...props }: SliderProps): import("react/jsx-runtime").JSX.Element;
