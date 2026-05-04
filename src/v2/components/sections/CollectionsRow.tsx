import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { COLLECTIONS } from '@/v2/data/mock'
import { SectionHeader } from '../ui/SectionHeader'

export function CollectionsRow() {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow="En İyi Koleksiyonlar"
        title="Editörümüzün seçtiği"
        subtitle="Editörümüzün haftanın en iyi koleksiyonları arasından seçtikleri."
        align="left"
        action={
          <Link
            to="/v2/koleksiyonlar"
            className="font-v2 inline-flex items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 py-3 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft"
          >
            Tüm koleksiyonlar
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        }
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.slug}
            to={`/v2/koleksiyon/${c.slug}`}
            className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-v2-card-lg bg-v2-surface"
          >
            <img
              src={c.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 mt-auto bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
              <div className="text-white">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-80">
                  {c.itemCount} ürün · {c.curator}
                </p>
                <h3 className="font-v2 mt-1.5 text-[24px] font-medium leading-tight tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-1 text-[13px] opacity-85">{c.description}</p>
              </div>
            </div>
            <span className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-v2-pill bg-white text-v2-ink transition-transform group-hover:rotate-12">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
