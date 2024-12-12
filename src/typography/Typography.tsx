import { forwardRef, PropsWithChildren } from "react";

import { cn } from "@/utils";

type TitleProps = {
  title: string;
  isLoading?: boolean;
  className?: string;
  loading?: () => React.ReactNode;
  tag?: Extract<
    keyof JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      title,
      isLoading = false,
      tag: CustomTitle = "h1",
      loading,
      className,
      ...props
    },
    ref,
  ) => {
    if (isLoading && loading) {
      return loading();
    }

    return (
      <CustomTitle
        ref={ref}
        className={cn(
          "text-xl scroll-m-20 font-bold tracking-tight",
          className,
        )}
        {...props}
      >
        {title}
      </CustomTitle>
    );
  },
);

Title.displayName = "Title";

type BlockquoteProps = PropsWithChildren<{
  className?: string;
}>;

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  ),
);

Blockquote.displayName = "Blockquote";

type InlineCodeProps = PropsWithChildren<{
  className?: string;
}>;

const InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  ({ className, children, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
);

InlineCode.displayName = "InlineCode";

export { Title, Blockquote, InlineCode };
