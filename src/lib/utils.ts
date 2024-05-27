import { POSSIBLE_ANIMATION_DELAYS } from "@/utils/constants/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animationDelay =
  POSSIBLE_ANIMATION_DELAYS[
    Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
  ];
