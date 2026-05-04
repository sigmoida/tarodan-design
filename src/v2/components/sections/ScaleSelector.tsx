import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SCALES } from '@/v2/data/mock'

export function ScaleSelector() {
  return (
    <section className="v2-container mt-24">
      <div className="grid gap-4 md:grid-cols-3">
        {SCALES.map((s, i) => (
          <Link
            key={s.value}
            to={`/v2/ilanlar?olcek=${s.value}`}
            className="group relative flex flex-col rounded-v2-card-lg bg-v2-surface p-8 transition-colors hover:bg-v2-surface-2"
          >
            <span className="font-v2 text-[80px] font-medium leading-none tracking-tighter text-v2-ink/[0.12]">
              0{i + 1}
            </span>
            <h3 className="font-v2 mt-2 text-[28px] font-medium leading-tight tracking-tight text-v2-ink">
              {s.label}
            </h3>
            <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-v2-muted">
              {s.description}
            </p>
            <span className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-transform group-hover:rotate-12">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
