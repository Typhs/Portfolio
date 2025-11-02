import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// from -> https://inspira-ui.com/docs/getting-started/installation
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ObjectValues<T> = T[keyof T];
