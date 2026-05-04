import { Link } from 'react-router-dom'
import { ArrowUpRight, Search, Sparkles } from 'lucide-react'
import { COLLECTIONS, IMG } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'

const EXTRA_COLLECTIONS = [
  ...COLLECTIONS,
  {
    slug: 'group-b-rallye',
    title: 'Group B Rallye Klasikleri',
    description: '80\'lerin canavar ralli arabaları',
    itemCount: 18,
    cover: IMG.train,
    curator: 'Eylül Aksoy',
  },
  {
    slug: 'modern-supercars',
    title: 'Modern Süper Otomobiller',
    description: 'Hipercar ve Apex çağı',
    itemCount: 36,
    cover: IMG.featuredMclaren,
    curator: 'Tolga Kaya',
  },
  {
    slug: 'turkce-plakalar',
    title: 'Türkçe Plakalı Modeller',
    description: 'Anadol, Şahin, Murat - yerli özelleştirmeler',
    itemCount: 14,
    cover: IMG.truck,
    curator: 'İlker Ünal',
  },
]

export function Collections() {
  return (
    <div className="v2-container pt-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Koleksiyonlar
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            Editör seçkileri
          </h1>
          <p className="mt-2 max-w-lg text-[14px] text-v2-muted">
            Topluluk koleksiyonerlerinin ve editörlerin küratörlüğünde, temaya
            göre düzenlenmiş özel seçkiler.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-v2-pill bg-v2-surface p-1.5 pl-4">
          <Search className="h-4 w-4 text-v2-faint" />
          <input
            placeholder="Koleksiyon ara..."
            className="font-v2 h-10 w-72 bg-transparent text-[14px] outline-none placeholder:text-v2-faint"
          />
        </div>
      </header>

      {/* Spotlight large */}
      <Link
        to={`/v2/koleksiyon/${COLLECTIONS[0].slug}`}
        className="group mt-12 grid overflow-hidden rounded-v2-card-lg bg-v2-surface lg:grid-cols-[1fr_1.1fr]"
      >
        <div className="flex flex-col p-10 sm:p-14">
          <Badge variant="ink" className="self-start">
            <Sparkles className="h-3 w-3" /> Bu hafta öne çıkan
          </Badge>
          <h2 className="font-v2 mt-6 text-[40px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[48px]">
            {COLLECTIONS[0].title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-v2-muted">
            {COLLECTIONS[0].description}. Ülkemizin en iyi koleksiyonerlerinden
            biri tarafından küratörlüğü yapılmış 32 model.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Avatar size="md" fallback={COLLECTIONS[0].curator} />
            <div>
              <p className="font-v2 text-[14px] font-medium text-v2-ink">
                {COLLECTIONS[0].curator}
              </p>
              <p className="text-[12px] text-v2-muted">Küratör</p>
            </div>
          </div>
          <div className="mt-auto pt-10">
            <span className="font-v2 group/cta inline-flex items-center gap-2 rounded-v2-pill bg-v2-ink px-5 py-3 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft">
              Koleksiyonu gör
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:rotate-12" />
            </span>
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img
            src={COLLECTIONS[0].cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* All collections */}
      <section className="mt-16">
        <h2 className="font-v2 text-[28px] font-medium tracking-tight text-v2-ink">
          Tüm koleksiyonlar
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRA_COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              to={`/v2/koleksiyon/${c.slug}`}
              className="group flex flex-col rounded-v2-card-lg bg-v2-surface p-5 transition-colors hover:bg-v2-surface-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-v2-card bg-v2-bg">
                <img
                  src={c.cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-v2-pill bg-white text-v2-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="px-1 pt-5">
                <h3 className="font-v2 text-[20px] font-medium leading-tight tracking-tight text-v2-ink">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-v2-muted">
                  {c.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar size="xs" fallback={c.curator} />
                    <span className="text-[12px] text-v2-muted">{c.curator}</span>
                  </div>
                  <span className="text-[12px] text-v2-faint">
                    {c.itemCount} ürün
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
