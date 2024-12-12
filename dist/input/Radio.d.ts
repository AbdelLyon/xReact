export type RadioOptions = {
    value: string;
    label: string;
};
interface GenericRadioGroupProps {
    options: RadioOptions[];
    defaultValue?: string;
    name: string;
    onChange: (value: string) => void;
    className?: string;
}
export declare function Radio({ options, defaultValue, name, onChange, className, }: Readonly<GenericRadioGroupProps>): import("react/jsx-runtime").JSX.Element;
export {};
