import { cn } from "@/utils";

type Props = {
  strength: number;
  maxStrength?: number;
  className?: string;
};

export const PasswordStrength = ({
  strength,
  maxStrength = 4,
  className,
}: Props) => {
  return (
    <div className={cn("flex space-x-1", className)}>
      {Array.from({ length: maxStrength }).map((_, index) => (
        <div
          key={`strength-indicator-${crypto.randomUUID()}`}
          className={cn("h-2 flex-1 transition-all duration-300 rounded-sm", {
            "bg-error": strength >= 0 && index === 0,
            "bg-orange-500": strength >= 1 && index <= 1,
            "bg-yellow-500": strength >= 2 && index <= 2,
            "bg-green": strength >= 3 && index <= 3,
            "bg-light dark:bg-card": index > strength,
          })}
        />
      ))}
    </div>
  );
};
