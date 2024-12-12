import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SkeletonRowAccordion } from "./Skeleton";
import { Body } from "./Body";
import { Header } from "./Header ";

import { Accordion } from "@/ui/accordion";
import { cn } from "@/utils";
import { useInfiniteScroll } from "@/hooks";
import { LoadingSpinner } from "@/shared/input/LoadingSpinner";
import { useDataGridState } from "@/hooks/useDataGridState";
import {
  ColumnDefinition,
  DataGridProps,
  SortConfig,
} from "@/types/dataGridTypes";

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  caption,
  className,
  footerContent,
  isLoading,
  skeletonRows = 10,
  onCheckedRowsChange,
  children,
  onFetchPage,
  isFetching,
  checkboxSelection = true,
  onSort,
  onAccordionClick,
  accordionContent,
}: React.PropsWithChildren<Readonly<DataGridProps<T>>>) {
  const { ref, inView } = useInView();

  useInfiniteScroll(inView, onFetchPage);

  const {
    checkedRows,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
  } = useDataGridState<T>(rows, onCheckedRowsChange, onSort);

  const memoizedColumns = useMemo(() => columns, [columns]);

  const renderSkeletons = useMemo(
    () =>
      Array(skeletonRows)
        .fill(null)
        .map((_, index) => (
          <SkeletonRowAccordion
            key={`skeleton-row-${crypto.randomUUID()}`}
            columns={memoizedColumns}
            index={index}
          />
        )),
    [skeletonRows, memoizedColumns],
  );

  const renderRows = useMemo(
    () =>
      rows.map((row, i: number) => {
        const expandedNode = accordionContent ? accordionContent(row) : null;

        return (
          <Body
            key={row.id}
            accordionContent={
              expandedNode as
                | ((row: { id: string | number }) => React.ReactNode)
                | undefined
            }
            checkboxSelection={checkboxSelection}
            columns={memoizedColumns as ColumnDefinition<any>[]}
            i={i}
            isChecked={checkedRows.has(row)}
            observerRef={i === rows.length - 1 ? ref : undefined}
            row={row}
            rows={rows}
            onAccordionClick={
              onAccordionClick as
                | ((row: { id: string | number }) => void)
                | undefined
            }
            onCheckboxChange={() => handleCheckboxChange(row)}
          >
            {expandedNode || children}
          </Body>
        );
      }),
    [
      rows,
      memoizedColumns,
      checkedRows,
      handleCheckboxChange,
      ref,
      checkboxSelection,
      onAccordionClick,
      accordionContent,
    ],
  );

  return (
    <div
      className={cn(
        "bg-white dark:bg-background border border-border relative rounded-t-md shadow-lg overflow-auto",
        className,
      )}
    >
      {caption && (
        <div className="p-4 text-center text-lg font-semibold">{caption}</div>
      )}
      <Accordion collapsible className="relative w-full" type="single">
        <Header
          checkboxSelection={checkboxSelection}
          columns={memoizedColumns as ColumnDefinition<any>[]}
          isAllChecked={isAllChecked}
          sortConfig={sortConfig as SortConfig}
          onSelectAll={handleSelectAll}
          onSort={handleSort}
        />

        {isLoading ? renderSkeletons : renderRows}
        {isFetching && <LoadingSpinner />}
      </Accordion>
      {footerContent && (
        <div className="border-t border-border p-4">{footerContent}</div>
      )}
    </div>
  );
}
