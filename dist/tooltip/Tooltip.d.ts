import { ReactNode } from 'react';
import { TooltipProps as TooltipPropsRoot } from '@radix-ui/react-tooltip';
interface TooltipProps extends Omit<TooltipPropsRoot, "children"> {
    trigger: ReactNode;
    content: ReactNode;
    triggerAsChild?: boolean;
    delayDuration?: number;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    classNames?: {
        root?: string;
        trigger?: string;
        content?: string;
    };
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    sideOffset?: number;
}
export declare const Tooltip: ({ trigger, content, triggerAsChild, delayDuration, side, align, classNames, open, onOpenChange, sideOffset, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export {};
