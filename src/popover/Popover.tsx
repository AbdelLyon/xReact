import { PropsWithChildren, ReactNode } from "react";

import {
  Popover as PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/ui/popover";
import { cn } from "@/utils";

type Props = PropsWithChildren<{
  classNames?: {
    popover?: string;
    trigger?: string;
  };
  trigger: ReactNode;
}>;

const Popover = ({
  classNames,
  trigger,

  children,
}: Props) => {
  return (
    <PopoverRoot>
      <PopoverTrigger
        asChild
        className={cn("border border-border rounded-md", classNames?.trigger)}
      >
        <div>{trigger}</div>
      </PopoverTrigger>
      <PopoverContent className={cn("mt-1 z-50", classNames?.popover)}>
        {children}
      </PopoverContent>
    </PopoverRoot>
  );
};

export { Popover, PopoverClose };
