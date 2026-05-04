import featuredMclaren from '@/assets/v2/featured-mclaren.jpeg'
import carSilver from '@/assets/v2/car-silver.png'
import train from '@/assets/v2/train.png'
import truck from '@/assets/v2/truck.png'
import motorcycles from '@/assets/v2/motorcycles.png'

export const IMG = {
  featuredMclaren,
  carSilver,
  train,
  truck,
  motorcycles,
}

export type Category = {
  slug: string
  title: string
  description: string
  image: string
  itemCount: number
  size?: 'lg' | 'md' | 'sm'
}

export const CATEGORIES: Category[] = [
  {
    slug: 'arabalar',
    title: 'Arabalar',
    description: 'Binlerce marka ve modelde arabayı keşfedin',
    image: featuredMclaren,
    itemCount: 12_480,
    size: 'lg',
  },
  {
    slug: 'motorsikletler',
    title: 'Motorsikletler',
    description: 'Yarışlardan sokaklara farklı marka ve modeller',
    image: motorcycles,
    itemCount: 1_240,
    size: 'md',
  },
  {
    slug: 'is-makineleri',
    title: 'İş Makineleri',
    description: 'Vinç, kamyon, traktör — endüstri klasikleri',
    image: truck,
    itemCount: 632,
    size: 'md',
  },
  {
    slug: 'trenler-ucaklar',
    title: 'Trenler & Uçaklar',
    description: 'Ray ve gökyüzü tutkunları için',
    image: train,
    itemCount: 384,
    size: 'md',
  },
]

export type Product = {
  id: string
  title: string
  brand: string
  scale: '1:18' | '1:24' | '1:43' | '1:50' | '1:64'
  price: number
  oldPrice?: number
  image: string
  badge?: 'POPÜLER' | 'YENİ' | 'INDIRIM'
  swap?: boolean
  rating?: number
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'McLaren MCL60 — Lando Norris #4',
    brand: 'Bburago',
    scale: '1:18',
    price: 1249,
    oldPrice: 1499,
    image: featuredMclaren,
    badge: 'POPÜLER',
    rating: 4.9,
  },
  {
    id: 'p2',
    title: 'Classic Silver Coupe Heritage Edition',
    brand: 'AutoArt',
    scale: '1:18',
    price: 2890,
    image: carSilver,
    badge: 'YENİ',
    rating: 4.7,
  },
  {
    id: 'p3',
    title: 'Diesel Locomotive 2526 — Bicentennial',
    brand: 'Athearn',
    scale: '1:43',
    price: 1690,
    image: train,
    rating: 4.6,
  },
  {
    id: 'p4',
    title: 'Scania G500 Roll-Off Tipper',
    brand: 'Siku',
    scale: '1:50',
    price: 899,
    image: truck,
    swap: true,
    rating: 4.5,
  },
  {
    id: 'p5',
    title: 'MotoGP Trio Set — Rossi · Marquez · Stoner',
    brand: 'Maisto',
    scale: '1:18',
    price: 749,
    oldPrice: 899,
    image: motorcycles,
    badge: 'INDIRIM',
    rating: 4.8,
  },
  {
    id: 'p6',
    title: 'McLaren F1 Test Day Limited',
    brand: 'Minichamps',
    scale: '1:43',
    price: 2450,
    image: featuredMclaren,
    rating: 4.9,
  },
]

export const BRANDS = [
  'Hot Wheels',
  'Tomica',
  'Maisto',
  'Bburago',
  'Greenlight',
  'Kyosho',
  'AutoArt',
  'Minichamps',
  'Solido',
  'Norev',
  'Spark',
  'Schuco',
] as const

