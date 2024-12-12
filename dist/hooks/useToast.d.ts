import { ToastActionElement, ToastProps } from '../ui/toast';
import * as React from "react";
type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
type Action = {
    type: "ADD_TOAST";
    toast: ToasterToast;
} | {
    type: "UPDATE_TOAST";
    toast: Partial<ToasterToast>;
} | {
    type: "DISMISS_TOAST";
    toastId?: ToasterToast["id"];
} | {
    type: "REMOVE_TOAST";
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
export declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToastRoot(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};
type ShowToast = {
    title: string;
    description?: string;
    duration?: number;
    variant?: "default" | "error" | "success";
    action?: ToastActionElement;
};
declare const useToast: () => {
    showToast: ({ title, description, duration, variant, action, }: ShowToast) => void;
};
export { toast, useToastRoot, useToast };
