import { ForwardedRef, forwardRef, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/utils";
import {
  Card as CardRoot,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/ui/card";

// Props for the CustomCard component
type CustomCardProps = PropsWithChildren<{
  className?: string;
  width?: number | string;
  height?: number | string;
  clickable?: boolean;
}>;

// Props for the CardImage component
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

// CardImage component with forwardRef
export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  (
    { height = 100, width = 150, className, ...props },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-transform duration-300 ease-in-out transform",
          className,
        )}
        data-testid="card-image"
        style={{ height, width }}
        {...props}
      />
    );
  },
);

CardImage.displayName = "CardImage";

export const CustomCard = ({
  className,
  width,
  height,
  clickable = false,
  children,
}: CustomCardProps) => {
  return (
    <CardRoot
      className={cn(
        "relative flex flex-col border rounded-sm transition-transform duration-300 ease-in-out",
        {
          "cursor-pointer hover:shadow-lg": clickable,
        },
        className,
      )}
      data-testid="custom-card"
      style={{ width, height }}
    >
      {children}
    </CardRoot>
  );
};

const Card = ({
  title,
  image,
  className,
  footer,
  clickable = false,
  heightImage = 200,
  width = 300,
  classNames,
  children,
}: Props) => {
  return (
    <CustomCard
      className={`overflow-hidden ${className}`}
      clickable={clickable}
      width={width}
    >
      <CardImage
        className={`rounded-t-md ${classNames?.image}`}
        height={heightImage}
        width={width}
      >
        {image}
      </CardImage>
      <CardTitle className={`mt-2 px-4 ${classNames?.title}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
      </CardTitle>
      <CardContent className={`mt-2 px-4 ${classNames?.content}`}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter
          className={`flex w-full justify-end px-4 py-2 ${classNames?.footer}`}
        >
          {footer}
        </CardFooter>
      )}
    </CustomCard>
  );
};

export { Card };
