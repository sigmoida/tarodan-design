import { PRODUCTS } from '@/v2/data/mock'
import { ProductCard } from './ProductCard'
import { SectionHeader } from '../ui/SectionHeader'

export function NewArrivals() {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow="Yeni Gelenler"
        title="Bu hafta stoklara giren modeller"
        align="left"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {PRODUCTS.slice(0, 2).map((p) => (
          <ProductCard key={p.id} product={p} variant="wide" />
        ))}
      </div>
    </section>
  )
}
