import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge multiple class names into one.
 *
 * @param classNames - The class names to merge.
 * @returns string
 */
export default function mergeClass(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
