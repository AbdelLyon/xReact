import { Language, StaticImageData } from "@/types/layoutTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { cn } from "@/utils";

export const SelectLanguage = ({
  value,
  languages,
  onLanguageChange,
}: {
  value: string;
  languages?: Language[];
  onLanguageChange?: (language: Language) => void;
}) => {
  return (
    <Select
      value={value ?? "fr"}
      onValueChange={(value) => {
        const selectedLanguage = languages?.find((l) => l.value === value);

        if (selectedLanguage) onLanguageChange?.(selectedLanguage);
      }}
    >
      <SelectTrigger
        className={cn(
          "focus:ring-0 shadow-none bg-transparent dark:text-white border-none w-max",
          { "text-muted-foreground": value === "" },
        )}
      >
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages?.map(
            (country: {
              flag?: StaticImageData;
              label?: string;
              value: string;
            }) => (
              <SelectItem key={country.value} value={country.value}>
                <img
                  alt={country.label ?? country.value}
                  className="h-[14px] w-[18px] rounded-sm"
                  src={country?.flag?.src}
                />
              </SelectItem>
            ),
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
