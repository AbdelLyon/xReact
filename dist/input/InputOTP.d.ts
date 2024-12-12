interface InputOTPProps {
    maxLength?: number;
    groupSize?: number;
    separator?: boolean;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    label?: string;
    classNames?: {
        root?: string;
        label?: string;
        input?: string;
        separator?: string;
        group?: string;
        slot?: string;
    };
    [key: string]: any;
}
export declare function InputOTP({ maxLength, groupSize, separator, onChange, onComplete, defaultValue, disabled, label, classNames, ...props }: Readonly<InputOTPProps>): import("react/jsx-runtime").JSX.Element;
export {};
