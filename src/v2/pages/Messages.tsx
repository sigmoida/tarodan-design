import { useState } from 'react'
import { Search, Send, Phone, MoreHorizontal, Paperclip, BadgeCheck } from 'lucide-react'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { IconButton } from '../components/ui/IconButton'

type Convo = {
  id: string
  name: string
  preview: string
  time: string
  unread?: number
  online?: boolean
}

const CONVOS: Convo[] = [
  {
    id: '1',
    name: 'Cem Aslan',
    preview: 'Le Mans koleksiyonun harika, takas konuşalım mı?',
    time: '12:42',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Selin Ay',
    preview: 'Teklifini kabul ettim, kargo bilgilerini gönderiyorum.',
    time: '11:08',
    unread: 1,
  },
  {
    id: '3',
    name: 'Diecast Atölyesi',
    preview: 'Stokta var, hemen kargolayabiliriz.',
    time: 'Dün',
  },
  { id: '4', name: 'Burak Mert', preview: 'Teşekkürler!', time: 'Dün' },
  {
    id: '5',
    name: 'Tarodan Destek',
    preview: 'Talebin alındı, en kısa sürede dönüş yapacağız.',
    time: '2 gün',
  },
]

const MSGS = [
  { fromMe: false, text: 'Merhaba, McLaren MCL60 modelin hâlâ satılık mı?' },
  { fromMe: true, text: 'Selam! Evet, satılık. Sıfır kutusunda.' },
  { fromMe: false, text: 'Le Mans koleksiyonun harika, takas konuşalım mı?' },
  { fromMe: false, text: 'Elimde 2 adet Porsche 919 var, ikisini birden sana gönderebilirim.' },
  { fromMe: true, text: 'Çok ilgilendirici. Görüntülerini paylaşabilir misin?' },
]

export function Messages() {
  const [active, setActive] = useState(CONVOS[0].id)
  const activeConvo = CONVOS.find((c) => c.id === active)!

  return (
    <div className="v2-container pt-10">
      <header>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
          Mesajlar
        </p>
        <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink">
          Sohbetler
        </h1>
      </header>

      <div className="mt-8 grid h-[640px] gap-4 overflow-hidden rounded-v2-card-lg bg-v2-surface lg:grid-cols-[340px_1fr]">
        {/* Sidebar */}
        <aside className="flex flex-col border-r border-v2">
          <div className="p-4">
            <div className="flex items-center gap-2 rounded-v2-pill bg-v2-bg p-1.5 pl-3">
              <Search className="h-4 w-4 text-v2-faint" />
              <input
                placeholder="Sohbet ara..."
                className="font-v2 h-9 flex-1 bg-transparent text-[13px] outline-none placeholder:text-v2-faint"
              />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto px-2 pb-2">
            {CONVOS.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setActive(c.id)}
                  className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-v2-card p-3 text-left transition-colors ${
                    active === c.id
                      ? 'bg-v2-bg'
                      : 'hover:bg-v2-bg/60'
                  }`}
                >
                  <span className="relative">
                    <Avatar size="md" fallback={c.name} />
                    {c.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-v2-surface bg-v2-success" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5">
                      <span className="font-v2 truncate text-[13px] font-medium text-v2-ink">
                        {c.name}
                      </span>
                      {c.id === '3' && <BadgeCheck className="h-3.5 w-3.5 text-v2-accent" />}
                    </span>
                    <span className="mt-0.5 line-clamp-1 text-[12px] text-v2-muted">
                      {c.preview}
                    </span>
                  </span>
                  <span className="flex flex-col items-end gap-1">
                    <span className="text-[11px] text-v2-faint">{c.time}</span>
                    {c.unread && (
                      <Badge variant="accent" size="sm" className="px-1.5 py-0 text-[10px]">
                        {c.unread}
                      </Badge>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Thread */}
        <section className="flex h-full flex-col bg-v2-bg">
          <header className="flex items-center justify-between border-b border-v2 px-6 py-4">
            <div className="flex items-center gap-3">
              <Avatar size="md" fallback={activeConvo.name} />
              <div>
                <p className="font-v2 text-[15px] font-medium text-v2-ink">
                  {activeConvo.name}
                </p>
                <p className="text-[12px] text-v2-muted">
                  {activeConvo.online ? 'Çevrimiçi' : 'Son görülme: 14 dk önce'}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <IconButton variant="ghost" size="sm">
                <Phone />
              </IconButton>
              <IconButton variant="ghost" size="sm">
                <MoreHorizontal />
              </IconButton>
            </div>
          </header>

          <ul className="flex-1 space-y-3 overflow-y-auto px-6 py-6">
            {MSGS.map((m, i) => (
              <li
                key={i}
                className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-v2-card px-4 py-3 text-[14px] leading-relaxed ${
                    m.fromMe
                      ? 'bg-v2-ink text-v2-on-ink'
                      : 'bg-v2-surface text-v2-ink'
                  }`}
                >
                  {m.text}
                </div>
              </li>
            ))}
          </ul>

          <footer className="border-t border-v2 p-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-v2-pill bg-v2-surface p-1.5 pl-2"
            >
              <IconButton type="button" variant="ghost" size="sm">
                <Paperclip />
              </IconButton>
              <input
                placeholder="Mesaj yaz..."
                className="font-v2 h-10 flex-1 bg-transparent text-[14px] outline-none placeholder:text-v2-faint"
              />
              <button
                type="submit"
                className="font-v2 inline-flex h-10 items-center gap-1.5 rounded-v2-pill bg-v2-ink px-4 text-[14px] font-medium text-v2-on-ink"
              >
                Gönder
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </footer>
        </section>
      </div>
    </div>
  )
}
