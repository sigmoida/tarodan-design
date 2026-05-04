import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'button'> & {
  direction: 'left' | 'right'
  variant?: 'surface' | 'ink'
}

export function ScrollArrowButton({
  direction,
  variant = 'surface',
  className,
  ...props
}: Props) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      aria-label={direction === 'left' ? 'Önceki' : 'Sonraki'}
      className={cn(
        'grid h-12 w-12 place-items-center rounded-v2-pill transition-all active:scale-95',
        variant === 'surface'
          ? 'bg-v2-surface text-v2-ink hover:bg-v2-surface-2'
          : 'bg-v2-ink text-v2-on-ink hover:bg-v2-ink-soft',
        className,
      )}
      {...props}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}
