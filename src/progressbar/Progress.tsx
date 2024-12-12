import { useEffect, useState, useMemo } from "react";

import { Progress as ProgressBar } from "@/ui/progress";
import { cn } from "@/utils";

export type Segment = {
  value: number;
  color: string;
};

type ProgressProps = {
  segments: Segment[];
  animate?: boolean;
  animationDuration?: number;
  maxValue?: number; // New prop for maximum value
};

export function Progress({
  segments,
  animate = false,
  animationDuration = 500,
  maxValue, // Add maxValue to destructured props
}: Readonly<ProgressProps>) {
  const [progress, setProgress] = useState<number[]>([]);

  const totalValue = segments.reduce((acc, segment) => acc + segment.value, 0);
  const effectiveMaxValue = maxValue !== undefined ? maxValue : totalValue;

  const percentageSegments = useMemo(() => {
    return segments.map((segment) => ({
      ...segment,
      percentage: (segment.value / effectiveMaxValue) * 100,
    }));
  }, [segments, effectiveMaxValue]);

  useEffect(() => {
    if (animate) {
      setProgress(new Array(percentageSegments.length).fill(0));
      const timers = percentageSegments.map((segment, index) => {
        return setTimeout(() => {
          setProgress((prev) => {
            const newProgress = [...prev];

            newProgress[index] = segment.percentage;

            return newProgress;
          });
        });
      });

      return () => timers.forEach((timer) => clearTimeout(timer));
    } else {
      setProgress(percentageSegments.map((segment) => segment.percentage));
    }
  }, [effectiveMaxValue, segments, animate, percentageSegments]);

  return (
    <div className="w-full">
      <div className="relative h-4 w-full overflow-hidden rounded-full border border-border bg-gray-200">
        {percentageSegments.map((segment, index) => {
          const leftPosition = percentageSegments
            .slice(0, index)
            .reduce((sum, seg) => sum + seg.percentage, 0);

          return (
            <ProgressBar
              key={`progress-bar-${segment.color}-${index}`}
              className={cn("absolute h-full rounded-none ")}
              style={{
                left: `${leftPosition}%`,
                width: animate
                  ? `${progress[index]}%`
                  : `${segment.percentage}%`,
                backgroundColor: segment.color,
                transition: animate
                  ? `width ${animationDuration}ms ease-in`
                  : "none",
              }}
              value={progress[index]}
            />
          );
        })}
      </div>
    </div>
  );
}
