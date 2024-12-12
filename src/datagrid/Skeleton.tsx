import { TableBody, TableCell, TableRow } from "@/ui/table";
import { cn } from "@/utils";
import { AccordionContent, AccordionItem } from "@/ui/accordion";
import { ColumnDefinition } from "@/types/dataGridTypes";

type SkeletonRowsProps<T> = {
  columns: ColumnDefinition<T>[];
  skeletonRows: number;
};

export function SkeletonRows<T>({
  columns,
  skeletonRows,
}: Readonly<SkeletonRowsProps<T>>) {
  return (
    <TableBody>
      {Array(skeletonRows)
        .fill(null)
        .map((_, rowIndex) => (
          <TableRow key={`skeleton-row-${rowIndex}`}>
            <TableCell className="w-[50px]">
              <div className="size-4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
            </TableCell>
            {columns.map((column, cellIndex) => (
              <TableCell
                key={`skeleton-cell-${rowIndex}-${cellIndex}`}
                className={column.className}
              >
                <div className="h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              </TableCell>
            ))}
            <TableCell className="w-[50px]">
              <div className="size-4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export const SkeletonRowAccordion = <T extends { id: string | number }>({
  columns,
  index,
}: {
  columns: ColumnDefinition<T>[];
  index: number;
}) => (
  <AccordionItem
    key={`skeleton-${index}`}
    className="w-full border-b last:border-b-0"
    value={`skeleton-${index}`}
  >
    <div className="flex h-14 w-full items-center px-4">
      <div className="mr-2 size-4 animate-pulse rounded-sm bg-border dark:bg-card" />{" "}
      {columns.map((column, colIndex) => (
        <div
          key={`skeleton-cell-${index}-${colIndex}`}
          className={cn("flex-1", column.className)}
        >
          <div className="h-4 w-3/4 animate-pulse rounded bg-border dark:bg-card" />
        </div>
      ))}
      <div className="size-4 animate-pulse rounded-sm bg-border dark:bg-card" />
    </div>
    <AccordionContent className="h-4 w-full bg-border dark:bg-card">
      <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-border dark:bg-card" />
    </AccordionContent>
  </AccordionItem>
);
