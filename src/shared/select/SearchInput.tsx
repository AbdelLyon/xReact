import { useCallback } from "react";

import { Input } from "@/input";

type Props = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};
export const SearchInput = ({ placeholder, onSearch }: Props) => {
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onSearch?.(e.target.value),
    [onSearch],
  );

  return (
    <div className="m-2">
      <Input
        name="search"
        placeholder={placeholder}
        type="search"
        onChange={handleSearchChange}
      />
    </div>
  );
};
