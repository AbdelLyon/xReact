import { cn } from "@/utils";

export const ErrorMessage = ({
  error,
  classNameError,
}: {
  error: string;
  classNameError?: string;
}) => (
  <p className={cn("text-error mt-1 text-start", classNameError)}>{error}</p>
);
