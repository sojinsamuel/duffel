import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString?: string, includeTime = true) {
  if (!dateString) return "";

  return dayjs(dateString).format(
    includeTime ? "DD/MM/YYYY hh:mm A" : "DD/MM/YYYY"
  );
}
