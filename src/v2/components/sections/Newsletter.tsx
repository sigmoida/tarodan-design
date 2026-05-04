import { ArrowUpRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="v2-container mt-24">
      <div className="relative overflow-hidden rounded-v2-card-lg bg-v2-surface p-10 sm:p-16">
        {/* Soft mosaic background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-0 grid grid-cols-8 gap-3 p-6 opacity-[0.18]"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-v2-sm bg-v2-bg"
              style={{
                opacity: ((i * 13) % 7) / 9,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Haberdar ol
          </span>
          <h2 className="font-v2 mt-3 text-[36px] font-medium leading-[1.1] tracking-tight text-v2-ink sm:text-[44px]">
            Bültene katıl, %15 indirim<br /> ilk siparişine senin olsun
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-v2-muted">
            Yeni gelenler, özel kampanyalar ve koleksiyon ipuçları haftada bir
            mailbox'unda.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-v2-pill bg-v2-bg p-1.5 pl-5"
          >
            <input
              type="email"
              placeholder="E-posta adresin"
              className="font-v2 h-11 flex-1 bg-transparent text-[14px] text-v2-ink placeholder:text-v2-faint outline-none"
            />
            <button
              type="submit"
              className="font-v2 inline-flex h-11 items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft"
            >
              Abone ol
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
