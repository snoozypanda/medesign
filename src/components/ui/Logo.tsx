import { cn } from '@/lib/cn'

type LogoProps = {
  /** "light" for dark backgrounds (default), "dark" for light backgrounds. */
  variant?: 'light' | 'dark'
  className?: string
  withDot?: boolean
}

/**
 * SVG-based MEDesign logo. Uses the official brand asset with white text
 * and green accent by default (light variant). Dark variant inverts for
 * light backgrounds.
 */
export function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="MEDesign"
      className={cn(
        'h-7 w-auto',
        variant === 'dark' && 'brightness-0',
        className,
      )}
    />
  )
}
