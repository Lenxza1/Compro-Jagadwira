import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Normalize /public asset paths so they resolve from site root on any route. */
export function resolvePublicPath(path: string): string {
  if (/^https?:\/\//i.test(path)) return path

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`

  return withLeadingSlash
    .split('/')
    .map((segment, index) =>
      index === 0 || !segment ? segment : encodeURIComponent(decodeURIComponent(segment)),
    )
    .join('/')
}
