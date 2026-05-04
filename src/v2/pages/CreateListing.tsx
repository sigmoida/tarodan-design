import { ArrowUpRight, ImagePlus, X } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/Select'
import { SCALES, BRANDS } from '@/v2/data/mock'

export function CreateListing() {
  return (
    <div className="v2-container pt-10">
      <header>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Yeni ilan
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
          İlanını oluştur
        </h1>
        <p className="mt-3 max-w-xl text-[14px] text-v2-muted">
          Ürünün hakkında verdiğin detaylar ne kadar net olursa, o kadar hızlı
          satarsın. Tüm ilanlar 1 dakikadan kısa sürede onaylanır.
        </p>
      </header>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-4">
          {/* Photos */}
          <Section
            step="01"
            title="Fotoğraflar"
            description="En az 3 fotoğraf öneriyoruz. İlk fotoğraf kapak olur."
          >
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              <button
                type="button"
                className="grid aspect-square place-items-center rounded-v2-card border-2 border-dashed border-v2-strong bg-v2-bg text-v2-muted transition-colors hover:border-v2-ink hover:text-v2-ink"
              >
                <div className="flex flex-col items-center">
                  <ImagePlus className="h-6 w-6" />
                  <span className="font-v2 mt-1 text-[12px] font-medium">Fotoğraf</span>
                </div>
              </button>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-v2-card bg-v2-bg"
                >
                  <span className="absolute inset-0 grid place-items-center text-v2-faint">
                    <ImagePlus className="h-5 w-5" />
                  </span>
                  <button
                    type="button"
                    aria-label="Kaldır"
                    className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-v2-pill bg-v2-ink text-v2-on-ink"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </Section>

          {/* Identity */}
          <Section step="02" title="Ürün bilgileri">
            <div className="grid gap-4">
              <Field label="Başlık">
                <Input placeholder="Örn. Bburago McLaren MCL60 — Lando Norris #4" />
              </Field>
              <Field label="Açıklama">
                <Textarea
                  rows={5}
                  placeholder="Modelin durumu, kutu, özel notlar..."
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Marka">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Seç" /></SelectTrigger>
                    <SelectContent>
                      {BRANDS.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Ölçek">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Seç" /></SelectTrigger>
                    <SelectContent>
                      {SCALES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Kategori">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Seç" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">Arabalar</SelectItem>
                      <SelectItem value="mt">Motorsikletler</SelectItem>
                      <SelectItem value="im">İş Makineleri</SelectItem>
                      <SelectItem value="dg">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Üretim yılı">
                  <Input placeholder="Örn. 2023" />
                </Field>
                <Field label="Renk">
                  <Input placeholder="Örn. Papaya / Anthracite" />
                </Field>
              </div>
            </div>
          </Section>

          {/* Condition */}
          <Section step="03" title="Durum & paket">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { v: 'sifir', label: 'Sıfır', desc: 'Açılmamış kutusunda' },
                { v: 'mukemmel', label: 'Mükemmel', desc: 'Sergilenmiş, hasarsız' },
                { v: 'iyi', label: 'İyi', desc: 'Hafif iz / kullanım' },
              ].map((o) => (
                <label
                  key={o.v}
                  className="flex cursor-pointer flex-col rounded-v2-card border border-v2 bg-v2-bg p-5 transition-colors has-[:checked]:border-v2-ink has-[:checked]:bg-v2-ink has-[:checked]:text-v2-on-ink"
                >
                  <input type="radio" name="cond" value={o.v} className="sr-only" />
                  <span className="font-v2 text-[16px] font-medium">{o.label}</span>
                  <span className="mt-1 text-[12px] opacity-80">{o.desc}</span>
                </label>
              ))}
            </div>
          </Section>

          {/* Pricing */}
          <Section step="04" title="Fiyat & takas">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Fiyat (₺)">
                <Input type="number" placeholder="0" />
              </Field>
              <Field label="Eski fiyat (opsiyonel)">
                <Input type="number" placeholder="0" />
              </Field>
            </div>
            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-v2-card bg-v2-bg p-4">
              <input type="checkbox" className="mt-1" />
              <div>
                <p className="font-v2 text-[14px] font-medium text-v2-ink">
                  Bu ürünü takasa açıyorum
                </p>
                <p className="text-[12px] text-v2-muted">
                  Takas teklifleri profilinde görünür.
                </p>
              </div>
            </label>
          </Section>
        </div>

        {/* Right column */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h3 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              Önizleme
            </h3>
            <div className="mt-5 rounded-v2-card bg-v2-bg p-4">
              <div className="aspect-square rounded-v2-sm bg-v2-surface" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-v2-muted">
                Marka · Ölçek
              </p>
              <p className="font-v2 mt-1 text-[14px] font-medium text-v2-ink">
                İlan başlığı buraya gelecek
              </p>
              <p className="font-v2 mt-2 text-[18px] font-semibold tracking-tight text-v2-ink">
                ₺—,—
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              <Badge variant="default" size="sm">Onaylı satıcı</Badge>
              <Badge variant="success" size="sm">14 gün iade</Badge>
            </div>
          </div>
          <Button size="lg" className="mt-3 w-full" type="submit">
            Yayınla
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button size="md" variant="outline" className="mt-2 w-full" type="button">
            Taslak olarak kaydet
          </Button>
        </aside>
      </form>
    </div>
  )
}

function Section({
  step,
  title,
  description,
  children,
}: {
  step: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-v2-card-lg bg-v2-surface p-7">
      <header className="flex items-baseline gap-3">
        <span className="font-v2 text-[14px] font-medium text-v2-faint">{step}</span>
        <h2 className="font-v2 text-[20px] font-medium tracking-tight text-v2-ink">
          {title}
        </h2>
      </header>
      {description && (
        <p className="mt-1 text-[13px] text-v2-muted">{description}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="font-v2 mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
        {label}
      </span>
      {children}
    </label>
  )
}
