import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Repeat, ShieldCheck } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export function SwapDetail() {
  useParams()
  const offered = PRODUCTS[0]
  const wants = PRODUCTS.slice(1, 4)

  return (
    <div className="v2-container pt-10">
      <Link
        to="/v2/takaslar"
        className="font-v2 inline-flex items-center gap-1.5 text-[13px] text-v2-muted hover:text-v2-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Tüm takaslar
      </Link>

      <header className="mt-4 flex flex-wrap items-center gap-3">
        <Badge variant="success">
          <span className="h-2 w-2 rounded-full bg-v2-success" /> Aktif takas
        </Badge>
        <span className="font-v2 text-[12px] text-v2-muted">
          12 saat önce listelendi · 7 teklif var
        </span>
      </header>

      <h1 className="font-v2 mt-3 text-[36px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[44px]">
        {offered.title}
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Sol: Offered → Wants */}
        <div className="space-y-8">
          {/* Offered card */}
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
              Verilen
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-[200px_1fr] sm:items-center">
              <div className="relative aspect-square overflow-hidden rounded-v2-card bg-v2-bg">
                <img src={offered.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
                  {offered.scale} · {offered.brand}
                </p>
                <h3 className="font-v2 mt-1 text-[22px] font-medium leading-tight tracking-tight text-v2-ink">
                  {offered.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-v2-muted">
                  Sıfır kutusunda. Hiç açılmadı, koruma poşetiyle birlikte.
                </p>
                <p className="font-v2 mt-3 text-[18px] font-semibold tracking-tight text-v2-ink">
                  Tahmini değer: ₺{offered.price.toLocaleString('tr-TR')}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-v2-border" />
            <span className="grid h-12 w-12 place-items-center rounded-v2-pill bg-v2-ink text-v2-on-ink">
              <Repeat className="h-5 w-5" />
            </span>
            <div className="h-px flex-1 bg-v2-border" />
          </div>

          {/* Wants */}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
              Aranılanlar (en az birini gönder)
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {wants.map((w) => (
                <div key={w.id} className="rounded-v2-card bg-v2-surface p-4">
                  <div className="relative aspect-square overflow-hidden rounded-v2-sm bg-v2-bg">
                    <img src={w.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <p className="font-v2 mt-3 line-clamp-1 text-[13px] font-medium text-v2-ink">
                    {w.title}
                  </p>
                  <p className="text-[11px] text-v2-muted">
                    {w.scale} · {w.brand}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div className="rounded-v2-card-lg bg-v2-ink p-7 text-v2-on-ink">
            <h3 className="font-v2 inline-flex items-center gap-2 text-[18px] font-medium tracking-tight">
              <ShieldCheck className="h-5 w-5" /> Üç aşamalı kontrol
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                'Kimlik doğrulama: iki tarafın kimliği onaylanır',
                'Ürün doğrulama: ürün resimleri ve durumu eşleştirilir',
                'Paket doğrulama: kargo merkezimizde fiziksel kontrol',
              ].map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-[13px] opacity-90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sağ: Action panel */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <div className="flex items-center gap-3">
              <Avatar size="md" fallback="Cem Aslan" />
              <div>
                <p className="font-v2 text-[14px] font-medium text-v2-ink">
                  Cem Aslan
                </p>
                <p className="text-[12px] text-v2-muted">
                  4.9 ★ · 14 takas · İstanbul
                </p>
              </div>
            </div>
            <Button size="lg" className="mt-5 w-full">
              Teklif gönder
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="mt-2 w-full">
              Mesaj at
            </Button>
            <p className="mt-5 text-[12px] text-v2-muted">
              Teklifin değerlendirilirse 48 saat içinde geri dönüş yapılır.
            </p>
          </div>

          <div className="mt-3 rounded-v2-card bg-v2-surface p-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
              Bu takasta
            </p>
            <ul className="mt-3 space-y-2 text-[13px] text-v2-ink">
              <li className="flex items-center justify-between">
                <span>Görüntülenme</span>
                <span className="font-v2 font-medium">2.481</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Teklif</span>
                <span className="font-v2 font-medium">7</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Kayıt</span>
                <span className="font-v2 font-medium">142</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
