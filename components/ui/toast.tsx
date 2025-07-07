// components/ui/toast.tsx

import * as React from "react";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from "@radix-ui/react-toast";

export interface ToastProps {
  title: string;
  description?: string;
}

let toastQueue: ToastProps[] = [];

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  React.useEffect(() => {
    if (toastQueue.length > 0) {
      const next = toastQueue.shift();
      if (next) {
        setToasts((current) => [...current, next]);
      }
    }
  }, [toasts]);

  const toast = (props: ToastProps) => {
    toastQueue.push(props);
    setToasts([...toastQueue]);
  };

  return {
    toast,
  };
}

export function ToastView() {
  const [open, setOpen] = React.useState(true);

  return (
    <ToastProvider>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Sample title</ToastTitle>
        <ToastDescription>Sample description</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
