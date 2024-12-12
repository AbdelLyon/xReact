import { Fragment } from "react/jsx-runtime";

import {
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  InputOTP as InputOTPRoot,
} from "@/ui/input-otp";
import { cn } from "@/utils";

interface InputOTPProps {
  maxLength?: number;
  groupSize?: number;
  separator?: boolean;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  classNames?: {
    root?: string;
    label?: string;
    input?: string;
    separator?: string;
    group?: string;
    slot?: string;
  };
  [key: string]: any;
}

export function InputOTP({
  maxLength = 6,
  groupSize = 3,
  separator = true,
  onChange,
  onComplete,
  defaultValue = "",
  disabled = false,
  label,
  classNames = {},
  ...props
}: Readonly<InputOTPProps>) {
  const numberOfGroups = Math.ceil(maxLength / groupSize);

  const groups = Array.from({ length: numberOfGroups }, (_, groupIndex) => {
    const startIndex = groupIndex * groupSize;
    const groupSlots = Array.from({ length: groupSize }, (_, slotIndex) => {
      const index = startIndex + slotIndex;

      return index < maxLength ? (
        <InputOTPSlot key={index} className={classNames.slot} index={index} />
      ) : null;
    }).filter(Boolean);

    const group = (
      <InputOTPGroup key={`group-${groupIndex}`} className={classNames.group}>
        {groupSlots}
      </InputOTPGroup>
    );

    return (
      <Fragment key={`fragment-${groupIndex}`}>
        {group}
        {groupIndex < numberOfGroups - 1 && separator && (
          <InputOTPSeparator
            key={`sep-${groupIndex}`}
            className={classNames.separator}
          >
            {separator}
          </InputOTPSeparator>
        )}
      </Fragment>
    );
  });

  const handleChange = (value: string) => {
    onChange?.(value);
    if (value.length === maxLength) {
      onComplete?.(value);
    }
  };

  return (
    <div className={classNames.root}>
      {label && (
        <label className={cn("block mb-1", classNames.label)}>{label}</label>
      )}
      <InputOTPRoot
        className={classNames.input}
        defaultValue={defaultValue}
        disabled={disabled}
        maxLength={maxLength}
        onChange={handleChange}
        {...props}
      >
        {groups}
      </InputOTPRoot>
    </div>
  );
}
