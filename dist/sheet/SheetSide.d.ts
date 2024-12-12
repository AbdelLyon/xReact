import { PropsWithChildren, ReactNode } from 'react';
import { SheetClose } from '../ui/sheet';
type Props = PropsWithChildren<{
    classNames?: {
        content?: string;
        trigger?: string;
    };
    trigger: ReactNode;
    title?: string;
    direction?: "left" | "top" | "bottom" | "right";
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
}>;
declare const SheetSide: ({ trigger, classNames, children, title, direction, open, onOpenChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export { SheetSide, SheetClose };
