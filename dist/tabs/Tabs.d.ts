import { PropsWithChildren } from 'react';
import { TabsContent } from '../ui/tabs';
export interface TabDefinition {
    value: string;
    titleTrigger: string;
    title?: string;
    description?: string;
}
interface ClassNames {
    root?: string;
    tabsList?: string;
    tabsTrigger?: string;
    card?: string;
    cardHeader?: string;
    cardTitle?: string;
    cardDescription?: string;
    cardContent?: string;
}
type TabsProps = PropsWithChildren<{
    defaultTab: string;
    tabs: TabDefinition[];
    classNames?: ClassNames;
    variant?: "default" | "button";
    onValueChange?: (value: string) => void;
}>;
declare function Tabs({ defaultTab, tabs, classNames, children, variant, onValueChange, }: Readonly<TabsProps>): import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsContent };
