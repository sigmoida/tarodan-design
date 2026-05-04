import { Link } from 'react-router-dom'
import { ArrowUpRight, Repeat, Search, ShieldCheck } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

const SWAPS = PRODUCTS.slice(0, 4).map((p, i) => ({
  id: `s${i}`,
  title: p.title,
  scale: p.scale,
  brand: p.brand,
  image: p.image,
  user: ['Ali Demir', 'Selin Ay', 'Cem Aslan', 'Burak Mert'][i % 4],
  status: ['active', 'pending', 'active', 'pending'][i] as 'active' | 'pending',
  wantsList: 3,
  offers: 7,
}))

export function Swaps() {
  return (
    <div className="v2-container pt-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Takas pazarı
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            Takasla, koleksiyonu büyüt
          </h1>
          <p className="mt-2 max-w-xl text-[14px] text-v2-muted">
            Üç aşamalı kontrol süreciyle güvenli takas. Aradığını listele, başkalarının
            isteğine göz at, eşleşmeyi bul.
          </p>
        </div>
        <Button size="lg">
          Takas listele
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </header>

      {/* How it works */}
      <ul className="mt-12 grid gap-3 sm:grid-cols-3">
        {[
          {
            step: '01',
            title: 'Listele',
            desc: 'Takas etmek istediğin modeli, isteklerinle birlikte yayınla.',
          },
          {
            step: '02',
            title: 'Eşleş',
            desc: 'Algoritma seninle aynı dileği paylaşan koleksiyonerleri bulur.',
          },
          {
            step: '03',
            title: 'Güvenli takas',
            desc: 'Tarodan üç aşamalı kontrolden sonra paketleri eşleştirir.',
          },
        ].map((s) => (
          <li key={s.step} className="rounded-v2-card-lg bg-v2-surface p-7">
            <span className="font-v2 text-[42px] font-medium leading-none tracking-tighter text-v2-ink/[0.12]">
              {s.step}
            </span>
            <h3 className="font-v2 mt-3 text-[20px] font-medium tracking-tight text-v2-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-v2-muted">
              {s.desc}
            </p>
          </li>
        ))}
      </ul>

      {/* Search bar */}
      <div className="mt-10 flex items-center gap-2 rounded-v2-pill bg-v2-surface p-1.5 pl-5">
        <Search className="h-4 w-4 text-v2-faint" />
        <input
          placeholder="Takasta aradığın modeli yaz..."
          className="font-v2 h-11 flex-1 bg-transparent text-[14px] outline-none placeholder:text-v2-faint"
        />
        <button className="font-v2 inline-flex h-11 items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 text-[14px] font-medium text-v2-on-ink">
          Ara
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <Tabs defaultValue="aktif" className="mt-10">
        <TabsList>
          <TabsTrigger value="aktif">Aktif takaslar · 412</TabsTrigger>
          <TabsTrigger value="benim">Takaslarım · 6</TabsTrigger>
          <TabsTrigger value="tamamlanan">Tamamlanan · 1.842</TabsTrigger>
        </TabsList>
        <TabsContent value="aktif">
          <div className="grid gap-4 lg:grid-cols-2">
            {SWAPS.map((s) => (
              <Link
                key={s.id}
                to={`/v2/takas/${s.id}`}
                className="group grid grid-cols-[140px_1fr_auto] items-center gap-5 rounded-v2-card bg-v2-surface p-4 transition-colors hover:bg-v2-surface-2"
              >
                <div className="relative aspect-square overflow-hidden rounded-v2-sm bg-v2-bg">
                  <img
                    src={s.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <Badge
                    variant={s.status === 'active' ? 'success' : 'accentSoft'}
                    size="sm"
                    className="absolute left-2 top-2"
                  >
                    {s.status === 'active' ? 'Aktif' : 'Bekliyor'}
                  </Badge>
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
                    {s.scale} · {s.brand}
                  </p>
                  <h3 className="font-v2 mt-1 line-clamp-1 text-[16px] font-medium leading-tight text-v2-ink">
                    {s.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[12px] text-v2-muted">
                    <Avatar size="xs" fallback={s.user} />
                    <span>{s.user}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge variant="default" size="sm">
                      <Repeat className="h-3 w-3" /> {s.offers} teklif
                    </Badge>
                    <Badge variant="default" size="sm">
                      İsteyen {s.wantsList}
                    </Badge>
                  </div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-transform group-hover:rotate-12">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="benim">
          <div className="rounded-v2-card-lg bg-v2-surface p-12 text-center">
            <Repeat className="mx-auto h-8 w-8 text-v2-muted" />
            <p className="font-v2 mt-3 text-[16px] font-medium text-v2-ink">
              Henüz aktif takasın yok
            </p>
            <p className="mt-1 text-[13px] text-v2-muted">
              Takasa açmak istediğin bir modeli listele.
            </p>
            <Button variant="primary" size="md" className="mt-5">
              İlk takasını listele
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="tamamlanan">
          <p className="text-[14px] text-v2-muted">Geçmiş takasların burada listelenir.</p>
        </TabsContent>
      </Tabs>

      {/* Trust footer */}
      <section className="mt-20 rounded-v2-card-lg bg-v2-surface p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <h3 className="font-v2 mt-5 text-[28px] font-medium leading-tight tracking-tight text-v2-ink">
          Tarodan Takas Güvencesi
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-v2-muted">
          Her takas üç aşamalı kontrolden geçer: kimlik doğrulama, ürün
          doğrulama, paket doğrulama. Sorun yaşarsan değişimi otomatik iptal
          ederiz.
        </p>
      </section>
    </div>
  )
}
