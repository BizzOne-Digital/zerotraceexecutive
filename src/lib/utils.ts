import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneLink(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function getPhoneTelHref(phone: string) {
  return `tel:${formatPhoneLink(phone)}`;
}
