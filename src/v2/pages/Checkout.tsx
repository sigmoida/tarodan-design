import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, CheckCircle2, CreditCard, MapPin } from 'lucide-react'
import { PRODUCTS } from '@/v2/data/mock'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'

const STEPS = [
  { key: 'adres', title: 'Teslimat adresi', icon: MapPin },
  { key: 'odeme', title: 'Ödeme', icon: CreditCard },
  { key: 'onay', title: 'Onay', icon: CheckCircle2 },
] as const

type StepKey = (typeof STEPS)[number]['key']

export function Checkout() {
  const [step, setStep] = useState<StepKey>('adres')
  const items = PRODUCTS.slice(0, 2)
  const subtotal = items.reduce((s, p) => s + p.price, 0)
  const total = subtotal + 49

  return (
    <div className="v2-container pt-10">
      <header>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Ödeme
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          Siparişini tamamla
        </h1>
      </header>

      {/* Stepper */}
      <ol className="mt-10 grid grid-cols-3 gap-3">
        {STEPS.map((s, i) => {
          const active = s.key === step
          const completed = STEPS.findIndex((x) => x.key === step) > i
          return (
            <li key={s.key}>
              <button
                onClick={() => setStep(s.key)}
                className={`flex w-full items-center gap-3 rounded-v2-card p-4 text-left transition-colors ${
                  active
                    ? 'bg-v2-ink text-v2-on-ink'
                    : completed
                      ? 'bg-v2-surface text-v2-ink'
                      : 'bg-v2-surface text-v2-muted'
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-v2-pill ${
                    active
                      ? 'bg-white/15'
                      : completed
                        ? 'bg-v2-success text-white'
                        : 'bg-v2-bg'
                  }`}
                >
                  {completed ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                </span>
                <div>
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.16em] ${
                      active ? 'opacity-80' : ''
                    }`}
                  >
                    Adım {i + 1}
                  </p>
                  <p className="font-v2 text-[15px] font-medium">{s.title}</p>
                </div>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
        <div>
          {step === 'adres' && <AdresForm onContinue={() => setStep('odeme')} />}
          {step === 'odeme' && <OdemeForm onContinue={() => setStep('onay')} />}
          {step === 'onay' && <Onay total={total} />}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h3 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              {items.length} ürün
            </h3>
            <ul className="mt-5 space-y-4">
              {items.map((p) => (
                <li key={p.id} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-v2-sm bg-v2-bg">
                    <img
                      src={p.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-v2 line-clamp-1 text-[13px] font-medium text-v2-ink">
                      {p.title}
                    </p>
                    <p className="text-[12px] text-v2-muted">{p.scale} · {p.brand}</p>
                  </div>
                  <p className="font-v2 text-[14px] font-semibold text-v2-ink">
                    ₺{p.price.toLocaleString('tr-TR')}
                  </p>
                </li>
              ))}
            </ul>
            <div className="my-5 h-px bg-v2-border" />
            <dl className="space-y-2 text-[14px]">
              <SummaryRow label="Ara toplam" value={`₺${subtotal.toLocaleString('tr-TR')}`} />
              <SummaryRow label="Kargo" value="₺49" />
              <SummaryRow label="Toplam" value={`₺${total.toLocaleString('tr-TR')}`} emphasis />
            </dl>
            <div className="mt-5 flex flex-wrap gap-1.5">
              <Badge variant="default" size="sm">SSL</Badge>
              <Badge variant="default" size="sm">3D Secure</Badge>
              <Badge variant="default" size="sm">Tarodan güvencesi</Badge>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function AdresForm({ onContinue }: { onContinue: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onContinue()
      }}
      className="rounded-v2-card-lg bg-v2-surface p-7"
    >
      <h2 className="font-v2 text-[22px] font-medium tracking-tight text-v2-ink">
        Teslimat adresi
      </h2>
      <p className="mt-1 text-[14px] text-v2-muted">
        Adresini gir, kargon ulaşsın.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Ad"><Input defaultValue="Murat" /></Field>
        <Field label="Soyad"><Input defaultValue="Yıldız" /></Field>
        <Field label="Telefon" full><Input defaultValue="+90 532 *** ** **" /></Field>
        <Field label="E-posta" full><Input type="email" defaultValue="m.yildiz@example.com" /></Field>
        <Field label="İl">
          <Input defaultValue="İstanbul" />
        </Field>
        <Field label="İlçe">
          <Input defaultValue="Beşiktaş" />
        </Field>
        <Field label="Adres" full>
          <textarea
            rows={3}
            className="font-v2 w-full rounded-v2-input border border-v2 bg-v2-bg px-4 py-3 text-[14px] outline-none focus:border-v2-strong"
            defaultValue="Barbaros Bulvarı No:23 Kat:4 D:8"
          />
        </Field>
      </div>
      <div className="mt-7 flex justify-end">
        <Button size="lg" type="submit">
          Devam et
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

function OdemeForm({ onContinue }: { onContinue: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onContinue()
      }}
      className="rounded-v2-card-lg bg-v2-surface p-7"
    >
      <h2 className="font-v2 text-[22px] font-medium tracking-tight text-v2-ink">
        Ödeme yöntemi
      </h2>
      <p className="mt-1 text-[14px] text-v2-muted">Kart bilgilerini gir.</p>
      <div className="mt-6 space-y-4">
        <Field label="Kart üzerindeki ad">
          <Input defaultValue="MURAT YILDIZ" />
        </Field>
        <Field label="Kart numarası">
          <Input defaultValue="4242 4242 4242 4242" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Son kullanma">
            <Input defaultValue="08/27" />
          </Field>
          <Field label="CVV">
            <Input defaultValue="123" />
          </Field>
          <Field label="Taksit">
            <Input defaultValue="Tek çekim" />
          </Field>
        </div>
      </div>
      <div className="mt-7 flex justify-end">
        <Button size="lg" type="submit">
          Siparişi tamamla
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

function Onay({ total }: { total: number }) {
  return (
    <div className="rounded-v2-card-lg bg-v2-ink p-12 text-center text-v2-on-ink">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-v2-pill bg-white/15">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h2 className="font-v2 mt-6 text-[36px] font-medium leading-tight tracking-tight">
        Teşekkürler!
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[14px] opacity-80">
        Siparişin alındı. ₺{total.toLocaleString('tr-TR')} tutarındaki ödemen
        onaylandı, kargon hazırlanıyor.
      </p>
      <p className="mt-3 text-[13px] opacity-70">
        Sipariş no: <span className="font-mono">TRD-2024-{Math.floor(Math.random() * 90000 + 10000)}</span>
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link to="/v2/siparisler">Siparişlerime git</Link>
        </Button>
        <Button variant="outline" className="border-white/30 text-v2-on-ink hover:bg-white/10" asChild>
          <Link to="/v2/ilanlar">Alışverişe devam et</Link>
        </Button>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
  full,
}: {
  label: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="font-v2 mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
        {label}
      </span>
      {children}
    </label>
  )
}

function SummaryRow({
  label,
  value,
  emphasis,
}: {
  label: string
  value: string
  emphasis?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className={`font-v2 ${emphasis ? 'text-[16px] font-semibold text-v2-ink' : 'text-v2-muted'}`}>
        {label}
      </dt>
      <dd className={`font-v2 ${emphasis ? 'text-[18px] font-semibold tracking-tight text-v2-ink' : 'text-v2-ink'}`}>
        {value}
      </dd>
    </div>
  )
}
