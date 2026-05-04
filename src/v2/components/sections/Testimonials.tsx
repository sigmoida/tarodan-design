import { TESTIMONIALS } from '@/v2/data/mock'
import { Avatar } from '../ui/Avatar'
import { Rating } from '../ui/Rating'
import { QuoteMark } from '../ui/QuoteMark'
import { SectionHeader } from '../ui/SectionHeader'

export function Testimonials() {
  return (
    <section className="v2-container mt-24">
      <SectionHeader
        eyebrow="Topluluğumuzdan"
        title="Koleksiyonerler ne diyor?"
        subtitle="Tarodan'ı kullanan koleksiyoner ve satıcıların deneyimleri."
        align="center"
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="flex gap-5">
            <div className="shrink-0 pt-3">
              <Avatar size="lg" fallback={t.name} />
            </div>
            <div className="flex-1 rounded-v2-card-lg bg-v2-surface p-7">
              <QuoteMark className="h-6 w-8" />
              <p className="font-v2 mt-3 text-[16px] leading-relaxed text-v2-ink">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-v2 text-[14px] font-medium text-v2-ink">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-v2-muted">{t.role}</p>
                </div>
                <Rating value={t.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
