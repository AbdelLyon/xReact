import { HTMLProps, PropsWithChildren } from 'react';
type CustomCardProps = PropsWithChildren<{
    className?: string;
    width?: number | string;
    height?: number | string;
    clickable?: boolean;
}>;
interface CardImageProps extends HTMLProps<HTMLDivElement> {
    height?: string | number;
    width?: string | number;
}
type Props = PropsWithChildren<{
    title: string;
    image: React.ReactNode;
    footer?: React.ReactNode;
    clickable?: boolean;
    heightImage?: number;
    width?: number;
    children: React.ReactNode;
    className?: string;
    classNames?: {
        image?: string;
        title?: string;
        content?: string;
        footer?: string;
    };
}>;
export declare const CardImage: import('react').ForwardRefExoticComponent<Omit<CardImageProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const CustomCard: ({ className, width, height, clickable, children, }: CustomCardProps) => import("react/jsx-runtime").JSX.Element;
declare const Card: ({ title, image, className, footer, clickable, heightImage, width, classNames, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Card };
