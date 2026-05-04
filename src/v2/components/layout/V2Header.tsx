import { Link, NavLink } from 'react-router-dom'
import { Heart, ShoppingBag, User, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { to: '/v2/ilanlar', label: 'İlanlar' },
  { to: '/v2/marka', label: 'Markalar' },
  { to: '/v2/koleksiyonlar', label: 'Koleksiyonlar' },
  { to: '/v2/takaslar', label: 'Takaslar' },
  { to: '/v2/uyelik', label: 'Üyelik' },
]

export function V2Header() {
  return (
    <header className="sticky top-0 z-40 bg-v2-bg/85 backdrop-blur-md">
      <div className="v2-container flex h-20 items-center justify-between gap-6">
        <Link
          to="/v2"
          className="font-v2 text-[22px] font-semibold tracking-tight text-v2-ink"
        >
          tarodan<span className="text-v2-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-v2-pill px-4 py-2 text-[14px] font-medium transition-colors',
                  isActive
                    ? 'bg-v2-surface text-v2-ink'
                    : 'text-v2-muted hover:text-v2-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <HeaderIconButton aria-label="Ara" to="/v2/ilanlar">
            <Search className="h-[18px] w-[18px]" />
          </HeaderIconButton>
          <HeaderIconButton aria-label="Favoriler" to="/v2/profil">
            <Heart className="h-[18px] w-[18px]" />
          </HeaderIconButton>
          <HeaderIconButton aria-label="Sepet" to="/v2/sepet">
            <ShoppingBag className="h-[18px] w-[18px]" />
          </HeaderIconButton>
          <HeaderIconButton aria-label="Profil" to="/v2/profil">
            <User className="h-[18px] w-[18px]" />
          </HeaderIconButton>
        </div>
      </div>
    </header>
  )
}

function HeaderIconButton({
  children,
  to,
  ...props
}: {
  children: React.ReactNode
  to: string
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      to={to}
      className="grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-surface text-v2-ink transition-colors hover:bg-v2-surface-2"
      {...props}
    >
      {children}
    </Link>
  )
}
