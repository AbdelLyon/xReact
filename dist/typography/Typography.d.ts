type TitleProps = {
    title: string;
    isLoading?: boolean;
    className?: string;
    loading?: () => React.ReactNode;
    tag?: Extract<keyof JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
};
declare const Title: import('react').ForwardRefExoticComponent<TitleProps & import('react').RefAttributes<HTMLHeadingElement>>;
declare const Blockquote: import('react').ForwardRefExoticComponent<{
    className?: string;
} & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLQuoteElement>>;
declare const InlineCode: import('react').ForwardRefExoticComponent<{
    className?: string;
} & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLElement>>;
export { Title, Blockquote, InlineCode };
