import { useState } from 'react'
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react'
import { PRODUCTS, BRANDS, SCALES } from '@/v2/data/mock'
import { ProductCard } from '../components/sections/ProductCard'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/Select'

const SORT_OPTIONS = [
  { value: 'pop', label: 'Popülerlik' },
  { value: 'new', label: 'En yeniler' },
  { value: 'asc', label: 'Fiyat: artan' },
  { value: 'desc', label: 'Fiyat: azalan' },
]

const ACTIVE_FILTERS = ['1:18', 'Bburago', 'Takas Açık']

export function Listing() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const products = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS]

  return (
    <div className="v2-container pt-10">
      {/* Page header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Tüm İlanlar
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            Pazaryeri
          </h1>
          <p className="mt-2 text-[14px] text-v2-muted">
            {products.length} ürün · 18 markada · 4 kategoride
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="pop">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sırala" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="inline-flex rounded-v2-pill bg-v2-surface p-1">
            <button
              aria-label="Grid"
              onClick={() => setView('grid')}
              className={`grid h-9 w-9 place-items-center rounded-v2-pill transition-colors ${
                view === 'grid'
                  ? 'bg-v2-bg text-v2-ink'
                  : 'text-v2-muted hover:text-v2-ink'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              aria-label="List"
              onClick={() => setView('list')}
              className={`grid h-9 w-9 place-items-center rounded-v2-pill transition-colors ${
                view === 'list'
                  ? 'bg-v2-bg text-v2-ink'
                  : 'text-v2-muted hover:text-v2-ink'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Active filters */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="h-4 w-4" />
          Filtreler
        </Button>
        {ACTIVE_FILTERS.map((f) => (
          <Badge key={f} variant="surface" size="md" className="gap-1.5">
            {f}
            <button className="text-v2-muted hover:text-v2-ink" aria-label={`${f} kaldır`}>
              ×
            </button>
          </Badge>
        ))}
        <button className="font-v2 text-[13px] text-v2-muted underline-offset-4 hover:text-v2-ink hover:underline">
          Tümünü temizle
        </button>
      </div>

      {/* Layout */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <FiltersPanel />
        </aside>
        <div>
          {view === 'grid' ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {products.slice(0, 9).map((p, i) => (
                <ProductCard
                  key={`${p.id}-${i}`}
                  product={{ ...p, id: `${p.id}-${i}` }}
                  variant="compact"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {products.slice(0, 6).map((p, i) => (
                <ProductCard
                  key={`${p.id}-${i}`}
                  product={{ ...p, id: `${p.id}-${i}` }}
                  variant="wide"
                />
              ))}
            </div>
          )}
          <div className="mt-12 flex justify-center">
            <Button variant="primary" size="lg">
              Daha fazla yükle
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FiltersPanel() {
  return (
    <div className="rounded-v2-card-lg bg-v2-surface p-6">
      <FilterGroup title="Kategori">
        {['Arabalar', 'Motorsikletler', 'İş Makineleri', 'Trenler & Uçaklar'].map(
          (c) => (
            <CheckboxRow key={c} label={c} count={Math.floor(Math.random() * 1500)} />
          ),
        )}
      </FilterGroup>
      <FilterGroup title="Ölçek">
        {SCALES.map((s) => (
          <CheckboxRow
            key={s.value}
            label={s.value}
            count={Math.floor(Math.random() * 1200)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Marka">
        {BRANDS.slice(0, 6).map((b) => (
          <CheckboxRow key={b} label={b} count={Math.floor(Math.random() * 400)} />
        ))}
        <button className="font-v2 mt-2 text-[13px] text-v2-ink underline underline-offset-4">
          Tümünü gör
        </button>
      </FilterGroup>
      <FilterGroup title="Fiyat aralığı">
        <div className="flex gap-2">
          <input
            placeholder="Min ₺"
            className="font-v2 h-10 w-full rounded-v2-input border border-v2 bg-v2-bg px-3 text-[13px] outline-none"
          />
          <input
            placeholder="Max ₺"
            className="font-v2 h-10 w-full rounded-v2-input border border-v2 bg-v2-bg px-3 text-[13px] outline-none"
          />
        </div>
      </FilterGroup>
      <FilterGroup title="Durum" last>
        <CheckboxRow label="Sıfır / kutusunda" count={1840} />
        <CheckboxRow label="İkinci el" count={3120} />
        <CheckboxRow label="Vintage" count={284} />
      </FilterGroup>
    </div>
  )
}

function FilterGroup({
  title,
  children,
  last,
}: {
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={last ? '' : 'mb-6 border-b border-v2 pb-6'}>
      <h3 className="font-v2 text-[14px] font-semibold tracking-tight text-v2-ink">
        {title}
      </h3>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  )
}

function CheckboxRow({ label, count }: { label: string; count?: number }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-v2-sm px-2 py-1.5 transition-colors hover:bg-v2-bg">
      <span className="flex items-center gap-2.5">
        <span className="grid h-4 w-4 place-items-center rounded border border-v2-strong bg-v2-bg" />
        <span className="font-v2 text-[13px] text-v2-ink">{label}</span>
      </span>
      {count !== undefined && (
        <span className="text-[12px] text-v2-faint">
          {count.toLocaleString('tr-TR')}
        </span>
      )}
    </label>
  )
}
