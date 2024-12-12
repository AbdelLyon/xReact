import { AutocompleteProps, SlotsToClasses } from '@nextui-org/react';
import { Key } from '@react-types/shared';
type GenericItem = {
    key: Key;
    label: string;
    [key: string]: any;
};
type GenericAutocompleteProps<T extends GenericItem> = {
    items: T[];
    labelKey?: keyof T;
    valueKey?: keyof T;
    descriptionKey?: keyof T;
    autocompleteProps?: Partial<AutocompleteProps<T>>;
    itemRenderer?: (item: T) => React.ReactElement;
    onSelectionChange?: (key: Key | null) => void;
    defaultSelectedKey?: Key;
    placeholder?: string;
    label?: string;
    description?: string;
    classNames?: SlotsToClasses<"base" | "listbox" | "listboxWrapper" | "popoverContent" | "endContentWrapper" | "clearButton" | "selectorButton">;
};
export declare function Autocomplete<T extends GenericItem>({ items, labelKey, valueKey, descriptionKey, autocompleteProps, itemRenderer, onSelectionChange, defaultSelectedKey, placeholder, label, description, classNames, }: GenericAutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
