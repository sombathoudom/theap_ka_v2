import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const toKhmerNumeral = (num: string | number) => {
  const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return num.toString().replace(/[0-9]/g, (w) => khmerNumbers[+w]);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
