import * as React from 'react'
import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'div'> & {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const SIZE = {
  xs: 'h-7 w-7 text-[11px]',
  sm: 'h-9 w-9 text-[13px]',
  md: 'h-12 w-12 text-[14px]',
  lg: 'h-16 w-16 text-[16px]',
  xl: 'h-24 w-24 text-[20px]',
}

export function Avatar({
  src,
  alt,
  fallback,
  size = 'md',
  className,
  ...props
}: Props) {
  const initials = (fallback ?? alt ?? '?')
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div
      className={cn(
        'font-v2 relative inline-grid shrink-0 place-items-center overflow-hidden rounded-v2-pill bg-v2-surface text-v2-ink',
        SIZE[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt ?? ''} className="h-full w-full object-cover" />
      ) : (
        <span className="font-medium">{initials}</span>
      )}
    </div>
  )
}
