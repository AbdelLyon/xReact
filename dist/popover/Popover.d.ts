import { PropsWithChildren, ReactNode } from 'react';
import { PopoverClose } from '../ui/popover';
type Props = PropsWithChildren<{
    classNames?: {
        popover?: string;
        trigger?: string;
    };
    trigger: ReactNode;
}>;
declare const Popover: ({ classNames, trigger, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Popover, PopoverClose };
