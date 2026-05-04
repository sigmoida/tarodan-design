import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "font-v2 inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition-all outline-none focus-visible:ring-v2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          'bg-v2-ink text-v2-on-ink hover:bg-v2-ink-soft active:scale-[0.98]',
        secondary:
          'bg-v2-surface text-v2-ink hover:bg-v2-surface-2 active:scale-[0.98]',
        outline:
          'bg-transparent text-v2-ink border border-v2 hover:bg-v2-surface active:scale-[0.98]',
        ghost: 'bg-transparent text-v2-ink hover:bg-v2-surface',
        accent:
          'bg-v2-accent text-white hover:brightness-95 active:scale-[0.98]',
        link: 'text-v2-ink underline underline-offset-4 hover:text-v2-muted',
      },
      size: {
        sm: 'h-9 rounded-v2-pill px-4 text-[13px]',
        md: 'h-11 rounded-v2-pill px-5 text-[14px]',
        lg: 'h-14 rounded-v2-pill px-7 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

/**
 * Etec dilinin imzası: solda pill etiket + sağda dairesel arrow.
 *   <ButtonWithArrow>Browse All Products</ButtonWithArrow>
 */
type ButtonWithArrowProps = Omit<ButtonProps, 'asChild'> & {
  arrowVariant?: 'inverse' | 'match'
}

export function ButtonWithArrow({
  children,
  className,
  variant = 'primary',
  size = 'lg',
  arrowVariant = 'inverse',
  ...props
}: ButtonWithArrowProps) {
  const arrowSize = size === 'sm' ? 'h-9 w-9' : size === 'md' ? 'h-11 w-11' : 'h-14 w-14'
  const arrowBg =
    arrowVariant === 'match'
      ? variant === 'primary'
        ? 'bg-v2-ink text-v2-on-ink'
        : 'bg-v2-surface text-v2-ink'
      : variant === 'primary'
        ? 'bg-v2-bg text-v2-ink'
        : 'bg-v2-ink text-v2-on-ink'

  return (
    <span className="inline-flex items-center gap-1.5">
      <Button variant={variant} size={size} className={className} {...props}>
        {children}
      </Button>
      <span
        aria-hidden
        className={cn(
          'grid place-items-center rounded-v2-pill border border-v2 transition-transform group-hover:rotate-12',
          arrowSize,
          arrowVariant === 'inverse' && 'border-transparent',
          arrowBg,
        )}
      >
        <ArrowUpRight className="h-[18px] w-[18px]" />
      </span>
    </span>
  )
}
