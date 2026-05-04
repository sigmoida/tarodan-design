import { useState } from 'react'
import { ArrowUpRight, Check, Sparkles, Star, Zap } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

type Plan = {
  name: string
  price: string
  cycle: string
  description: string
  features: readonly string[]
  cta: string
  featured?: boolean
  disabled?: boolean
}

const PLANS: readonly Plan[] = [
  {
    name: 'Free',
    price: '₺0',
    cycle: '/ ay',
    description: 'Diecast yolculuğuna başlamak için yeterli.',
    features: [
      '5 aktif ilan',
      '5 takas teklifi / ay',
      'Standart destek',
      'Topluluk forumu',
    ],
    cta: 'Mevcut planın',
    disabled: true,
  },
  {
    name: 'Premium',
    price: '₺99',
    cycle: '/ ay',
    description: 'Aktif koleksiyonerler için. En popüler seçim.',
    features: [
      'Sınırsız ilan',
      'Sınırsız takas',
      'Profilinde "Doğrulanmış" rozet',
      '%2 düşük komisyon',
      'Öncelikli müşteri desteği',
      'Erken erişim — yeni gelenler',
    ],
    cta: 'Premium\'a yükselt',
    featured: true,
  },
  {
    name: 'Pro Mağaza',
    price: '₺249',
    cycle: '/ ay',
    description: 'Profesyonel satıcılar ve butik mağazalar için.',
    features: [
      'Tüm Premium özellikler',
      'Mağaza sayfası ve özel domain',
      '%5 düşük komisyon',
      'Toplu ürün yükleme',
      'Detaylı satış analitiği',
      'Adanmış hesap yöneticisi',
    ],
    cta: 'Mağazanı oluştur',
  },
]

export function Membership() {
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('monthly')
  return (
    <div className="v2-container pt-10">
      <header className="text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Üyelik Planları
        </p>
        <h1 className="font-v2 mx-auto mt-3 max-w-2xl text-[48px] font-medium leading-[1.05] tracking-tight text-v2-ink sm:text-[64px]">
          Koleksiyonuna<br /> uygun bir plan seç
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-v2-muted">
          Diecast yolculuğun ne aşamada olursa olsun, sana uygun bir plan var.
          İstediğin zaman değiştirebilir veya iptal edebilirsin.
        </p>

        {/* Cycle toggle */}
        <div className="mx-auto mt-8 inline-flex rounded-v2-pill bg-v2-surface p-1">
          {[
            { v: 'monthly', label: 'Aylık' },
            { v: 'yearly', label: 'Yıllık · 2 ay bedava' },
          ].map((o) => (
            <button
              key={o.v}
              onClick={() => setCycle(o.v as typeof cycle)}
              className={`font-v2 rounded-v2-pill px-5 py-2.5 text-[13px] font-medium transition-colors ${
                cycle === o.v
                  ? 'bg-v2-bg text-v2-ink'
                  : 'text-v2-muted hover:text-v2-ink'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </header>

      {/* Plans */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-4 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-v2-card-lg p-8 ${
              p.featured
                ? 'bg-v2-ink text-v2-on-ink'
                : 'bg-v2-surface text-v2-ink'
            }`}
          >
            {p.featured && (
              <Badge variant="accent" className="absolute right-6 top-6">
                <Sparkles className="h-3 w-3" /> En popüler
              </Badge>
            )}
            <h3 className="font-v2 text-[22px] font-medium tracking-tight">
              {p.name}
            </h3>
            <p
              className={`mt-1 text-[13px] ${p.featured ? 'opacity-75' : 'text-v2-muted'}`}
            >
              {p.description}
            </p>
            <p className="font-v2 mt-7 flex items-baseline gap-1">
              <span className="text-[48px] font-semibold tracking-tight">
                {cycle === 'yearly' && p.name !== 'Free'
                  ? p.price.replace(/\d+/, (n) => String(Math.floor(Number(n) * 0.83 * 12)))
                  : p.price}
              </span>
              <span className={`text-[14px] ${p.featured ? 'opacity-70' : 'text-v2-muted'}`}>
                {cycle === 'yearly' ? '/ yıl' : p.cycle}
              </span>
            </p>
            <ul className="mt-7 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]">
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                      p.featured ? 'bg-white/15' : 'bg-v2-bg'
                    }`}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button
                size="lg"
                variant={p.featured ? 'secondary' : 'primary'}
                className="w-full"
                disabled={p.disabled}
              >
                {p.cta}
                {!p.disabled && <ArrowUpRight className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Why upgrade */}
      <section className="mt-24">
        <div className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Neden Premium?
          </p>
          <h2 className="font-v2 mt-3 text-[36px] font-medium leading-tight tracking-tight text-v2-ink">
            Aktif koleksiyonerler için yapıldı
          </h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: Star,
              title: 'Görünürlük',
              body: 'İlanların arama sonuçlarında üst sıralarda yer alır.',
            },
            {
              icon: Zap,
              title: 'Düşük komisyon',
              body: 'Her satışta %2 düşük komisyon — yıllık binlerce TL fark.',
            },
            {
              icon: Sparkles,
              title: 'Erken erişim',
              body: 'Yeni gelenleri herkesten 24 saat önce gör.',
            },
          ].map((b) => (
            <div key={b.title} className="rounded-v2-card-lg bg-v2-surface p-7">
              <span className="grid h-12 w-12 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="font-v2 mt-5 text-[20px] font-medium tracking-tight text-v2-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-v2-muted">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="font-v2 text-[28px] font-medium tracking-tight text-v2-ink">
            Sıkça sorulanlar
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-2">
          {[
            {
              q: 'İstediğim zaman iptal edebilir miyim?',
              a: 'Evet. İptal edersen mevcut periyodun sonuna kadar Premium kalırsın, sonra otomatik olarak Free\'a geçersin.',
            },
            {
              q: 'Komisyon farkı nasıl hesaplanır?',
              a: 'Free planda %10, Premium\'da %8, Pro\'da %5 komisyon alıyoruz. Aradaki fark direkt cebinde kalır.',
            },
            {
              q: 'Yıllık planda iade var mı?',
              a: '14 gün koşulsuz iade. Premium\'a yükselttikten sonra ilk 14 gün içinde iptal edersen tüm ödemen iade edilir.',
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-v2-card bg-v2-surface p-5 transition-colors hover:bg-v2-surface-2"
            >
              <summary className="font-v2 flex cursor-pointer items-center justify-between text-[15px] font-medium text-v2-ink">
                {f.q}
                <span className="grid h-6 w-6 place-items-center rounded-full bg-v2-bg text-v2-ink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-v2-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
