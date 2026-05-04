import { Link } from 'react-router-dom'
import { BRANDS } from '@/v2/data/mock'

export function BrandsStrip() {
  return (
    <section className="v2-container mt-24">
      <div className="rounded-v2-card-lg bg-v2-surface p-8 sm:p-12">
        <div className="flex flex-col gap-2 text-center">
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Popüler markalar
          </span>
          <h3 className="font-v2 text-[24px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[32px]">
            Elliden fazla markanın tüm araçları
          </h3>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((brand) => (
            <li key={brand}>
              <Link
                to={`/v2/marka/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-v2 grid h-16 place-items-center rounded-v2-card bg-v2-bg text-[14px] font-medium tracking-tight text-v2-ink transition-colors hover:bg-v2-surface-2"
              >
                {brand}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
