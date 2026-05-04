type Props = {
  title: string
  subtitle?: string
}

export function PlaceholderPage({ title, subtitle }: Props) {
  return (
    <section className="v2-container pt-12">
      <div className="rounded-v2-card-lg bg-v2-surface px-10 py-32 text-center">
        <span className="inline-block rounded-v2-pill bg-v2-bg px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
          Yakında
        </span>
        <h1 className="mt-6 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-v2-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
