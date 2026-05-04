import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Minus, Plus, Trash2, Truck } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

type CartItem = {
  id: string
  qty: number
  product: typeof PRODUCTS[number]
}

const initialItems: CartItem[] = PRODUCTS.slice(0, 3).map((p) => ({
  id: p.id,
  qty: 1,
  product: p,
}))

export function Cart() {
  const [items, setItems] = useState(initialItems)
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0)
  const shipping = subtotal > 1500 ? 0 : 49
  const discount = 100
  const total = subtotal + shipping - discount

  const update = (id: string, qty: number) =>
    setItems((it) =>
      it
        .map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))
        .filter((x) => x.qty > 0),
    )
  const remove = (id: string) => setItems((it) => it.filter((x) => x.id !== id))

  return (
    <div className="v2-container pt-10">
      <header className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Sepetim
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            {items.length} ürün
          </h1>
        </div>
        <Link
          to="/v2/ilanlar"
          className="font-v2 text-[14px] font-medium text-v2-muted underline-offset-4 hover:text-v2-ink hover:underline"
        >
          Alışverişe devam et
        </Link>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Items */}
        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="rounded-v2-card-lg bg-v2-surface p-16 text-center">
              <p className="font-v2 text-[20px] font-medium text-v2-ink">
                Sepetin boş.
              </p>
              <p className="mt-2 text-[14px] text-v2-muted">
                Pazaryerine göz atarak başlayabilirsin.
              </p>
              <Button asChild className="mt-6">
                <Link to="/v2/ilanlar">İlanları gör</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[120px_1fr_auto] items-center gap-5 rounded-v2-card bg-v2-surface p-5"
              >
                <div className="relative aspect-square overflow-hidden rounded-v2-sm bg-v2-bg">
                  <img
                    src={item.product.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
                    {item.product.scale} · {item.product.brand}
                  </p>
                  <h3 className="font-v2 mt-1 text-[16px] font-medium leading-tight text-v2-ink">
                    {item.product.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="inline-flex items-center rounded-v2-pill bg-v2-bg">
                      <button
                        onClick={() => update(item.id, item.qty - 1)}
                        className="grid h-9 w-9 place-items-center rounded-v2-pill text-v2-ink transition-colors hover:bg-v2-surface-2"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="font-v2 w-9 text-center text-[14px] font-medium text-v2-ink">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => update(item.id, item.qty + 1)}
                        className="grid h-9 w-9 place-items-center rounded-v2-pill text-v2-ink transition-colors hover:bg-v2-surface-2"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="font-v2 inline-flex items-center gap-1 text-[13px] text-v2-muted hover:text-v2-danger"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Kaldır
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-v2 text-[18px] font-semibold tracking-tight text-v2-ink">
                    ₺{(item.product.price * item.qty).toLocaleString('tr-TR')}
                  </p>
                  {item.qty > 1 && (
                    <p className="text-[12px] text-v2-faint">
                      ₺{item.product.price.toLocaleString('tr-TR')} / adet
                    </p>
                  )}
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <div className="rounded-v2-card border border-dashed border-v2-strong bg-v2-bg p-5">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-v2-ink" />
                <div className="flex-1 text-[13px] text-v2-ink">
                  {shipping === 0 ? (
                    <>Kargo bedava ücretsiz! 🎉</>
                  ) : (
                    <>
                      ₺{(1500 - subtotal).toLocaleString('tr-TR')} daha alışveriş
                      yap, kargo bedava.
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h3 className="font-v2 text-[20px] font-medium tracking-tight text-v2-ink">
              Sipariş özeti
            </h3>
            <dl className="mt-5 space-y-3 text-[14px]">
              <Row label="Ara toplam" value={`₺${subtotal.toLocaleString('tr-TR')}`} />
              <Row
                label="Kargo"
                value={shipping === 0 ? 'Bedava' : `₺${shipping}`}
              />
              <Row label="İndirim" value={`-₺${discount}`} accent />
              <div className="my-3 h-px bg-v2-border" />
              <Row
                label="Toplam"
                value={`₺${total.toLocaleString('tr-TR')}`}
                emphasis
              />
            </dl>

            <div className="mt-5 flex items-center gap-2 rounded-v2-pill bg-v2-bg p-1.5 pl-4">
              <input
                placeholder="Promosyon kodu"
                className="font-v2 h-9 flex-1 bg-transparent text-[13px] outline-none"
              />
              <button className="font-v2 inline-flex h-9 items-center rounded-v2-pill bg-v2-ink px-4 text-[13px] font-medium text-v2-on-ink">
                Uygula
              </button>
            </div>

            <Button size="lg" className="mt-6 w-full" asChild>
              <Link to="/v2/odeme">
                Ödemeye geç
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            <div className="mt-6 flex flex-wrap gap-1.5">
              <Badge variant="default" size="sm">
                SSL korumalı
              </Badge>
              <Badge variant="default" size="sm">
                14 gün iade
              </Badge>
              <Badge variant="default" size="sm">
                Tarodan güvencesi
              </Badge>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  emphasis,
  accent,
}: {
  label: string
  value: string
  emphasis?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <dt
        className={`font-v2 ${
          emphasis ? 'text-[18px] font-semibold text-v2-ink' : 'text-v2-muted'
        }`}
      >
        {label}
      </dt>
      <dd
        className={`font-v2 ${
          emphasis
            ? 'text-[20px] font-semibold tracking-tight text-v2-ink'
            : accent
              ? 'text-v2-success'
              : 'text-v2-ink'
        }`}
      >
        {value}
      </dd>
    </div>
  )
}
