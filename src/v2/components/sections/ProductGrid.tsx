import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { ProductCard } from './ProductCard'
import { SectionHeader } from '../ui/SectionHeader'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  href?: string
  hrefLabel?: string
}

export function ProductGrid({
  eyebrow = 'Çok Satanlar',
  title,
  subtitle,
  href = '/v2/ilanlar',
  hrefLabel = 'Tümünü gör',
}: Props) {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="left"
        action={
          <Link
            to={href}
            className="font-v2 group inline-flex items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 py-3 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft"
          >
            {hrefLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </Link>
        }
      />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {PRODUCTS.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} variant="compact" />
        ))}
      </div>
    </section>
  )
}
