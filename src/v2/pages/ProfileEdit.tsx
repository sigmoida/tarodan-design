import { Link } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import { Avatar } from '../components/ui/Avatar'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/Select'

export function ProfileEdit() {
  return (
    <div className="v2-container pt-10">
      <Link
        to="/v2/profil"
        className="font-v2 inline-flex items-center gap-1.5 text-[13px] text-v2-muted hover:text-v2-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Profile dön
      </Link>
      <header className="mt-3">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Hesap
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          Profili düzenle
        </h1>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav className="space-y-1">
            {[
              ['Genel', true],
              ['Mağaza bilgileri', false],
              ['Kargo & adres', false],
              ['Ödeme & komisyon', false],
              ['Bildirim tercihleri', false],
              ['Güvenlik', false],
              ['Hesabı kapat', false],
            ].map(([label, active]) => (
              <button
                key={String(label)}
                className={`font-v2 block w-full rounded-v2-pill px-4 py-2.5 text-left text-[14px] font-medium transition-colors ${
                  active
                    ? 'bg-v2-ink text-v2-on-ink'
                    : 'text-v2-muted hover:bg-v2-surface hover:text-v2-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          {/* Avatar block */}
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h2 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              Profil fotoğrafı
            </h2>
            <p className="mt-1 text-[13px] text-v2-muted">
              JPG, PNG. En fazla 4MB.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <Avatar size="xl" fallback="Mustafa Yılmaz" />
              <div className="flex gap-2">
                <Button variant="primary" size="md" type="button">
                  Yükle
                </Button>
                <Button variant="ghost" size="md" type="button">
                  Kaldır
                </Button>
              </div>
            </div>
          </div>

          {/* Identity */}
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h2 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              Kimlik
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Ad"><Input defaultValue="Mustafa" /></Field>
              <Field label="Soyad"><Input defaultValue="Yılmaz" /></Field>
              <Field label="Kullanıcı adı" full>
                <Input defaultValue="@mustafa" />
              </Field>
              <Field label="E-posta" full>
                <Input type="email" defaultValue="m.yilmaz@example.com" />
              </Field>
              <Field label="Telefon">
                <Input defaultValue="+90 532 *** ** **" />
              </Field>
              <Field label="Doğum tarihi">
                <Input type="date" defaultValue="1989-04-12" />
              </Field>
            </div>
          </div>

          {/* Bio */}
          <div className="rounded-v2-card-lg bg-v2-surface p-7">
            <h2 className="font-v2 text-[18px] font-medium tracking-tight text-v2-ink">
              Biyografi
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="Hakkında">
                <Textarea
                  rows={4}
                  defaultValue="15 yıldır diecast topluyorum. Özellikle 70-90 dönemi İtalyan ve Japon klasiklerine ilgim var."
                />
              </Field>
              <Field label="Konum">
                <Select defaultValue="ist">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">İstanbul</SelectItem>
                    <SelectItem value="ank">Ankara</SelectItem>
                    <SelectItem value="izm">İzmir</SelectItem>
                    <SelectItem value="bur">Bursa</SelectItem>
                    <SelectItem value="ant">Antalya</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>

          {/* Footer actions */}
          <div className="sticky bottom-4 flex items-center justify-between rounded-v2-card bg-v2-ink p-4 text-v2-on-ink">
            <p className="font-v2 px-2 text-[13px] opacity-80">
              Değişiklikler kaydedilmedi
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                type="button"
                className="border-white/30 text-v2-on-ink hover:bg-white/10"
              >
                Vazgeç
              </Button>
              <Button variant="secondary" size="sm" type="submit">
                <Save className="h-4 w-4" />
                Kaydet
              </Button>
            </div>
          </div>
        </form>
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
