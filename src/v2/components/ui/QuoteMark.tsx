import { cn } from '@/lib/utils'

export function QuoteMark({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 32 24"
      aria-hidden
      className={cn('h-6 w-8 text-v2-faint', className)}
      fill="currentColor"
      {...props}
    >
      <path d="M0 24V13.6C0 9.7 0.9 6.4 2.7 3.7 4.5 1.2 7.1 0 10.5 0v6.5c-2.7 0-4 2.4-4 7.1H10.5V24H0zm17.5 0V13.6c0-3.9 0.9-7.2 2.7-9.9C22 1.2 24.6 0 28 0v6.5c-2.7 0-4 2.4-4 7.1H28V24h-10.5z" />
    </svg>
  )
}
