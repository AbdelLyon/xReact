import { useCallback } from "react";
import { Check } from "lucide-react";

import { cn } from "@/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { SelectProps } from "@/types/formTypes";
const Option = ({
  options,
  value,
  observerRef,
  handleSelect,
  selectedKeys,
}: Partial<SelectProps> & {
  handleSelect: (currentValue: string) => void;
}) => {
  return options?.map((item, index) => {
    const itemId = String(item?.id);
    const isSelected = value === item?.id;

    return (
      <CommandItem
        key={itemId}
        ref={options.length === index + 1 ? observerRef : null}
        className="flex justify-between py-2"
        value={itemId}
        onSelect={() => handleSelect(itemId)}
      >
        <p className="truncate">
          {selectedKeys?.map((key) => item[key] ?? "").join(" ")}
        </p>
        <Check
          className={cn(
            "mr-2 h-4 w-4",
            isSelected ? "text-green-600/80 opacity-100" : "opacity-0",
          )}
        />
      </CommandItem>
    );
  });
};

export const Options = ({
  options = [],
  onSelect,
  value,
  setIsOpen,
  selectedKeys = [],
  observerRef,
  className,
  allOptionsLabel,
}: SelectProps) => {
  const handleSelect = useCallback(
    (currentValue: string) => {
      const optionSelected = options.find(
        ({ id }) => String(id) === currentValue,
      );

      if (optionSelected) onSelect(optionSelected);

      if (setIsOpen) setIsOpen(false);
    },
    [onSelect, options, value, setIsOpen],
  );

  return (
    <Command className={cn("mb-1 bg-background dark:bg-card", className)}>
      <CommandList>
        {options.length === 0 && (
          <CommandEmpty className="hover:bg-light mx-1 mt-1 h-9 p-3 text-sm dark:hover:bg-background">
            Aucune option
          </CommandEmpty>
        )}

        {allOptionsLabel && (
          <CommandItem
            className="hover:bg-light mx-1 mt-1 h-9 p-3 text-sm dark:hover:bg-background"
            value=""
            onSelect={() => handleSelect("")}
          >
            {allOptionsLabel}
          </CommandItem>
        )}

        <CommandGroup>
          <Option
            handleSelect={handleSelect}
            observerRef={observerRef}
            options={options}
            selectedKeys={selectedKeys}
            value={value}
          />
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
