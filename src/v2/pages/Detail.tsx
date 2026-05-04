import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BadgeCheck,
  Heart,
  MessageSquare,
  Repeat,
  Share2,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Avatar } from '../components/ui/Avatar'
import { Rating } from '../components/ui/Rating'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'
import { ProductCard } from '../components/sections/ProductCard'

const SPECS = [
  { label: 'Marka', value: 'Bburago' },
  { label: 'Model', value: 'McLaren MCL60' },
  { label: 'Ölçek', value: '1:18' },
  { label: 'Yıl', value: '2023' },
  { label: 'Renk', value: 'Papaya Orange / Anthracite' },
  { label: 'Malzeme', value: 'Diecast metal + plastik detay' },
  { label: 'Durum', value: 'Sıfır / kutusunda' },
  { label: 'Seri', value: 'F1 2023 Sezonu' },
]

export function Detail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0]
  const [activeImg, setActiveImg] = useState(0)
  const gallery = [product.image, product.image, product.image, product.image]

  return (
    <div className="v2-container pt-8">
      <Breadcrumbs items={['Anasayfa', 'Arabalar', 'F1', product.title]} />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Galeri */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-v2-card-lg bg-v2-surface">
            <img
              src={gallery[activeImg]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex flex-col gap-1.5">
              {product.badge && (
                <Badge variant="default">{product.badge}</Badge>
              )}
              {product.swap && (
                <Badge variant="success">
                  <Repeat className="h-3 w-3" /> Takas Açık
                </Badge>
              )}
            </div>
            <div className="absolute right-4 top-4 flex gap-2">
              <button
                aria-label="Favori"
                className="grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-colors hover:bg-v2-surface"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                aria-label="Paylaş"
                className="grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-colors hover:bg-v2-surface"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/3] overflow-hidden rounded-v2-sm bg-v2-surface transition-colors ${
                  activeImg === i
                    ? 'ring-2 ring-v2-ink ring-offset-2 ring-offset-v2-bg'
                    : ''
                }`}
              >
                <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Bilgi */}
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            {product.scale} · {product.brand}
          </p>
          <h1 className="font-v2 mt-2 text-[36px] font-medium leading-tight tracking-tight text-v2-ink">
            {product.title}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[13px] text-v2-muted">
            {product.rating && (
              <span className="inline-flex items-center gap-1.5">
                <Rating value={product.rating} size="sm" />
                <span className="text-v2-ink">{product.rating}</span>
                <span>· 124 değerlendirme</span>
              </span>
            )}
            <span>·</span>
            <span>1.842 görüntülenme</span>
          </div>

          <div className="mt-7 rounded-v2-card-lg bg-v2-surface p-7">
            <div className="flex items-baseline gap-3">
              <p className="font-v2 text-[40px] font-semibold tracking-tight text-v2-ink">
                ₺{product.price.toLocaleString('tr-TR')}
              </p>
              {product.oldPrice && (
                <>
                  <p className="text-[16px] text-v2-faint line-through">
                    ₺{product.oldPrice.toLocaleString('tr-TR')}
                  </p>
                  <Badge variant="accentSoft">
                    %
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) * 100,
                    )}{' '}
                    indirim
                  </Badge>
                </>
              )}
            </div>
            <p className="mt-1 text-[13px] text-v2-muted">
              KDV dahil · 3 taksite kadar
            </p>

            <div className="mt-6 grid gap-2">
              <Button size="lg" variant="primary">
                Sepete ekle
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Repeat className="h-4 w-4" />
                Takas teklifi yap
              </Button>
            </div>

            <ul className="mt-6 space-y-2 text-[13px] text-v2-muted">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-v2-ink" />
                Yarın kargoda · 1-3 iş günü teslim
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-v2-ink" />
                Tarodan güvencesiyle korumalı ödeme
              </li>
            </ul>
          </div>

          {/* Satıcı kartı */}
          <div className="mt-4 flex items-center justify-between rounded-v2-card bg-v2-surface p-5">
            <div className="flex items-center gap-3">
              <Avatar size="md" fallback="Diecast Atölyesi" />
              <div>
                <p className="font-v2 inline-flex items-center gap-1 text-[14px] font-medium text-v2-ink">
                  Diecast Atölyesi
                  <BadgeCheck className="h-4 w-4 text-v2-accent" />
                </p>
                <p className="text-[12px] text-v2-muted">
                  4.9 ★ · 1.842 satış · 2 saat önce aktif
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4" /> Mesaj
              </Button>
              <Button variant="primary" size="sm" asChild>
                <Link to="/v2/marka">Mağaza</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="ozellikler" className="mt-16">
        <TabsList>
          <TabsTrigger value="ozellikler">Özellikler</TabsTrigger>
          <TabsTrigger value="aciklama">Açıklama</TabsTrigger>
          <TabsTrigger value="degerlendirmeler">Değerlendirmeler · 124</TabsTrigger>
          <TabsTrigger value="kargo">Kargo & İade</TabsTrigger>
        </TabsList>
        <TabsContent value="ozellikler">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between border-b border-v2 py-3"
              >
                <dt className="text-[13px] text-v2-muted">{s.label}</dt>
                <dd className="font-v2 text-[14px] font-medium text-v2-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </TabsContent>
        <TabsContent value="aciklama">
          <div className="prose max-w-2xl text-[15px] leading-relaxed text-v2-ink-soft">
            <p>
              McLaren MCL60, 2023 Formula 1 sezonunun ikon araçlarından biri.
              Bburago'nun 1:18 ölçek serisinde sunulan bu model, açılır kaput,
              dönen tekerlekler ve detaylı kokpit ile koleksiyonun en görünür
              parçası olmaya aday. Lando Norris'in efsane #4 numarası, papaya
              turuncusu ile birlikte kutusunda korunmuş halde.
            </p>
            <p className="mt-4">
              Üretim hatası kontrol edilmiştir. Ekstra kit veya stand dahil
              değildir. Vitrin için ideal.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="degerlendirmeler">
          <p className="text-[14px] text-v2-muted">Değerlendirmeler yakında.</p>
        </TabsContent>
        <TabsContent value="kargo">
          <p className="text-[14px] text-v2-muted">
            Tüm Türkiye'ye 1-3 iş günü içinde, 14 gün koşulsuz iade hakkıyla.
          </p>
        </TabsContent>
      </Tabs>

      {/* Benzer ürünler */}
      <section className="mt-24">
        <h2 className="font-v2 text-[28px] font-medium leading-tight tracking-tight text-v2-ink">
          Benzer ürünler
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  )
}

function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav className="font-v2 flex flex-wrap items-center gap-1.5 text-[12px] text-v2-muted">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i === items.length - 1 ? (
            <span className="text-v2-ink">{item}</span>
          ) : (
            <>
              <span className="hover:text-v2-ink">{item}</span>
              <span className="text-v2-faint">/</span>
            </>
          )}
        </span>
      ))}
    </nav>
  )
}
