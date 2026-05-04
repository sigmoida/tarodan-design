import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeCheck, Store, User } from 'lucide-react'
import { WEEKLY } from '@/v2/data/mock'
import { Badge } from '../ui/Badge'
import { Avatar } from '../ui/Avatar'
import { SectionHeader } from '../ui/SectionHeader'

export function WeeklySpotlight() {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow="Bu hafta öne çıkanlar"
        title="Topluluğun nabzı"
        subtitle="Her hafta editörümüz öne çıkan koleksiyoner ve mağazaları seçer."
        align="left"
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {WEEKLY.map((w) => (
          <article
            key={w.name}
            className="rounded-v2-card-lg bg-v2-surface p-8 transition-colors hover:bg-v2-surface-2"
          >
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-v2-pill bg-v2-ink text-v2-on-ink">
                  {w.type === 'collector' ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Store className="h-5 w-5" />
                  )}
                </span>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
                    {w.type === 'collector'
                      ? 'Haftanın Koleksiyoneri'
                      : 'Haftanın Şirketi'}
                  </p>
                  <h3 className="font-v2 mt-1.5 flex items-center gap-1.5 text-[22px] font-medium tracking-tight text-v2-ink">
                    {w.name}
                    <BadgeCheck className="h-5 w-5 text-v2-accent" />
                  </h3>
                  <p className="mt-1 text-[13px] text-v2-muted">{w.subtitle}</p>
                </div>
              </div>
              {w.badge && <Badge variant="ink">{w.badge}</Badge>}
            </header>
            <ul className="mt-7 grid grid-cols-4 gap-3 rounded-v2-card bg-v2-bg p-4">
              {w.stats.map((s) => (
                <li key={s.label} className="text-center">
                  <p className="font-v2 text-[18px] font-semibold tracking-tight text-v2-ink">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-v2-muted">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {w.thumbs.map((t, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-v2-sm bg-v2-bg"
                >
                  <img
                    src={t}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Link
              to={w.type === 'collector' ? '/v2/profil' : '/v2/marka'}
              className="font-v2 mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-v2-ink hover:text-v2-accent"
            >
              {w.type === 'collector' ? 'Profili gör' : 'Mağazayı gör'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {/* Avatar (görünmez data — geleceğe yönelik) */}
            <Avatar fallback={w.name} className="hidden" />
          </article>
        ))}
      </div>
    </section>
  )
}
