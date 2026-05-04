import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'font-v2 inline-flex items-center gap-1 rounded-v2-pill px-3 py-1 text-[12px] font-medium leading-none',
  {
    variants: {
      variant: {
        default: 'bg-v2-bg text-v2-ink',
        surface: 'bg-v2-surface text-v2-ink',
        ink: 'bg-v2-ink text-v2-on-ink',
        outline: 'border border-v2 text-v2-ink',
        accent: 'bg-v2-accent text-white',
        accentSoft: 'bg-v2-accent-soft text-v2-accent',
        success: 'bg-v2-success-soft text-v2-success',
        danger: 'bg-v2-danger-soft text-v2-danger',
      },
      size: {
        sm: 'px-2 py-0.5 text-[11px]',
        md: 'px-3 py-1 text-[12px]',
        lg: 'px-4 py-1.5 text-[13px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
)

type BadgeProps = React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}
