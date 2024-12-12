import { PropsWithChildren, ReactNode } from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/ui/sheet";

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

const SheetSide = ({
  trigger,
  classNames,
  children,
  title,
  direction = "right",
  open,
  onOpenChange,
}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className={classNames?.trigger}>
        {trigger}
      </SheetTrigger>
      <SheetContent className={classNames?.content} side={direction}>
        {title && <SheetTitle className=" absolute top-2">{title}</SheetTitle>}
        <div className="mt-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export { SheetSide, SheetClose };
