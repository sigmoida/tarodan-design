import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  action?: React.ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  action,
  className,
}: Props) {
  if (action) {
    return (
      <div
        className={cn(
          'flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end',
          className,
        )}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="mb-3 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
              {eyebrow}
            </span>
          )}
          <h2 className="font-v2 text-[36px] font-medium leading-[1.1] tracking-tight text-v2-ink sm:text-[44px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-v2-muted">
              {subtitle}
            </p>
          )}
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    )
  }
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <span className="mb-3 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-v2 max-w-3xl text-[36px] font-medium leading-[1.1] tracking-tight text-v2-ink sm:text-[48px]',
          align === 'center' && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-xl text-[15px] leading-relaxed text-v2-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
