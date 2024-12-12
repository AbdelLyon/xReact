import { ReactNode } from "react";
import { TooltipProps as TooltipPropsRoot } from "@radix-ui/react-tooltip";

import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { cn } from "@/utils";

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

export const Tooltip = ({
  trigger,
  content,
  triggerAsChild = false,
  delayDuration = 300,
  side = "top",
  align = "center",
  classNames = {},
  open,
  onOpenChange,
  sideOffset,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot
        delayDuration={delayDuration}
        open={open}
        onOpenChange={onOpenChange}
        {...props}
      >
        <TooltipTrigger asChild={triggerAsChild} className={classNames.trigger}>
          {trigger}
        </TooltipTrigger>
        <TooltipContent
          align={align}
          className={cn("z-50", classNames.content)}
          side={side}
          sideOffset={sideOffset}
        >
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
