import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { IMG } from '@/v2/data/mock'

export function Auth() {
  const { pathname } = useLocation()
  const initialMode: 'login' | 'register' = pathname.endsWith('/kayit')
    ? 'register'
    : 'login'
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)

  return (
    <div className="v2-container pt-10">
      <div className="grid min-h-[640px] gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Left visual */}
        <div className="relative hidden overflow-hidden rounded-v2-card-lg bg-v2-surface lg:block">
          <img
            src={IMG.featuredMclaren}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/80">
              Topluluğa katıl
            </p>
            <h2 className="font-v2 mt-3 max-w-md text-[40px] font-medium leading-[1.05] tracking-tight text-white">
              Türkiye'nin en büyük diecast topluluğunda yerini al.
            </h2>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/85">
              30.000+ koleksiyoner, 84.000+ ilan, haftada 1.842 başarılı takas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-[12px] text-white/80">
              <li className="rounded-v2-pill bg-white/10 px-3 py-1">SSL korumalı</li>
              <li className="rounded-v2-pill bg-white/10 px-3 py-1">Tarodan Güvencesi</li>
              <li className="rounded-v2-pill bg-white/10 px-3 py-1">3 aşamalı takas</li>
            </ul>
          </div>
        </div>

        {/* Right form */}
        <div className="flex flex-col justify-center rounded-v2-card-lg bg-v2-surface p-8 sm:p-12">
          <Link
            to="/v2"
            className="font-v2 mb-8 self-start text-[20px] font-semibold tracking-tight text-v2-ink"
          >
            tarodan<span className="text-v2-accent">.</span>
          </Link>

          {/* Tab switch */}
          <div className="inline-flex w-full rounded-v2-pill bg-v2-bg p-1">
            <button
              onClick={() => setMode('login')}
              className={`font-v2 flex-1 rounded-v2-pill py-2.5 text-[14px] font-medium transition-colors ${
                mode === 'login'
                  ? 'bg-v2-ink text-v2-on-ink'
                  : 'text-v2-muted hover:text-v2-ink'
              }`}
            >
              Giriş yap
            </button>
            <button
              onClick={() => setMode('register')}
              className={`font-v2 flex-1 rounded-v2-pill py-2.5 text-[14px] font-medium transition-colors ${
                mode === 'register'
                  ? 'bg-v2-ink text-v2-on-ink'
                  : 'text-v2-muted hover:text-v2-ink'
              }`}
            >
              Kayıt ol
            </button>
          </div>

          <h1 className="font-v2 mt-8 text-[32px] font-medium leading-tight tracking-tight text-v2-ink">
            {mode === 'login' ? 'Tekrar hoş geldin' : 'Hesabını oluştur'}
          </h1>
          <p className="mt-2 text-[14px] text-v2-muted">
            {mode === 'login'
              ? 'Devam etmek için giriş yap.'
              : 'Birkaç saniyede üye ol, hemen başla.'}
          </p>

          {/* Social */}
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            <Button variant="outline" size="lg" type="button">
              Google ile devam et
            </Button>
            <Button variant="outline" size="lg" type="button">
              Apple ile devam et
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-[12px] text-v2-faint">
            <span className="h-px flex-1 bg-v2-border" />
            veya
            <span className="h-px flex-1 bg-v2-border" />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            {mode === 'register' && (
              <Field label="Ad Soyad">
                <Input placeholder="Mustafa Yılmaz" />
              </Field>
            )}
            <Field label="E-posta">
              <Input type="email" placeholder="m.yilmaz@example.com" />
            </Field>
            <Field label="Şifre">
              <Input type="password" placeholder="••••••••" />
            </Field>
            {mode === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-[13px] text-v2-muted">
                  <input type="checkbox" />
                  Beni hatırla
                </label>
                <Link
                  to="/v2"
                  className="font-v2 text-[13px] text-v2-ink underline-offset-4 hover:underline"
                >
                  Şifremi unuttum
                </Link>
              </div>
            )}
            <Button size="lg" type="submit" className="w-full">
              {mode === 'login' ? 'Giriş yap' : 'Hesabı oluştur'}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-[13px] text-v2-muted">
            {mode === 'login' ? (
              <>
                Hesabın yok mu?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="font-v2 font-medium text-v2-ink underline underline-offset-4"
                >
                  Kayıt ol
                </button>
              </>
            ) : (
              <>
                Hesabın var mı?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="font-v2 font-medium text-v2-ink underline underline-offset-4"
                >
                  Giriş yap
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
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
