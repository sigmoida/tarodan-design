import { Link } from 'react-router-dom'
import { ArrowUpRight, Package, Truck } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Badge } from '../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

type OrderStatus = 'preparing' | 'shipped' | 'delivered' | 'cancelled'

const ORDERS = [
  {
    id: 'TRD-2024-48172',
    date: '14 Nisan 2026',
    status: 'shipped' as OrderStatus,
    total: 2890,
    items: [PRODUCTS[1]],
    eta: '2 gün içinde',
    seller: 'AutoArt İstanbul',
  },
  {
    id: 'TRD-2024-48108',
    date: '11 Nisan 2026',
    status: 'delivered' as OrderStatus,
    total: 1748,
    items: [PRODUCTS[0], PRODUCTS[4]],
    seller: 'Diecast Atölyesi',
  },
  {
    id: 'TRD-2024-47921',
    date: '4 Nisan 2026',
    status: 'preparing' as OrderStatus,
    total: 899,
    items: [PRODUCTS[3]],
    seller: 'Modeller Mağazası',
  },
  {
    id: 'TRD-2024-47502',
    date: '21 Mart 2026',
    status: 'cancelled' as OrderStatus,
    total: 1690,
    items: [PRODUCTS[2]],
    seller: 'Vintage Models',
  },
]

const STATUS_LABEL: Record<OrderStatus, string> = {
  preparing: 'Hazırlanıyor',
  shipped: 'Kargoda',
  delivered: 'Teslim edildi',
  cancelled: 'İptal edildi',
}

const STATUS_TONE: Record<OrderStatus, 'accentSoft' | 'success' | 'default' | 'danger'> = {
  preparing: 'accentSoft',
  shipped: 'default',
  delivered: 'success',
  cancelled: 'danger',
}

export function Orders() {
  return (
    <div className="v2-container pt-10">
      <header>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Siparişlerim
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          Sipariş geçmişi
        </h1>
        <p className="mt-2 text-[14px] text-v2-muted">
          Tüm satın aldıkların ve durumları.
        </p>
      </header>

      <Tabs defaultValue="hepsi" className="mt-10">
        <TabsList>
          <TabsTrigger value="hepsi">Hepsi · {ORDERS.length}</TabsTrigger>
          <TabsTrigger value="aktif">Aktif</TabsTrigger>
          <TabsTrigger value="teslim">Teslim edilen</TabsTrigger>
          <TabsTrigger value="iptal">İptal</TabsTrigger>
        </TabsList>
        <TabsContent value="hepsi">
          <ul className="space-y-3">
            {ORDERS.map((o) => (
              <li
                key={o.id}
                className="rounded-v2-card-lg bg-v2-surface p-6"
              >
                <header className="flex flex-wrap items-center justify-between gap-3 border-b border-v2 pb-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant={STATUS_TONE[o.status]}>
                      {o.status === 'shipped' && <Truck className="h-3 w-3" />}
                      {o.status === 'preparing' && <Package className="h-3 w-3" />}
                      {STATUS_LABEL[o.status]}
                    </Badge>
                    <span className="font-v2 text-[14px] font-medium text-v2-ink">
                      {o.id}
                    </span>
                    <span className="text-[12px] text-v2-muted">{o.date}</span>
                  </div>
                  <Link
                    to={`/v2/siparisler/${o.id}`}
                    className="font-v2 inline-flex items-center gap-1 text-[13px] font-medium text-v2-ink hover:text-v2-accent"
                  >
                    Detay
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </header>
                <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <ul className="space-y-3">
                    {o.items.map((it) => (
                      <li key={it.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-v2-sm bg-v2-bg">
                          <img
                            src={it.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
                            {it.scale} · {it.brand}
                          </p>
                          <p className="font-v2 mt-0.5 line-clamp-1 text-[14px] font-medium text-v2-ink">
                            {it.title}
                          </p>
                        </div>
                        <p className="font-v2 text-[14px] font-semibold text-v2-ink">
                          ₺{it.price.toLocaleString('tr-TR')}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-v2 pt-5 sm:flex-col sm:items-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <div className="text-right">
                      <p className="text-[12px] text-v2-muted">Toplam</p>
                      <p className="font-v2 mt-0.5 text-[20px] font-semibold tracking-tight text-v2-ink">
                        ₺{o.total.toLocaleString('tr-TR')}
                      </p>
                    </div>
                    {o.eta && (
                      <p className="mt-2 text-[12px] text-v2-muted">
                        {o.eta} · {o.seller}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="aktif">
          <p className="text-[14px] text-v2-muted">Sadece aktif siparişler.</p>
        </TabsContent>
        <TabsContent value="teslim">
          <p className="text-[14px] text-v2-muted">Sadece teslim edilenler.</p>
        </TabsContent>
        <TabsContent value="iptal">
          <p className="text-[14px] text-v2-muted">Sadece iptal edilenler.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
