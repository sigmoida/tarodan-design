import { Link } from 'react-router-dom'
import { ArrowUpRight, Repeat, Store } from 'lucide-react'

export function CTABlocks() {
  return (
    <section className="v2-container mt-24">
      <div className="grid gap-4 md:grid-cols-2">
        <CTACard
          icon={<Store className="h-6 w-6" />}
          eyebrow="Mağaza aç"
          title="Koleksiyoner mi olmak istiyorsun?"
          description="Profilini öne çıkar, ücretsiz başla. Diecast satışlarına bugün başla."
          ctaLabel="Mağazanı aç"
          to="/v2/ilan-olustur"
          tone="ink"
        />
        <CTACard
          icon={<Repeat className="h-6 w-6" />}
          eyebrow="Takas yap"
          title="Aradığın model başkasının vitrininde mi?"
          description="Hemen üye ol, aracını takasla. Üç aşamalı kontrol süreciyle güvenle değiştir."
          ctaLabel="Takasları gör"
          to="/v2/takaslar"
          tone="surface"
        />
      </div>
    </section>
  )
}

function CTACard({
  icon,
  eyebrow,
  title,
  description,
  ctaLabel,
  to,
  tone,
}: {
  icon: React.ReactNode
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  to: string
  tone: 'ink' | 'surface'
}) {
  const isInk = tone === 'ink'
  return (
    <article
      className={`relative flex min-h-[260px] flex-col rounded-v2-card-lg p-10 ${
        isInk ? 'bg-v2-ink text-v2-on-ink' : 'bg-v2-surface text-v2-ink'
      }`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-v2-pill ${
          isInk ? 'bg-v2-bg text-v2-ink' : 'bg-v2-ink text-v2-on-ink'
        }`}
      >
        {icon}
      </span>
      <p
        className={`mt-6 text-[12px] font-medium uppercase tracking-[0.16em] ${
          isInk ? 'opacity-80' : 'text-v2-muted'
        }`}
      >
        {eyebrow}
      </p>
      <h3
        className={`font-v2 mt-2 max-w-md text-[28px] font-medium leading-tight tracking-tight ${
          isInk ? 'text-v2-on-ink' : 'text-v2-ink'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 max-w-md text-[14px] leading-relaxed ${
          isInk ? 'opacity-85' : 'text-v2-muted'
        }`}
      >
        {description}
      </p>
      <Link
        to={to}
        className={`font-v2 mt-auto inline-flex w-fit items-center gap-1.5 rounded-v2-pill px-5 py-3 text-[14px] font-medium transition-colors ${
          isInk
            ? 'bg-v2-bg text-v2-ink hover:bg-v2-surface'
            : 'bg-v2-ink text-v2-on-ink hover:bg-v2-ink-soft'
        }`}
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
