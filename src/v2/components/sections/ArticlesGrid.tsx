import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ARTICLES } from '@/v2/data/mock'
import { SectionHeader } from '../ui/SectionHeader'

export function ArticlesGrid() {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow="Tarodan Magazin"
        title="Haberler ve içerikler"
        subtitle="Diecast dünyasından en güncel rehberler, koleksiyon ipuçları ve sektör analizleri."
        align="left"
        action={
          <Link
            to="/v2"
            className="font-v2 inline-flex items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 py-3 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft"
          >
            Tümünü gör
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        }
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            to="/v2"
            className="group flex flex-col rounded-v2-card bg-v2-surface p-4 transition-colors hover:bg-v2-surface-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-v2-sm bg-v2-bg">
              <img
                src={a.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col px-2 pt-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
                {a.date}
              </p>
              <h3 className="font-v2 mt-2 text-[18px] font-medium leading-tight tracking-tight text-v2-ink">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-v2-muted">
                {a.excerpt}
              </p>
              <span className="font-v2 mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-medium text-v2-ink">
                Devamını oku
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
