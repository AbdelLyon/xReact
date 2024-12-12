import { ReactNode } from "react";

import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { cn } from "@/utils";

export type AccordionItemData = {
  title: () => ReactNode;
  description?: () => ReactNode;
  value: string;
  content: () => ReactNode;
  className?: string;
};

type AccordionProps = {
  classNames?: {
    container?: string;
    item?: string;
    title?: string;
    content?: string;
    description?: string;
  };
  items: AccordionItemData[];
  renderContent?: (item: AccordionItemData) => ReactNode;
  renderHeader?: (item: AccordionItemData) => ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({
  classNames,
  items,
  renderContent,
  renderHeader,
}) => {
  return (
    <div className={cn(classNames?.container)}>
      {items.map(({ title, description, value, content, className }) => (
        <AccordionRoot
          key={value}
          collapsible
          className={cn(
            "w-full rounded-md bg-card-light dark:bg-card",
            classNames?.item,
            className,
          )}
          type="single"
        >
          <AccordionItem
            className={cn("border border-border rounded-md")}
            value={value}
          >
            <AccordionTrigger className={cn("pr-3 pl-1", classNames?.title)}>
              {renderHeader ? (
                renderHeader({ title, description, value, content })
              ) : (
                <>
                  {title()}
                  {description && (
                    <div className={classNames?.description}>
                      {description()}
                    </div>
                  )}
                </>
              )}
            </AccordionTrigger>
            <AccordionContent
              className={cn("mt-1 px-4 py-2", classNames?.content)}
            >
              {renderContent
                ? renderContent({ title, value, content })
                : content()}
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      ))}
    </div>
  );
};
