import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const iconButtonVariants = cva(
  'font-v2 inline-grid place-items-center rounded-v2-pill transition-all outline-none focus-visible:ring-v2 disabled:opacity-40 active:scale-[0.96]',
  {
    variants: {
      variant: {
        primary: 'bg-v2-ink text-v2-on-ink hover:bg-v2-ink-soft',
        surface: 'bg-v2-surface text-v2-ink hover:bg-v2-surface-2',
        outline: 'border border-v2 text-v2-ink bg-v2-bg hover:bg-v2-surface',
        ghost: 'text-v2-ink hover:bg-v2-surface',
      },
      size: {
        sm: 'h-9 w-9 [&_svg]:h-4 [&_svg]:w-4',
        md: 'h-11 w-11 [&_svg]:h-[18px] [&_svg]:w-[18px]',
        lg: 'h-14 w-14 [&_svg]:h-5 [&_svg]:w-5',
      },
    },
    defaultVariants: { variant: 'surface', size: 'md' },
  },
)

type IconButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof iconButtonVariants>

export function IconButton({
  className,
  variant,
  size,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
