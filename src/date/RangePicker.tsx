"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";

type RangePickerProps = {
  className?: string;
  classNames?: {
    calendarIcon?: string;
    popoverContent?: string;
  };
  date?: DateRange;
  setDate: (date: DateRange | undefined) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const RangePicker = ({
  className,
  date,
  setDate,
  classNames,
  ...props
}: RangePickerProps) => {
  const formatDateRange = () => {
    if (!date?.from) return "Date de début - Date de fin";

    return date.to
      ? `${date.from.toLocaleDateString()} - ${date.to.toLocaleDateString()}`
      : date.from.toLocaleDateString();
  };

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            aria-label="Select date range"
            className={cn("justify-start text-left font-normal dark:bg-card")}
            id="date"
            variant="outline"
          >
            <CalendarIcon
              className={cn("mr-2 size-4", classNames?.calendarIcon)}
            />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={cn("w-auto p-0", classNames?.popoverContent)}
        >
          <Calendar
            initialFocus
            defaultMonth={date?.from}
            mode="range"
            numberOfMonths={2}
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
