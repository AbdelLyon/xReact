import { DataGridProps } from '../types/dataGridTypes';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, className, footerContent, isLoading, skeletonRows, onCheckedRowsChange, children, onFetchPage, isFetching, checkboxSelection, onSort, onAccordionClick, accordionContent, }: React.PropsWithChildren<Readonly<DataGridProps<T>>>): import("react/jsx-runtime").JSX.Element;
