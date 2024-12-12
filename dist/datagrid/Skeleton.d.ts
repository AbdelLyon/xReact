import { ColumnDefinition } from '../types/dataGridTypes';
type SkeletonRowsProps<T> = {
    columns: ColumnDefinition<T>[];
    skeletonRows: number;
};
export declare function SkeletonRows<T>({ columns, skeletonRows, }: Readonly<SkeletonRowsProps<T>>): import("react/jsx-runtime").JSX.Element;
export declare const SkeletonRowAccordion: <T extends {
    id: string | number;
}>({ columns, index, }: {
    columns: ColumnDefinition<T>[];
    index: number;
}) => import("react/jsx-runtime").JSX.Element;
export {};
