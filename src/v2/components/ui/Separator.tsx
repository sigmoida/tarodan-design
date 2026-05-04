import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
}

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: Props) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-v2-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
}