export type Collection = {
  slug: string
  title: string
  description: string
  itemCount: number
  cover: string
  curator: string
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'jdm-efsaneleri',
    title: 'JDM Efsaneleri',
    description: 'Japon klasiklerinin en seçkin parçaları',
    itemCount: 32,
    cover: carSilver,
    curator: 'Burak Mert',
  },
  {
    slug: 'le-mans-yariscilari',
    title: 'Le Mans Yarışçıları',
    description: '24 saat dayanıklılığın efsane modelleri',
    itemCount: 28,
    cover: featuredMclaren,
    curator: 'Cem Aslan',
  },
  {
    slug: 'amerikan-muscle',
    title: 'American Muscle',
    description: 'Amerikan kas arabalarının en güzel temsilleri',
    itemCount: 21,
    cover: train,
    curator: 'Deniz Toprak',
  },
]

export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  cover: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'olcek-rehberi',
    title: 'Diecast Ölçek Rehberi: 1:18, 1:43, 1:64 farkları',
    excerpt:
      'Hangi ölçek vitrininiz için doğru tercih? Boyut, fiyat ve detay seviyesi karşılaştırması.',
    date: '12 Nisan',
    cover: carSilver,
  },
  {
    slug: 'koleksiyon-saklama',
    title: 'Koleksiyonunuzu uzun ömürlü saklamanın 7 yolu',
    excerpt:
      'Toz, ışık, nem ve kutu seçimi — diecast modeller için doğru saklama koşulları.',
    date: '3 Nisan',
    cover: motorcycles,
  },
  {
    slug: 'takas-101',
    title: 'Takas 101: Tarodan üzerinde güvenli takasın püf noktaları',
    excerpt:
      'Üç aşamalı kontrol süreciyle takasta neyi nasıl değerlendirmelisiniz?',
    date: '28 Mart',
    cover: truck,
  },
]

export type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmet Kara',
    role: 'Klasik Ferrari koleksiyoneri',
    quote:
      'Tarodan sayesinde 90\'larda hayalini kurduğum 1:18 F40\'ı buldum. Satıcı doğrulama süreci güven verici, kargo süreci hızlıydı.',
    rating: 5,
  },
  {
    name: 'Selin Yılmaz',
    role: 'Yarış severi',
    quote:
      'Takas özelliği bence platformun en güzel yanı. Üç aşamalı kontrol gerçekten işe yarıyor — iki takasım da sorunsuz tamamlandı.',
    rating: 5,
  },
]

export type WeeklySpotlight = {
  type: 'collector' | 'shop'
  name: string
  subtitle: string
  badge?: string
  stats: { label: string; value: string }[]
  thumbs: string[]
}

export const WEEKLY: WeeklySpotlight[] = [
  {
    type: 'collector',
    name: 'Mustafa Yılmaz',
    subtitle: 'Klasik İtalyan & JDM koleksiyoneri',
    badge: 'Bu Hafta',
    stats: [
      { label: 'İlan', value: '84' },
      { label: 'Satış', value: '14' },
      { label: 'Görüntü', value: '12.4K' },
      { label: 'Beğeni', value: '1.2K' },
    ],
    thumbs: [carSilver, featuredMclaren, motorcycles],
  },
  {
    type: 'shop',
    name: 'Diecast Atölyesi',
    subtitle: 'Premium ve RLC modeller',
    badge: 'Onaylı',
    stats: [
      { label: 'Ürün', value: '2.481' },
      { label: 'Satış', value: '1.842' },
      { label: 'Görüntü', value: '248K' },
      { label: 'Beğeni', value: '24.6K' },
    ],
    thumbs: [carSilver, featuredMclaren, train],
  },
]

export const SCALES = [
  {
    label: '1:18 Premium',
    value: '1:18',
    description: 'Vitrin ve sergi için ideal büyüklük',
  },
  {
    label: '1:43 Detaylı',
    value: '1:43',
    description: 'Koleksiyonerler için detaylı boyut',
  },
  {
    label: '1:64 Hesaplı',
    value: '1:64',
    description: 'En popüler, en hesaplı boyut',
  },
] as const

export const INFO_STRIP = [
  { title: 'Güvenli alışveriş', description: 'SSL sertifikalı ödeme' },
  { title: 'Güvenli takas', description: '3 aşamalı kontrol' },
  { title: 'Hızlı kargo', description: 'Tüm Türkiye\'de' },
  { title: 'Müşteri Hizmetleri', description: 'Yardım ve destek' },
]
