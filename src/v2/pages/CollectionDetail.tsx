import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Share2 } from 'lucide-react'
import { COLLECTIONS, PRODUCTS } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProductCard } from '../components/sections/ProductCard'

export function CollectionDetail() {
  const { id } = useParams()
  const collection = COLLECTIONS.find((c) => c.slug === id) ?? COLLECTIONS[0]
  const products = [...PRODUCTS, ...PRODUCTS.slice(0, 2)]

  return (
    <div className="v2-container pt-10">
      <Link
        to="/v2/koleksiyonlar"
        className="font-v2 inline-flex items-center gap-1.5 text-[13px] text-v2-muted hover:text-v2-ink"
      >
        ← Tüm koleksiyonlar
      </Link>

      {/* Header */}
      <header className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <Badge variant="ink">Editör Seçimi</Badge>
          <h1 className="font-v2 mt-5 text-[48px] font-medium leading-[1.05] tracking-tight text-v2-ink sm:text-[60px]">
            {collection.title}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-v2-muted">
            {collection.description}. Bu koleksiyonda {collection.itemCount}{' '}
            özenle seçilmiş model bulunuyor — vitrin için hazır.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Avatar size="md" fallback={collection.curator} />
            <div>
              <p className="font-v2 text-[14px] font-medium text-v2-ink">
                {collection.curator}
              </p>
              <p className="text-[12px] text-v2-muted">Küratör</p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            <Button variant="primary" size="md">
              <Heart className="h-4 w-4" /> Koleksiyonu kaydet
            </Button>
            <Button variant="outline" size="md">
              <Share2 className="h-4 w-4" /> Paylaş
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-v2-card-lg bg-v2-surface">
          <img
            src={collection.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </header>

      {/* Stats */}
      <ul className="mt-12 grid grid-cols-3 gap-3 rounded-v2-card-lg bg-v2-surface p-6 sm:grid-cols-5">
        {[
          { label: 'Ürün', value: collection.itemCount },
          { label: 'Kaydedildi', value: '1.4K' },
          { label: 'Görüntülendi', value: '8.6K' },
          { label: 'Toplam değer', value: '₺142K' },
          { label: 'Ortalama', value: '₺4.4K' },
        ].map((s) => (
          <li key={s.label} className="text-center">
            <p className="font-v2 text-[24px] font-semibold tracking-tight text-v2-ink">
              {s.value}
            </p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-v2-muted">
              {s.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Products */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="font-v2 text-[28px] font-medium tracking-tight text-v2-ink">
            Koleksiyon parçaları
          </h2>
          <p className="text-[13px] text-v2-muted">
            {products.length} ürün
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard
              key={`${p.id}-${i}`}
              product={{ ...p, id: `${p.id}-${i}` }}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="rounded-v2-card-lg bg-v2-ink p-12 text-center text-v2-on-ink">
          <h3 className="font-v2 text-[32px] font-medium leading-tight tracking-tight">
            Senin koleksiyonun nasıl?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[14px] opacity-85">
            Dijital garajını oluştur, koleksiyonunu temaya göre düzenle ve
            küratör başvurusunda bulun.
          </p>
          <div className="mt-7 flex justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/v2/profil">
                Garajını oluştur
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
