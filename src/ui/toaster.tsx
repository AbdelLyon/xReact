import { useToastRoot } from "@/hooks/useToast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/ui/toast";

interface ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  [key: string]: any;
}

export function Toaster() {
  const { toasts } = useToastRoot();

  return (
    <ToastProvider>
      {toasts.map(
        ({ id, title, description, action, ...props }: ToastProps) => {
          return (
            <Toast key={id} {...props} className="relative">
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              <div className="absolute bottom-1 right-1">{action}</div>
              <ToastClose />
            </Toast>
          );
        },
      )}
      <ToastViewport />
    </ToastProvider>
  );
}
