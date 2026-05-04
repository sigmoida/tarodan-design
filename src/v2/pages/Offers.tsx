import { ArrowUpRight, Check, X } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

const OFFERS = [
  {
    id: 'o1',
    type: 'incoming',
    user: 'Selin Ay',
    product: PRODUCTS[0],
    offer: 1100,
    listed: 1249,
    time: '2 sa',
  },
  {
    id: 'o2',
    type: 'incoming',
    user: 'Cem Aslan',
    product: PRODUCTS[1],
    offer: 2700,
    listed: 2890,
    time: '6 sa',
  },
  {
    id: 'o3',
    type: 'outgoing',
    user: 'Diecast Atölyesi',
    product: PRODUCTS[2],
    offer: 1500,
    listed: 1690,
    time: 'Dün',
  },
] as const

export function Offers() {
  return (
    <div className="v2-container pt-10">
      <header>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Teklifler
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          Pazarlık ve teklifler
        </h1>
        <p className="mt-2 text-[14px] text-v2-muted">
          Aldığın ve gönderdiğin tüm teklifleri buradan yönet.
        </p>
      </header>

      <Tabs defaultValue="gelen" className="mt-10">
        <TabsList>
          <TabsTrigger value="gelen">Gelen · 2</TabsTrigger>
          <TabsTrigger value="giden">Gönderdiklerim · 1</TabsTrigger>
          <TabsTrigger value="kabul">Kabul edilenler</TabsTrigger>
          <TabsTrigger value="red">Reddedilenler</TabsTrigger>
        </TabsList>
        <TabsContent value="gelen">
          <ul className="space-y-3">
            {OFFERS.filter((o) => o.type === 'incoming').map((o) => (
              <OfferCard key={o.id} offer={o} mode="incoming" />
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="giden">
          <ul className="space-y-3">
            {OFFERS.filter((o) => o.type === 'outgoing').map((o) => (
              <OfferCard key={o.id} offer={o} mode="outgoing" />
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="kabul">
          <p className="text-[14px] text-v2-muted">Kabul edilen teklifler.</p>
        </TabsContent>
        <TabsContent value="red">
          <p className="text-[14px] text-v2-muted">Reddedilen teklifler.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function OfferCard({
  offer,
  mode,
}: {
  offer: (typeof OFFERS)[number]
  mode: 'incoming' | 'outgoing'
}) {
  const diff = ((offer.listed - offer.offer) / offer.listed) * 100
  return (
    <li className="grid gap-5 rounded-v2-card-lg bg-v2-surface p-6 lg:grid-cols-[80px_1fr_auto] lg:items-center">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-v2-card bg-v2-bg">
        <img
          src={offer.product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
            {offer.product.scale} · {offer.product.brand}
          </p>
          <Badge variant="accentSoft" size="sm">
            %{diff.toFixed(0)} altında
          </Badge>
        </div>
        <h3 className="font-v2 mt-1 line-clamp-1 text-[16px] font-medium text-v2-ink">
          {offer.product.title}
        </h3>
        <div className="mt-3 flex items-center gap-2">
          <Avatar size="xs" fallback={offer.user} />
          <span className="text-[12px] text-v2-muted">
            {mode === 'incoming' ? 'Teklif veren' : 'Sattıcı'} · {offer.user} ·{' '}
            {offer.time}
          </span>
        </div>
        <div className="mt-4 flex items-baseline gap-3">
          <p className="font-v2 text-[20px] font-semibold tracking-tight text-v2-ink">
            ₺{offer.offer.toLocaleString('tr-TR')}
          </p>
          <p className="text-[13px] text-v2-faint line-through">
            ₺{offer.listed.toLocaleString('tr-TR')}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-2">
        {mode === 'incoming' ? (
          <>
            <Button size="md">
              <Check className="h-4 w-4" /> Kabul et
            </Button>
            <Button size="md" variant="outline">
              Karşı teklif
            </Button>
            <Button size="md" variant="ghost" className="text-v2-danger hover:bg-v2-danger-soft">
              <X className="h-4 w-4" /> Reddet
            </Button>
          </>
        ) : (
          <>
            <Button size="md" variant="outline">
              Mesaj at
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button size="md" variant="ghost" className="text-v2-danger hover:bg-v2-danger-soft">
              Teklifi geri çek
            </Button>
          </>
        )}
      </div>
    </li>
  )
}
