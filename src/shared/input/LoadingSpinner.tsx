import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => (
  <div className="absolute bottom-0 left-0 top-1 flex size-full items-center justify-center backdrop-blur-[1px]">
    <div className="absolute bottom-2 right-0 z-10 flex w-full justify-center text-center text-primary">
      <Loader2 className="animate-spin font-extrabold" />
    </div>
  </div>
);
