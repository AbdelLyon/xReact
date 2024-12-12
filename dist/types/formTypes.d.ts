import { Dispatch, TextareaHTMLAttributes } from 'react';
export interface CommonInputProps {
    label?: string;
    error?: string;
    name?: string;
    className?: string;
    value?: string | number;
    width?: string | number;
    placeholder?: string;
}
export type InputType = "text" | "number" | "date" | "datetime-local" | "email" | "password" | "search" | "checkbox";
export interface InputProps extends CommonInputProps {
    type?: InputType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpenChange?: (open: boolean) => void;
    autoComplete?: string;
    iconSize?: number;
    isPasswordStrength?: boolean;
    min?: number;
    max?: number;
    classNames?: {
        root?: string;
        input?: string;
        icon?: string;
        label?: string;
    };
}
export interface CheckboxAndSwitchProps extends CommonInputProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    htmlForm?: string;
}
export type ExtendedSelectProps = {
    [key: string]: unknown;
    id?: string | number;
};
export interface SelectProps extends CommonInputProps {
    onSelect: (value: ExtendedSelectProps) => void;
    setIsOpen?: Dispatch<React.SetStateAction<boolean>>;
    observerRef?: (node?: Element | null) => void;
    isSearchable?: boolean;
    options: ExtendedSelectProps[];
    onSearch?: (value: string) => void;
    selectedKeys: (keyof ExtendedSelectProps)[];
    onFetchPage?: () => void;
    searchPlaceholder?: string;
    isFetchingPage?: boolean;
    classNames?: {
        popover?: string;
        trigger?: string;
        options?: string;
    };
    allOptionsLabel?: string;
}
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}
