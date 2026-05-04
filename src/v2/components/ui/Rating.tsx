import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZE = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4', lg: 'h-5 w-5' }

export function Rating({ value, max = 5, size = 'md', className }: Props) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(value)
        const half = !filled && i < value
        return (
          <Star
            key={i}
            className={cn(
              SIZE[size],
              filled || half
                ? 'fill-v2-accent text-v2-accent'
                : 'fill-transparent text-v2-faint',
            )}
            style={filled || half ? { fill: 'var(--v2-accent)', color: 'var(--v2-accent)' } : undefined}
          />
        )
      })}
    </div>
  )
}
