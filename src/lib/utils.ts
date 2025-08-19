import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function showMessage(message: string, isSuccess: boolean = true) {
  if (isSuccess) {
    toast.success(message);
    return;
  }
  toast.error(message);
}
