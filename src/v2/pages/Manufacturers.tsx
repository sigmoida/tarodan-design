import { Link } from 'react-router-dom'
import { ArrowUpRight, Search } from 'lucide-react'
import { BRANDS, IMG } from '@/v2/data/mock'
import { Badge } from '../components/ui/Badge'

const FEATURED = [
  {
    name: 'Bburago',
    description: '1974 İtalya. Klasik İtalyan otomobillerinin en geniş kataloğu.',
    products: 482,
    cover: IMG.featuredMclaren,
  },
  {
    name: 'AutoArt',
    description: 'Premium 1:18 ölçek dünya kupası. Kapı, motor, kaput açılır.',
    products: 312,
    cover: IMG.carSilver,
  },
  {
    name: 'Hot Wheels',
    description: '1968 ABD. 1:64 ölçeğin en ünlü ismi, kült modeller.',
    products: 1840,
    cover: IMG.motorcycles,
  },
]

export function Manufacturers() {
  return (
    <div className="v2-container pt-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Markalar
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            Diecast üreticileri
          </h1>
          <p className="mt-2 max-w-lg text-[14px] text-v2-muted">
            Elliden fazla küresel diecast markasının tüm modelleri, koleksiyona
            uygun şekilde kategorize edilmiş.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-v2-pill bg-v2-surface p-1.5 pl-4">
          <Search className="h-4 w-4 text-v2-faint" />
          <input
            placeholder="Marka ara..."
            className="font-v2 h-10 w-72 bg-transparent text-[14px] outline-none placeholder:text-v2-faint"
          />
        </div>
      </header>

      {/* Featured */}
      <section className="mt-12 grid gap-4 lg:grid-cols-3">
        {FEATURED.map((b) => (
          <Link
            key={b.name}
            to={`/v2/marka/${b.name.toLowerCase()}`}
            className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-v2-card-lg bg-v2-surface"
          >
            <img
              src={b.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 mt-auto bg-gradient-to-t from-black/75 via-black/20 to-transparent p-7">
              <Badge variant="default" className="self-start">
                Öne çıkan
              </Badge>
              <h3 className="font-v2 mt-3 text-[28px] font-medium leading-tight tracking-tight text-white">
                {b.name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                {b.description}
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-white/70">
                {b.products.toLocaleString('tr-TR')} ürün
              </p>
            </div>
            <span className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-v2-pill bg-white text-v2-ink transition-transform group-hover:rotate-12">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </section>

      {/* All brands grid */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="font-v2 text-[28px] font-medium tracking-tight text-v2-ink">
            Tüm markalar
          </h2>
          <p className="text-[13px] text-v2-muted">
            54 marka · alfabetik sıralı
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((brand) => {
            const count = Math.floor(Math.random() * 800 + 50)
            return (
              <li key={brand}>
                <Link
                  to={`/v2/marka/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex h-32 flex-col justify-between rounded-v2-card bg-v2-surface p-5 transition-colors hover:bg-v2-surface-2"
                >
                  <span className="font-v2 text-[14px] font-medium text-v2-ink">
                    {brand}
                  </span>
                  <div className="flex items-end justify-between">
                    <span className="text-[11px] text-v2-muted">
                      {count} ürün
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
