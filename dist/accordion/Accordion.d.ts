import { ReactNode } from 'react';
export type AccordionItemData = {
    title: () => ReactNode;
    description?: () => ReactNode;
    value: string;
    content: () => ReactNode;
    className?: string;
};
type AccordionProps = {
    classNames?: {
        container?: string;
        item?: string;
        title?: string;
        content?: string;
        description?: string;
    };
    items: AccordionItemData[];
    renderContent?: (item: AccordionItemData) => ReactNode;
    renderHeader?: (item: AccordionItemData) => ReactNode;
};
export declare const Accordion: React.FC<AccordionProps>;
export {};
