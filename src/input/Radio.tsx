import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";

export type RadioOptions = { value: string; label: string };

interface GenericRadioGroupProps {
  options: RadioOptions[];
  defaultValue?: string;
  name: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Radio({
  options,
  defaultValue,
  name,
  onChange,
  className = "",
}: Readonly<GenericRadioGroupProps>) {
  return (
    <RadioGroup
      className={className}
      defaultValue={defaultValue}
      name={name}
      onValueChange={onChange}
    >
      {options.map((option, index) => (
        <div
          key={option.value}
          className={`flex w-max items-center space-x-2 ${options.length === 1 ? "justify-start" : "justify-between"}`}
        >
          <RadioGroupItem id={`${name}-${index}`} value={option.value} />
          <label htmlFor={`${name}-${index}`}>{option.label}</label>
        </div>
      ))}
    </RadioGroup>
  );
}
