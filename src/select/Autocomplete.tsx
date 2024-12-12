// import { useState, useCallback } from "react";
// import { useInView } from "react-intersection-observer";

// import { ErrorMessage } from "../shared/input/ErrorMessage";
// import { LoadingSpinner } from "../shared/input/LoadingSpinner";
// import { SelectTrigger as Trigger } from "../shared/select/SelectTrigger";

// import { cn } from "@/utils";
// import { Popover, PopoverContent } from "@/ui/popover";
// import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
// import { SearchInput } from "@/shared/select/SearchInput";
// import { Options } from "@/shared/select/Options";
// import { SelectProps } from "@/types/formTypes";
// import {
//   SelectGroup,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
// } from "@/ui/select";

// const Select = ({
//   options,
//   label,
//   placeholder,
//   isSearchable,
//   width,
//   error,
//   isFetchingPage,
//   onFetchPage,
//   searchPlaceholder,
//   selectedKeys = [],
//   classNames = {},
//   value,
//   onSelect,
//   onSearch,
//   allOptionsLabel,
// }: SelectProps) => {
//   const { ref, inView } = useInView();
//   const [isOpen, setIsOpen] = useState(false);

//   useInfiniteScroll(inView, onFetchPage);

//   const handleOpenChange = useCallback((open: boolean) => {
//     setIsOpen(open);
//   }, []);

//   return (
//     <div data-testid="select">
//       <Popover open={isOpen} onOpenChange={handleOpenChange}>
//         {label && <label className="text-start">{label}</label>}
//         <Trigger
//           className={cn("w-full", classNames.trigger)}
//           error={error}
//           options={options}
//           placeholder={placeholder}
//           selectedKeys={selectedKeys}
//           value={value}
//           width={width}
//         />
//         <PopoverContent
//           className={cn("bg-white dark:bg-card", classNames.popover)}
//           style={{
//             width: width ?? "100%",
//           }}
//         >
//           {isSearchable && (
//             <SearchInput placeholder={searchPlaceholder} onSearch={onSearch} />
//           )}
//           <div className="relative">
//             <Options
//               allOptionsLabel={allOptionsLabel}
//               className={cn("bg-white dark:bg-card", classNames.popover)}
//               observerRef={ref}
//               options={options}
//               placeholder={placeholder}
//               selectedKeys={selectedKeys}
//               setIsOpen={setIsOpen}
//               value={value}
//               onSelect={onSelect}
//             />
//             {isFetchingPage && <LoadingSpinner />}
//           </div>
//         </PopoverContent>
//         {error && <ErrorMessage error={error} />}
//       </Popover>
//     </div>
//   );
// };

// export {
//   Select,
//   SelectGroup,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
// };

import {
  Autocomplete as AutocompleteComponent,
  AutocompleteItem,
  AutocompleteProps,
  SlotsToClasses,
} from "@nextui-org/react";
import { Key } from "@react-types/shared";

import { cn } from "@/utils";

// Type générique avec contraintes plus strictes
type GenericItem = {
  key: Key;
  label: string;
  [key: string]: any;
};

type GenericAutocompleteProps<T extends GenericItem> = {
  items: T[];
  labelKey?: keyof T;
  valueKey?: keyof T;
  descriptionKey?: keyof T;
  autocompleteProps?: Partial<AutocompleteProps<T>>;
  itemRenderer?: (item: T) => React.ReactElement;
  onSelectionChange?: (key: Key | null) => void;
  defaultSelectedKey?: Key;
  placeholder?: string;
  label?: string;
  description?: string;
  classNames?: SlotsToClasses<
    | "base"
    | "listbox"
    | "listboxWrapper"
    | "popoverContent"
    | "endContentWrapper"
    | "clearButton"
    | "selectorButton"
  >;
};

export function Autocomplete<T extends GenericItem>({
  items,
  labelKey = "label" as keyof T,
  valueKey = "key" as keyof T,
  descriptionKey = "description" as keyof T,
  autocompleteProps,
  itemRenderer,
  onSelectionChange,
  defaultSelectedKey,
  placeholder = "Search...",
  label,
  description,
  classNames,
}: GenericAutocompleteProps<T>) {
  const defaultItemRenderer = (item: T) => (
    <AutocompleteItem
      key={item[valueKey]}
      description={(item[descriptionKey] as string) || undefined}
    >
      {item[labelKey] as string}
    </AutocompleteItem>
  );

  return (
    <AutocompleteComponent
      className="max-w-xs"
      classNames={{
        popoverContent: cn("bg-background", classNames?.popoverContent),

        ...classNames,
      }}
      defaultItems={items}
      defaultSelectedKey={defaultSelectedKey}
      description={description}
      label={label}
      placeholder={placeholder}
      onSelectionChange={onSelectionChange}
      {...autocompleteProps}
    >
      {(item: T) =>
        itemRenderer ? itemRenderer(item) : defaultItemRenderer(item)
      }
    </AutocompleteComponent>
  );
}
