import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  Heart,
  MapPin,
  Pencil,
  Settings,
  Share2,
} from 'lucide-react'
import { PRODUCTS, COLLECTIONS, IMG } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'
import { ProductCard } from '../components/sections/ProductCard'

const STATS = [
  { label: 'İlan', value: '84' },
  { label: 'Satış', value: '142' },
  { label: 'Görüntü', value: '12.4K' },
  { label: 'Beğeni', value: '1.2K' },
  { label: 'Takipçi', value: '432' },
  { label: 'Takip', value: '128' },
]

export function Profile() {
  return (
    <div>
      {/* Cover */}
      <div className="v2-container pt-6">
        <div className="relative h-56 overflow-hidden rounded-v2-card-lg bg-v2-surface sm:h-72">
          <img
            src={IMG.featuredMclaren}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/85" />
        </div>
      </div>

      <div className="v2-container">
        {/* Identity */}
        <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-5">
            <Avatar
              size="xl"
              fallback="Mustafa Yılmaz"
              className="border-4 border-white shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            />
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <h1 className="font-v2 text-[28px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[36px]">
                  Mustafa Yılmaz
                </h1>
                <BadgeCheck className="h-6 w-6 text-v2-accent" />
              </div>
              <p className="mt-1 text-[14px] text-v2-muted">
                Klasik İtalyan & JDM koleksiyoneri · @mustafa
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-v2-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> İstanbul
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> Mart 2022'den beri
                </span>
                <Badge variant="success" size="sm">
                  Doğrulanmış satıcı
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pb-1">
            <Button variant="outline" size="md">
              <Share2 className="h-4 w-4" /> Paylaş
            </Button>
            <Button variant="primary" size="md" asChild>
              <Link to="/v2/profil/duzenle">
                <Pencil className="h-4 w-4" /> Profili düzenle
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <ul className="mt-10 grid grid-cols-3 gap-3 rounded-v2-card-lg bg-v2-surface p-5 sm:grid-cols-6">
          {STATS.map((s) => (
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

        {/* Bio */}
        <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_320px]">
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h2 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              Hakkında
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-v2-muted">
              15 yıldır diecast topluyorum. Özellikle 70-90 dönemi İtalyan ve
              Japon klasiklerine ilgim var. Vitrin için 1:18, raf için 1:43.
              Takasa açığım — koleksiyonumda eksik kalanları arıyorum.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {['JDM', 'Italian Classics', 'Le Mans', 'Group B Rally', '1:18', '1:43'].map(
                (tag) => (
                  <Badge key={tag} variant="default" size="sm">
                    {tag}
                  </Badge>
                ),
              )}
            </div>
          </div>
          <div className="rounded-v2-card-lg bg-v2-ink p-7 text-v2-on-ink">
            <h2 className="font-v2 text-[18px] font-medium tracking-tight">
              Üyelik
            </h2>
            <p className="mt-1 text-[13px] opacity-80">Tarodan Premium üyesi</p>
            <p className="font-v2 mt-5 text-[36px] font-semibold tracking-tight">
              Premium
            </p>
            <p className="mt-3 text-[13px] opacity-80">
              4 Ekim 2026'ya kadar geçerli · 8 ay sonra
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-5"
              asChild
            >
              <Link to="/v2/uyelik">
                Yönet <Settings className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ilanlar" className="mt-12">
          <TabsList>
            <TabsTrigger value="ilanlar">Aktif İlanlar · 84</TabsTrigger>
            <TabsTrigger value="koleksiyonlar">Koleksiyonlar · 6</TabsTrigger>
            <TabsTrigger value="favoriler">Favoriler · 142</TabsTrigger>
            <TabsTrigger value="degerlendirmeler">Değerlendirmeler · 4.9 ★</TabsTrigger>
          </TabsList>
          <TabsContent value="ilanlar">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} variant="compact" />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Daha fazla
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="koleksiyonlar">
            <div className="grid gap-4 md:grid-cols-3">
              {COLLECTIONS.map((c) => (
                <Link
                  key={c.slug}
                  to={`/v2/koleksiyon/${c.slug}`}
                  className="group flex flex-col rounded-v2-card bg-v2-surface p-4 transition-colors hover:bg-v2-surface-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-v2-sm bg-v2-bg">
                    <img
                      src={c.cover}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-v2 mt-4 px-1 text-[16px] font-medium tracking-tight text-v2-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1 px-1 text-[13px] text-v2-muted">
                    {c.itemCount} ürün
                  </p>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="favoriler">
            <div className="rounded-v2-card-lg bg-v2-surface p-12 text-center">
              <Heart className="mx-auto h-8 w-8 text-v2-muted" />
              <p className="font-v2 mt-3 text-[16px] font-medium text-v2-ink">
                142 favori ürün
              </p>
              <p className="mt-1 text-[13px] text-v2-muted">
                Yalnızca sen görebilirsin.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="degerlendirmeler">
            <p className="text-[14px] text-v2-muted">Değerlendirmeler yakında.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
