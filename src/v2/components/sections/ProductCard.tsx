import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Repeat } from 'lucide-react'
import type { Product } from '@/v2/data/mock'
import { Badge } from '../ui/Badge'
import { cn } from '@/lib/utils'

type Props = {
  product: Product
  variant?: 'compact' | 'wide' | 'feature'
}

export function ProductCard({ product, variant = 'compact' }: Props) {
  if (variant === 'wide') return <WideProductCard product={product} />
  if (variant === 'feature') return <FeatureProductCard product={product} />
  return <CompactProductCard product={product} />
}

function CompactProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/v2/ilan/${product.id}`}
      className="group flex flex-col rounded-v2-card bg-v2-surface p-4 transition-colors hover:bg-v2-surface-2"
    >
      <div className="relative aspect-square overflow-hidden rounded-v2-sm bg-v2-bg">
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {product.badge && (
            <Badge variant={product.badge === 'INDIRIM' ? 'accent' : 'default'} size="sm">
              {product.badge}
            </Badge>
          )}
          {product.swap && (
            <Badge variant="success" size="sm">
              <Repeat className="h-3 w-3" /> Takas
            </Badge>
          )}
        </div>
        <button
          aria-label="Favorilere ekle"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink opacity-0 transition-opacity hover:bg-v2-surface group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 pt-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-muted">
          {product.scale} · {product.brand}
        </p>
        <h3 className="font-v2 mt-1.5 line-clamp-2 text-[14px] font-medium leading-tight tracking-tight text-v2-ink">
          {product.title}
        </h3>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="font-v2 text-[18px] font-semibold tracking-tight text-v2-ink">
            ₺{product.price.toLocaleString('tr-TR')}
          </p>
          {product.oldPrice && (
            <p className="text-[12px] text-v2-faint line-through">
              ₺{product.oldPrice.toLocaleString('tr-TR')}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

function WideProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/v2/ilan/${product.id}`}
      className="group flex h-56 overflow-hidden rounded-v2-card bg-v2-surface transition-colors hover:bg-v2-surface-2"
    >
      <div className="flex flex-1 flex-col p-6">
        {product.badge && (
          <Badge variant="default" size="sm" className="self-start">
            {product.badge}
          </Badge>
        )}
        <h3 className="font-v2 mt-3 text-[20px] font-medium leading-tight tracking-tight text-v2-ink">
          {product.title}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-v2-muted">
          {product.scale} · {product.brand}
        </p>
        <div className="mt-auto flex items-baseline gap-2 pt-4">
          <p className="font-v2 text-[20px] font-semibold tracking-tight text-v2-ink">
            ₺{product.price.toLocaleString('tr-TR')}
          </p>
          {product.oldPrice && (
            <p className="text-[12px] text-v2-faint line-through">
              ₺{product.oldPrice.toLocaleString('tr-TR')}
            </p>
          )}
        </div>
      </div>
      <div className="relative h-full w-56 shrink-0 overflow-hidden sm:w-72">
        <img
          src={product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}

function FeatureProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/v2/ilan/${product.id}`}
      className={cn(
        'group relative flex aspect-[5/4] flex-col overflow-hidden rounded-v2-card-lg bg-v2-surface',
      )}
    >
      <img
        src={product.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="relative z-10 mt-auto bg-gradient-to-t from-black/70 via-black/15 to-transparent p-7">
        <div className="text-white">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-80">
            {product.scale} · {product.brand}
          </p>
          <h3 className="font-v2 mt-1.5 text-[24px] font-medium leading-tight tracking-tight">
            {product.title}
          </h3>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="font-v2 text-[22px] font-semibold tracking-tight">
              ₺{product.price.toLocaleString('tr-TR')}
            </p>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-v2-pill bg-white text-v2-ink">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
