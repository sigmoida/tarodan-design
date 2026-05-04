import { ShieldCheck, Repeat, Truck, Headphones } from 'lucide-react'
import { INFO_STRIP } from '@/v2/data/mock'

const ICONS = [ShieldCheck, Repeat, Truck, Headphones]

export function InfoStrip() {
  return (
    <section className="v2-container mt-4">
      <div className="grid grid-cols-2 gap-4 rounded-v2-card bg-v2-surface p-6 sm:grid-cols-4 sm:p-8">
        {INFO_STRIP.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div key={item.title} className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="font-v2 text-[14px] font-medium text-v2-ink">
                  {item.title}
                </p>
                <p className="text-[12px] text-v2-muted">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
