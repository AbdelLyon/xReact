import { ReactNode } from 'react';
export type SortConfig = {
    key: "id" | null;
    direction: "asc" | "desc";
};
export type ColumnDefinition<T> = {
    header: ReactNode;
    field?: keyof T;
    cell?: (row: T) => ReactNode;
    footer?: (data: T[]) => ReactNode;
    className?: string;
    actions?: string;
    sortable?: boolean;
};
export type FooterProps<T> = {
    columns: ColumnDefinition<T>[];
    rows: T[];
    footerContent?: ReactNode;
};
export type BodyProps<T extends {
    id: string | number;
}> = {
    row: T;
    rows: T[];
    columns: ColumnDefinition<T>[];
    isChecked: boolean;
    onCheckboxChange: (row: T) => void;
    observerRef?: (node?: Element | null) => void;
    i: number;
    checkboxSelection?: boolean;
    onAccordionClick?: (row: T) => void;
    accordionContent?: (row: T) => React.ReactNode;
};
export type HeaderProps<T extends {
    id: string | number;
}> = {
    columns: ColumnDefinition<T>[];
    isAllChecked: boolean;
    onSelectAll: (checked: boolean) => void;
    checkboxSelection: boolean;
    sortConfig: SortConfig;
    onSort: (column: keyof T, direction: "asc" | "desc") => void;
};
export type DataGridProps<T extends {
    id: string | number;
}> = {
    rows: T[];
    columns: ColumnDefinition<T>[];
    caption?: string;
    className?: string;
    footerContent?: React.ReactNode;
    isLoading?: boolean;
    skeletonRows?: number;
    onCheckedRowsChange?: (rows: T[]) => void;
    onFetchPage?: () => void;
    isFetching?: boolean;
    checkboxSelection?: boolean;
    onSort?: (column: keyof T, direction: "asc" | "desc") => void;
    onAccordionClick?: (row: T) => void;
    accordionContent?: (row: T) => React.ReactNode;
};
