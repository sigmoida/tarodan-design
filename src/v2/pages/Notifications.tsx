import { Bell, Heart, MessageSquare, Package, Repeat, Tag } from 'lucide-react'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

type Notif = {
  type: 'order' | 'message' | 'swap' | 'price' | 'like' | 'system'
  title: string
  body: string
  time: string
  unread?: boolean
  actor?: string
}

const NOTIFS: Notif[] = [
  {
    type: 'order',
    title: 'Siparişin yola çıktı',
    body: 'TRD-2024-48172 numaralı siparişin kargoya verildi. 1-3 iş günü içinde teslim edilecek.',
    time: '12 dk',
    unread: true,
  },
  {
    type: 'message',
    title: 'Cem Aslan mesaj attı',
    body: '"Le Mans koleksiyonun harika, takas konuşalım mı?"',
    time: '34 dk',
    unread: true,
    actor: 'Cem Aslan',
  },
  {
    type: 'swap',
    title: 'Takas teklifin kabul edildi',
    body: 'Selin Ay, McLaren MCL60 modelin için yaptığın teklifi kabul etti.',
    time: '2 sa',
    unread: true,
    actor: 'Selin Ay',
  },
  {
    type: 'price',
    title: 'Fiyat düştü',
    body: 'Favorilerindeki "AutoArt Lamborghini Diablo SE30" %15 indirimde.',
    time: '5 sa',
  },
  {
    type: 'like',
    title: 'İlanını beğendiler',
    body: '14 kişi son 24 saatte "Hot Wheels Premium" ilanını beğendi.',
    time: 'Dün',
    actor: 'Topluluk',
  },
  {
    type: 'system',
    title: 'Üyeliğin yenilendi',
    body: 'Tarodan Premium üyeliğin başarıyla yenilendi.',
    time: '3 gün',
  },
]

const ICON_MAP = {
  order: Package,
  message: MessageSquare,
  swap: Repeat,
  price: Tag,
  like: Heart,
  system: Bell,
} as const

export function Notifications() {
  const unread = NOTIFS.filter((n) => n.unread).length
  return (
    <div className="v2-container pt-10">
      <header className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-v2-muted">
            Bildirimler
          </p>
          <h1 className="font-v2 mt-2 text-[44px] font-medium leading-tight tracking-tight text-v2-ink sm:text-[56px]">
            Etkinlik akışı
            {unread > 0 && (
              <Badge variant="accent" className="ml-3 align-middle text-[14px]">
                {unread} okunmamış
              </Badge>
            )}
          </h1>
        </div>
        <button className="font-v2 text-[14px] text-v2-muted underline-offset-4 hover:text-v2-ink hover:underline">
          Tümünü okundu işaretle
        </button>
      </header>

      <Tabs defaultValue="hepsi" className="mt-10">
        <TabsList>
          <TabsTrigger value="hepsi">Hepsi</TabsTrigger>
          <TabsTrigger value="siparis">Siparişler</TabsTrigger>
          <TabsTrigger value="takas">Takaslar</TabsTrigger>
          <TabsTrigger value="mesaj">Mesajlar</TabsTrigger>
          <TabsTrigger value="topluluk">Topluluk</TabsTrigger>
        </TabsList>
        <TabsContent value="hepsi">
          <ul className="space-y-2">
            {NOTIFS.map((n, i) => {
              const Icon = ICON_MAP[n.type]
              return (
                <li
                  key={i}
                  className={`grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-v2-card p-5 transition-colors ${
                    n.unread ? 'bg-v2-surface' : 'bg-v2-bg border border-v2'
                  }`}
                >
                  {n.actor ? (
                    <Avatar size="md" fallback={n.actor} />
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <div>
                    <p className="font-v2 text-[15px] font-medium text-v2-ink">
                      {n.title}
                      {n.unread && (
                        <span className="ml-2 inline-block h-2 w-2 rounded-full bg-v2-accent" />
                      )}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-v2-muted">
                      {n.body}
                    </p>
                  </div>
                  <span className="text-[12px] text-v2-faint">{n.time}</span>
                </li>
              )
            })}
          </ul>
        </TabsContent>
        <TabsContent value="siparis">
          <p className="text-[14px] text-v2-muted">Yalnızca sipariş bildirimleri.</p>
        </TabsContent>
        <TabsContent value="takas">
          <p className="text-[14px] text-v2-muted">Yalnızca takas bildirimleri.</p>
        </TabsContent>
        <TabsContent value="mesaj">
          <p className="text-[14px] text-v2-muted">Yalnızca mesaj bildirimleri.</p>
        </TabsContent>
        <TabsContent value="topluluk">
          <p className="text-[14px] text-v2-muted">Topluluk etkileşimleri.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
