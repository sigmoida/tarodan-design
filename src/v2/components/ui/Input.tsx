import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  size?: 'sm' | 'md' | 'lg'
  invalid?: boolean
}

export function Input({
  className,
  type = 'text',
  size = 'md',
  invalid,
  ...props
}: InputProps) {
  const sizeClass = {
    sm: 'h-9 px-3.5 text-[13px]',
    md: 'h-11 px-4 text-[14px]',
    lg: 'h-14 px-5 text-[15px]',
  }[size]

  return (
    <input
      type={type}
      className={cn(
        'font-v2 w-full rounded-v2-input border bg-v2-bg text-v2-ink placeholder:text-v2-faint outline-none transition-colors',
        'focus:border-v2-strong focus:ring-v2',
        invalid ? 'border-v2-danger' : 'border-v2',
        sizeClass,
        className,
      )}
      {...props}
    />
  )
}

export function Textarea({
  className,
  rows = 4,
  invalid,
  ...props
}: React.ComponentProps<'textarea'> & { invalid?: boolean }) {
  return (
    <textarea
      rows={rows}
      className={cn(
        'font-v2 w-full rounded-v2-input border bg-v2-bg px-4 py-3 text-[14px] text-v2-ink placeholder:text-v2-faint outline-none transition-colors',
        'focus:border-v2-strong focus:ring-v2 resize-y',
        invalid ? 'border-v2-danger' : 'border-v2',
        className,
      )}
      {...props}
    />
  )
}
