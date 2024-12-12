import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { cn } from "@/utils";
import { PopoverTrigger } from "@/ui/popover";
import { SelectProps } from "@/types/formTypes";

export const SelectTrigger = ({
  className,
  value,
  selectedKeys = [],
  placeholder,
  width,
  options = [],
  error = "",
}: Partial<SelectProps>) => {
  const valueSelected = options?.find((item) => item?.id === value) ?? {};

  return (
    <PopoverTrigger asChild>
      <div
        className={cn(
          "flex h-11 cursor-pointer items-center justify-between rounded-md border border-border bg-white dark:bg-background px-3 relative",
          {
            "border-error": error !== "",
          },
          className,
        )}
        style={{
          width: width ?? "100%",
        }}
      >
        <p
          className={cn("truncate text-[13px]", {
            "opacity-50": !value,
          })}
        >
          {value
            ? selectedKeys?.map((s) => `${valueSelected?.[s]} `)
            : placeholder}
        </p>

        <FontAwesomeIcon
          className={cn("absolute right-3 shrink-0 opacity-50", {
            "text-error opacity-100": error !== "",
          })}
          icon={faChevronDown}
        />
      </div>
    </PopoverTrigger>
  );
};
