import { BodyProps } from '../types/dataGridTypes';
export interface ColumnDefinition<T> {
    field?: keyof T;
    header: string;
    className?: string;
    cell?: (row: T, column: ColumnDefinition<T>) => React.ReactNode;
}
export declare const Body: import('react').MemoExoticComponent<(<T extends {
    id: string | number;
}>({ row, columns, isChecked, onCheckboxChange, children, observerRef, checkboxSelection, onAccordionClick, accordionContent, }: React.PropsWithChildren<BodyProps<T>>) => import("react/jsx-runtime").JSX.Element)>;
