import { memo, useCallback } from "react";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/ui/accordion";
import { Checkbox } from "@/input";
import { cn } from "@/utils";
import { BodyProps } from "@/types/dataGridTypes";

export interface ColumnDefinition<T> {
  field?: keyof T;
  header: string;
  className?: string;
  cell?: (row: T, column: ColumnDefinition<T>) => React.ReactNode;
}

export const Body = memo(
  <T extends { id: string | number }>({
    row,
    columns,
    isChecked,
    onCheckboxChange,
    children,
    observerRef,
    checkboxSelection,
    onAccordionClick,
    accordionContent,
  }: React.PropsWithChildren<BodyProps<T>>) => {
    const renderColumns = (
      column: ColumnDefinition<T>,
      row: T,
    ): React.ReactNode => {
      if (column.cell) {
        return column.cell(row, column);
      }

      const cellValue =
        column.field !== undefined ? row[column.field] : undefined;

      return cellValue as React.ReactNode;
    };

    const handleClick = useCallback(() => {
      onAccordionClick?.(row);
    }, [onAccordionClick, row]);

    return (
      <AccordionItem
        ref={observerRef}
        className="w-full last:border-b-0"
        value={String(row.id)}
      >
        <div className="relative flex h-14 w-full items-center px-4">
          {checkboxSelection && (
            <Checkbox
              checked={isChecked}
              className="mr-2"
              onCheckedChange={() => onCheckboxChange(row)}
            />
          )}
          {columns.map((column) => (
            <div
              key={`cell-${row.id}-${String(column.field)}`}
              className={cn("flex-1 text-left", column.className)}
            >
              {renderColumns(column as ColumnDefinition<T>, row)}
            </div>
          ))}
          {(accordionContent || children) && (
            <AccordionTrigger
              className="absolute right-4 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center"
              onClick={handleClick}
            />
          )}
        </div>
        {(accordionContent || children) && (
          <AccordionContent className="rounded-t px-2 shadow">
            {accordionContent || children}
          </AccordionContent>
        )}
      </AccordionItem>
    );
  },
);

Body.displayName = "Body";
