import { useState, useEffect } from "react";

import { Slider as SliderRoot } from "@/ui/slider";
import { cn } from "@/utils";

export interface SliderValues {
  min: number;
  max: number;
}

export interface SliderProps {
  className?: string;
  values: SliderValues;
  onChange?: (values: SliderValues) => void;
  max?: number;
  step?: number;
  min?: number;
  showTooltips?: boolean;
}

export function Slider({
  className,
  onChange,
  values = {
    min: 0,
    max: 0,
  },
  max = 100,
  min = 0,
  step = 1,
  showTooltips,
  ...props
}: SliderProps) {
  const [selectedValues, setSelectedValues] = useState<SliderValues>(values);

  useEffect(() => {
    setSelectedValues(values);
  }, [values]);

  const handleValueChange = (newValues: number[]) => {
    const updatedValues = {
      min: newValues[0],
      max: newValues[1],
    };

    setSelectedValues(updatedValues);
    onChange?.(updatedValues);
  };

  return (
    <SliderRoot
      className={cn("w-full mt-10 relative", className)}
      max={max}
      min={min}
      step={step}
      value={[selectedValues.min, selectedValues.max]}
      onValueChange={handleValueChange}
      {...props}
    >
      {showTooltips && (
        <>
          <div
            className="absolute -top-9 left-0 -translate-x-1/2"
            style={{
              left: `${((selectedValues.min - min) / (max - min)) * 100}%`,
            }}
          >
            <div className="rounded-sm bg-black/80 px-2 py-1 text-xs text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-x-transparent after:border-b-transparent after:border-t-black/80 after:content-['']">
              {selectedValues.min}
            </div>
          </div>
          <div
            className="absolute -top-9 right-0 translate-x-1/2"
            style={{
              right: `${100 - ((selectedValues.max - min) / (max - min)) * 100}%`,
            }}
          >
            <div className="rounded-sm bg-black/80 px-2 py-1 text-xs text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-x-transparent after:border-b-transparent after:border-t-black/80 after:content-['']">
              {selectedValues.max}
            </div>
          </div>
        </>
      )}
    </SliderRoot>
  );
}
