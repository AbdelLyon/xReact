// Header.tsx
import { ChevronDown, ChevronUp } from "lucide-react";
import { memo } from "react";

import { AccordionItem } from "@/ui/accordion";
import { Checkbox } from "@/input";
import { cn } from "@/utils";
import { HeaderProps } from "@/types/dataGridTypes";

export const Header = memo(
  <T extends { id: string | number }>({
    columns,
    isAllChecked,
    onSelectAll,
    checkboxSelection,
    sortConfig,
    onSort,
  }: HeaderProps<T>) => (
    <AccordionItem
      className="bg-card-light flex h-14 w-full items-center rounded-t-md px-4 py-3 dark:bg-card"
      value="header"
    >
      <div className="flex h-14 w-full items-center">
        {checkboxSelection && (
          <Checkbox
            checked={isAllChecked}
            className="mr-2 dark:border-white/5"
            onCheckedChange={onSelectAll}
          />
        )}
        {columns.map((column) => (
          <button
            key={`header-${String(column.field)}`}
            className={cn(
              "flex-1 font-semibold text-left flex items-center justify-between gap-2",
              column.className,
            )}
            onClick={() =>
              column.sortable &&
              column.field &&
              onSort(
                column.field,
                sortConfig.direction === "asc" ? "desc" : "asc",
              )
            }
          >
            <div className="flex items-center gap-1">
              <p className="grow opacity-80">{column.header}</p>
              {column.sortable && column.field && (
                <div className="relative size-4 shrink-0">
                  <ChevronUp
                    className={cn(
                      "absolute -top-1 transition-opacity duration-200",
                      sortConfig.key === column.field &&
                        sortConfig.direction === "asc"
                        ? "opacity-80"
                        : "opacity-30",
                    )}
                    size={15}
                  />
                  <ChevronDown
                    className={cn(
                      "absolute top-1 transition-opacity duration-200",
                      sortConfig.key === column.field &&
                        sortConfig.direction === "desc"
                        ? "opacity-80"
                        : "opacity-30",
                    )}
                    size={15}
                  />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </AccordionItem>
  ),
);

Header.displayName = "Header";
