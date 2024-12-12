import { DateRange } from 'react-day-picker';
import * as React from "react";
type RangePickerProps = {
    className?: string;
    classNames?: {
        calendarIcon?: string;
        popoverContent?: string;
    };
    date?: DateRange;
    setDate: (date: DateRange | undefined) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const RangePicker: ({ className, date, setDate, classNames, ...props }: RangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
