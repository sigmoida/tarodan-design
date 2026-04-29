/** @format */

import { useState } from 'react';
import {
	ArrowLeft,
	BadgeCheck,
	BarChart3,
	Bell,
	Calendar,
	Clock,
	Check,
	CheckCircle2,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	CreditCard,
	Eye,
	FileText,
	Info,
	Flag,
	Globe,
	HeartHandshake,
	Heart,
	HelpCircle,
	ImagePlus,
	LayoutGrid,
	LifeBuoy,
	List,
	Lock,
	LogOut,
	Menu,
	MessageSquare,
	Package,
	Pencil,
	Phone,
	Plus,
	Repeat,
	Search,
	Settings,
	Share2,
	ShoppingCart,
	ShieldCheck,
	SlidersHorizontal,
	Sparkles,
	Star,
	Store,
	Tag,
	Trash2,
	Truck,
	User,
	UserPlus,
	Wallet,
	X,
	Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge, type BadgeVariant } from '@/components/ui/badge';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import logoUrl from '@/assets/tarodan-logo.png';
import logoDarkUrl from '@/assets/tarodan-logo-dark.png';
import logoLightUrl from '@/assets/tarodan-logo-light.png';

/* ------------------------------------------------------------------ */
/*  Boilerplate görsel — diecast/model car temalı stabil placeholder   */
/* ------------------------------------------------------------------ */
const placeholderImg = (seed: string, w: number, h: number = w) => {
	let lock = 5381;
	for (let i = 0; i < seed.length; i++) {
		lock = ((lock << 5) + lock + seed.charCodeAt(i)) | 0;
	}
	return `https://loremflickr.com/${w}/${h}/diecast,model,car,toy?lock=${Math.abs(
		lock,
	)}`;
};

/* ------------------------------------------------------------------ */
/*  Sahte veri                                                         */
/* ------------------------------------------------------------------ */
const popular = [
	{
		title: 'Bburago Ferrari F40 Limited Edition Diecast Model',
		price: '1.249',
		cents: '00',
		likes: '342',
		views: '2.1K',
		scale: '1:18',
		tone: 'from-primary-100 to-primary-50',
		popular: true,
	},
	{
		title: 'Maisto BMW M3 GTR — Need For Speed Most Wanted',
		price: '899',
		cents: '90',
		likes: '128',
		views: '984',
		scale: '1:24',
		tone: 'from-secondary-100 to-secondary-50',
	},
	{
		title: 'Hot Wheels Premium Lamborghini Aventador SVJ',
		price: '639',
		cents: '00',
		likes: '276',
		views: '1.5K',
		scale: '1:18',
		tone: 'from-primary-50 to-primary-100',
		popular: true,
	},
	{
		title: 'Kyosho Porsche 911 GT3 RS Carmine Red Detail',
		price: '2.490',
		cents: '00',
		likes: '198',
		views: '1.3K',
		scale: '1:18',
		tone: 'from-neutral-100 to-neutral-50',
	},
	{
		title: 'Tomica Toyota Supra A90 Pearl White',
		price: '189',
		cents: '00',
		likes: '84',
		views: '612',
		scale: '1:64',
		tone: 'from-secondary-50 to-primary-50',
	},
];

const discounted = [
	{
		title: 'Greenlight Ford Mustang Boss 429 1969 Collector',
		price: '1.690',
		cents: '00',
		likes: '156',
		views: '1.1K',
		scale: '1:18',
		tone: 'from-primary-50 to-neutral-100',
	},
	{
		title: 'Welly Mercedes-Benz SLR McLaren Roadster',
		price: '549',
		cents: '00',
		likes: '92',
		views: '768',
		scale: '1:18',
		tone: 'from-neutral-100 to-primary-50',
		popular: true,
	},
	{
		title: 'AUTOart Aston Martin DB11 Composite Edition',
		price: '4.250',
		cents: '00',
		likes: '412',
		views: '3.2K',
		scale: '1:18',
		tone: 'from-secondary-100 to-neutral-100',
	},
	{
		title: 'Maisto Audi RS6 Avant Performance Nardo Grey',
		price: '729',
		cents: '00',
		likes: '204',
		views: '1.4K',
		scale: '1:24',
		tone: 'from-primary-100 to-primary-200',
	},
	{
		title: 'Minichamps Bugatti Chiron Pur Sport Atlantic Blue',
		price: '5.890',
		cents: '00',
		likes: '538',
		views: '4.8K',
		scale: '1:18',
		tone: 'from-secondary-50 to-secondary-100',
		popular: true,
	},
];

const miniCategories = [
	{
		label: '1:18 Modeller',
		caption: 'Detaylı koleksiyon',
		tone: 'bg-gradient-to-br from-primary-300 to-primary-50',
		text: 'text-primary-900',
	},
	{
		label: '1:24 Modeller',
		caption: 'Klasik & güncel',
		tone: 'bg-gradient-to-br from-secondary-300 to-secondary-50',
		text: 'text-secondary-900',
	},
	{
		label: 'Vintage Diecast',
		caption: 'Nadide parçalar',
		tone: 'bg-gradient-to-br from-neutral-300 to-neutral-50',
		text: 'text-secondary-900',
	},
	{
		label: 'Aksesuar & Diorama',
		caption: 'Sahne kurmak için',
		tone: 'bg-gradient-to-br from-primary-200 to-secondary-50',
		text: 'text-primary-900',
	},
];

const brands = [
	{ name: 'HOT WHEELS', domain: 'hotwheels.com' },
	{ name: 'TOMICA', domain: 'takaratomy.co.jp' },
	{ name: 'MAISTO', domain: 'maisto.com' },
	{ name: 'BBURAGO', domain: 'bburago.com' },
	{ name: 'GREENLIGHT', domain: 'greenlightcollectibles.com' },
	{ name: 'KYOSHO', domain: 'kyosho.com' },
	{ name: 'AUTOART', domain: 'autoartmodels.com' },
	{ name: 'MINICHAMPS', domain: 'minichamps.de' },
];

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */
function Header({
	onHome,
	onToggleMenu,
	mobileMenuOpen,
	onCart,
	onCreateListing,
	onSwaps,
	onProfile,
	onFavorites,
	onMyListings,
	onNotifications,
	onOffers,
	onMembership,
	onSettings,
	onOrders,
	onMessages,
}: {
	onHome?: () => void;
	onToggleMenu?: () => void;
	mobileMenuOpen?: boolean;
	onCart?: () => void;
	onCreateListing?: () => void;
	onSwaps?: () => void;
	onProfile?: () => void;
	onFavorites?: () => void;
	onMyListings?: () => void;
	onNotifications?: () => void;
	onOffers?: () => void;
	onMembership?: () => void;
	onSettings?: () => void;
	onOrders?: () => void;
	onMessages?: () => void;
}) {
	const handleLogo = (e: React.MouseEvent) => {
		e.preventDefault();
		onHome?.();
	};

	return (
		<header>
			{/* Mobil: 2 satırlı (üst beyaz, alt primary) */}
			<div className='lg:hidden'>
				<div className='flex items-center gap-3 border-b border-neutral-100 bg-background px-4 py-3'>
					<button
						aria-label='Menüyü aç'
						onClick={onToggleMenu}
						className='grid size-9 shrink-0 place-items-center rounded-lg text-secondary-900 hover:bg-neutral-100'>
						{mobileMenuOpen ? (
							<X className='size-5' />
						) : (
							<Menu className='size-5' />
						)}
					</button>
					<a
						href='#'
						onClick={handleLogo}
						className='flex shrink-0 items-center'>
						<img
							src={logoDarkUrl}
							alt='Tarodan'
							className='h-9 w-auto rounded-lg'
						/>
					</a>
					<div className='ml-auto flex shrink-0 items-center gap-1'>
						<button
							aria-label='İlan Ver'
							onClick={onCreateListing}
							className='grid size-9 place-items-center rounded-lg bg-primary-500 text-primary-foreground transition hover:bg-primary-600 sm:hidden'>
							<Plus
								className='size-5'
								strokeWidth={2.6}
							/>
						</button>
						<Button
							size='lg'
							onClick={onCreateListing}
							className='hidden h-9 bg-primary-500 px-4 text-sm text-primary-foreground hover:bg-primary-600 sm:inline-flex md:h-10'>
							<Plus
								className='size-4'
								strokeWidth={2.6}
							/>{' '}
							İlan Ver
						</Button>
						<button
							aria-label='Bildirimler'
							onClick={onNotifications}
							className='relative grid size-9 place-items-center rounded-lg text-secondary-900 hover:bg-neutral-100'>
							<Bell className='size-5' />
							<span className='absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-md bg-primary-500 px-1 text-[10px] font-bold text-primary-foreground'>
								3
							</span>
						</button>
						<ProfileMenu
							onSwaps={onSwaps}
							onProfile={onProfile}
							onFavorites={onFavorites}
							onMyListings={onMyListings}
							onNotifications={onNotifications}
							onOffers={onOffers}
							onMembership={onMembership}
							onSettings={onSettings}
							onOrders={onOrders}
							onCart={onCart}
							onMessages={onMessages}
							trigger={
								<button
									aria-label='Profil'
									className='grid size-9 place-items-center rounded-lg text-secondary-900 hover:bg-neutral-100'>
									<User className='size-5' />
								</button>
							}
						/>
						<button
							aria-label='Sepet'
							onClick={onCart}
							className='relative grid size-9 place-items-center rounded-lg text-secondary-900 hover:bg-neutral-100'>
							<ShoppingCart className='size-5' />
							<span className='absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-md bg-primary-500 px-1 text-[10px] font-bold text-primary-foreground'>
								2
							</span>
						</button>
					</div>
				</div>
				<div className='bg-primary-500 px-4 py-3'>
					<div className='relative flex items-center text-secondary-900'>
						<Search className='pointer-events-none absolute left-4 size-4 text-neutral-400' />
						<Input
							placeholder='Marka, model veya anahtar kelime ara…'
							className='h-12 w-full rounded-lg border-0 bg-background pl-11 pr-4 text-base shadow-sm focus-visible:ring-0'
						/>
					</div>
				</div>
			</div>

			{/* Desktop: tek satır (primary bg) */}
			<div className='hidden bg-primary-500 text-primary-foreground lg:block'>
				<div className='mx-auto flex h-20 max-w-[1280px] items-center gap-6 px-6'>
					<a
						href='#'
						onClick={handleLogo}
						className='flex shrink-0 items-center'>
						<img
							src={logoUrl}
							alt='Tarodan'
							className='h-10 w-auto rounded-lg'
						/>
					</a>
					<div className='relative flex flex-1 items-center text-secondary-900'>
						<Search className='pointer-events-none absolute left-4 size-4 text-neutral-400' />
						<Input
							placeholder='Marka, model veya anahtar kelime ara…'
							className='h-12 w-full rounded-lg border-0 bg-background pl-11 pr-4 text-base shadow-sm focus-visible:ring-0'
						/>
					</div>
					<div className='flex shrink-0 items-center gap-1.5'>
						<Button
							size='lg'
							onClick={onCreateListing}
							className='h-11 bg-background px-5 text-primary-600 hover:bg-neutral-50'>
							<Plus
								className='size-4'
								strokeWidth={2.6}
							/>{' '}
							İlan Ver
						</Button>
						<button
							aria-label='Bildirimler'
							onClick={onNotifications}
							className='relative grid size-11 place-items-center rounded-lg text-primary-foreground hover:bg-background/15'>
							<Bell className='size-5' />
							<span className='absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-md bg-background px-1 text-[10px] font-bold text-primary-600'>
								3
							</span>
						</button>
						<ProfileMenu
							onSwaps={onSwaps}
							onProfile={onProfile}
							onFavorites={onFavorites}
							onMyListings={onMyListings}
							onNotifications={onNotifications}
							onOffers={onOffers}
							onMembership={onMembership}
							onSettings={onSettings}
							onOrders={onOrders}
							onCart={onCart}
							onMessages={onMessages}
							trigger={
								<button
									aria-label='Profil'
									className='grid size-11 place-items-center rounded-lg text-primary-foreground hover:bg-background/15'>
									<User className='size-5' />
								</button>
							}
						/>
						<button
							aria-label='Sepet'
							onClick={onCart}
							className='relative grid size-11 place-items-center rounded-lg text-primary-foreground hover:bg-background/15'>
							<ShoppingCart className='size-5' />
							<span className='absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-md bg-background px-1 text-[10px] font-bold text-primary-600'>
								2
							</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

/* ------------------------------------------------------------------ */
/*  Alt nav                                                            */
/* ------------------------------------------------------------------ */
const subNavCategoryGroups: { title: string; items: string[] }[] = [
	{
		title: 'Araç Türleri',
		items: [
			'Araba',
			'Motosiklet',
			'Uçak',
			'Gemi',
			'Tren',
			'Kamyon / İş Makinesi',
			'Motorspor',
			'Set / Diğer',
		],
	},
	{
		title: 'Üreticiler',
		items: [
			'AUTOart',
			'Bburago',
			'CMC',
			'ERTL',
			'Greenlight',
			'GT Spirit',
			'Hot Wheels',
			'Kyosho',
			'Maisto',
			'Majorette',
			'Matchbox',
			'MINI GT',
			'Minichamps',
			'Norev',
			'Oxford Diecast',
			'Schuco',
			'Spark',
			'Tamiya',
			'Tomica',
			'Welly',
		],
	},
];

const subNavScales = [
	'1:8',
	'1:12',
	'1:18',
	'1:24',
	'1:32',
	'1:43',
	'1:64',
	'1:87',
	'1:144',
	'1:160',
];

function SubNav({
	onListing,
	onCollections,
	onManufacturers,
	mobileOpen,
	onCloseMobile,
}: {
	onListing?: () => void;
	onCollections?: () => void;
	onManufacturers?: () => void;
	mobileOpen?: boolean;
	onCloseMobile?: () => void;
}) {
	const allLinks: {
		label: string;
		onClick?: () => void;
		hasChevron?: boolean;
	}[] = [
		{ label: 'Kategoriler', onClick: onListing, hasChevron: true },
		{ label: 'Ölçek', onClick: onListing, hasChevron: true },
		{ label: 'Koleksiyonlar', onClick: onCollections },
		{ label: 'Üreticiler', onClick: onManufacturers },
	];
	return (
		<>
			{/* Desktop sub-nav */}
			<div className='hidden border-b border-neutral-100 bg-background lg:block'>
				<div className='mx-auto flex h-12 max-w-[1280px] items-center justify-between gap-4 px-6 text-sm'>
					<nav className='flex items-center gap-1'>
						<Popover>
							<PopoverTrigger asChild>
								<button className='flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-secondary-900 transition hover:bg-neutral-100 data-[state=open]:bg-neutral-100 data-[state=open]:text-primary-600'>
									Kategoriler{' '}
									<ChevronDown className='size-4 transition data-[state=open]:rotate-180' />
								</button>
							</PopoverTrigger>
							<PopoverContent
								align='start'
								sideOffset={8}
								className='w-[820px] max-w-[calc(100vw-2rem)] p-0'>
								<div className='grid grid-cols-2 divide-x divide-neutral-200'>
									{subNavCategoryGroups.map((g) => (
										<div
											key={g.title}
											className='space-y-3 p-5'>
											<h3 className='flex items-center gap-2 text-base font-bold text-secondary-900'>
												<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
												{g.title}
											</h3>
											<ul className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm'>
												{g.items.map((it) => (
													<li key={it}>
														<button
															type='button'
															onClick={onListing}
															className='block w-full whitespace-nowrap rounded-md px-1.5 py-1 text-left font-medium text-secondary-900 transition hover:bg-primary-50 hover:text-primary-600'>
															{it}
														</button>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
								<div className='border-t border-neutral-200 p-4'>
									<button
										type='button'
										onClick={onListing}
										className='inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition hover:text-primary-700'>
										Tüm İlanları Gör <ChevronRight className='size-4' />
									</button>
								</div>
							</PopoverContent>
						</Popover>
						<Popover>
							<PopoverTrigger asChild>
								<button className='flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-secondary-900 transition hover:bg-neutral-100 data-[state=open]:bg-neutral-100 data-[state=open]:text-primary-600'>
									Ölçek{' '}
									<ChevronDown className='size-4 transition data-[state=open]:rotate-180' />
								</button>
							</PopoverTrigger>
							<PopoverContent
								align='start'
								sideOffset={8}
								className='w-64 space-y-3 p-5'>
								<h3 className='flex items-center gap-2 text-base font-bold text-secondary-900'>
									<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
									Ölçekler
								</h3>
								<div className='grid grid-cols-2 gap-1'>
									{subNavScales.map((s) => (
										<button
											key={s}
											type='button'
											onClick={onListing}
											className='rounded-md px-3 py-2 text-left text-sm font-semibold text-secondary-900 transition hover:bg-primary-50 hover:text-primary-600'>
											{s}
										</button>
									))}
								</div>
							</PopoverContent>
						</Popover>
					</nav>
					<nav className='flex items-center gap-1'>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onCollections?.();
							}}
							className='whitespace-nowrap rounded-lg px-3 py-2 font-medium text-secondary-900 hover:bg-neutral-100 hover:text-primary-600'>
							Koleksiyonlar
						</a>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onManufacturers?.();
							}}
							className='whitespace-nowrap rounded-lg px-3 py-2 font-medium text-secondary-900 hover:bg-neutral-100 hover:text-primary-600'>
							Üreticiler
						</a>
					</nav>
				</div>
			</div>

			{/* Mobile drawer (hamburger açıldığında) */}
			{mobileOpen ? (
				<div className='border-b border-neutral-100 bg-background lg:hidden'>
					<nav className='mx-auto flex max-w-[1280px] flex-col px-2 py-2 text-sm'>
						<details className='group'>
							<summary className='flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-secondary-900 transition hover:bg-neutral-100 hover:text-primary-600 marker:hidden [&::-webkit-details-marker]:hidden'>
								<span>Kategoriler</span>
								<ChevronDown className='size-4 text-neutral-400 transition group-open:rotate-180' />
							</summary>
							<div className='space-y-4 px-3 pb-3 pt-1'>
								{subNavCategoryGroups.map((g) => (
									<div
										key={g.title}
										className='space-y-2'>
										<h3 className='flex items-center gap-2 text-sm font-bold text-secondary-900'>
											<span className='inline-block h-4 w-1 rounded-full bg-primary-500' />
											{g.title}
										</h3>
										<ul className='grid grid-cols-2 gap-x-3 gap-y-1.5'>
											{g.items.map((it) => (
												<li key={it}>
													<button
														type='button'
														onClick={() => {
															onListing?.();
															onCloseMobile?.();
														}}
														className='block w-full rounded-md px-2 py-1 text-left text-sm font-medium text-secondary-900 transition hover:bg-primary-50 hover:text-primary-600'>
														{it}
													</button>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</details>
						<details className='group'>
							<summary className='flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-secondary-900 transition hover:bg-neutral-100 hover:text-primary-600 marker:hidden [&::-webkit-details-marker]:hidden'>
								<span>Ölçek</span>
								<ChevronDown className='size-4 text-neutral-400 transition group-open:rotate-180' />
							</summary>
							<div className='space-y-2 px-3 pb-3 pt-1'>
								<h3 className='flex items-center gap-2 text-sm font-bold text-secondary-900'>
									<span className='inline-block h-4 w-1 rounded-full bg-primary-500' />
									Ölçekler
								</h3>
								<div className='grid grid-cols-3 gap-1'>
									{subNavScales.map((s) => (
										<button
											key={s}
											type='button'
											onClick={() => {
												onListing?.();
												onCloseMobile?.();
											}}
											className='rounded-md px-2 py-1.5 text-center text-sm font-semibold text-secondary-900 transition hover:bg-primary-50 hover:text-primary-600'>
											{s}
										</button>
									))}
								</div>
							</div>
						</details>
						{allLinks
							.filter((l) => !l.hasChevron)
							.map((l) => (
								<button
									key={l.label}
									onClick={() => {
										l.onClick?.();
										onCloseMobile?.();
									}}
									className='flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-secondary-900 transition hover:bg-neutral-100 hover:text-primary-600'>
									<span>{l.label}</span>
									<ChevronRight className='size-4 text-neutral-400' />
								</button>
							))}
					</nav>
				</div>
			) : null}
		</>
	);
}

/* ------------------------------------------------------------------ */
/*  Mini kategori kartları                                             */
/* ------------------------------------------------------------------ */
function CategoryCards() {
	return (
		<section className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
			{miniCategories.map((c) => (
				<a
					key={c.label}
					href='#'
					className={`group flex flex-col gap-1 rounded-2xl ${c.tone} p-5 transition hover:scale-[1.02] sm:p-6`}>
					<div
						className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${c.text}`}>
						{c.label}
					</div>
					<div className='text-xs font-medium text-secondary-900/60 sm:text-sm'>
						{c.caption}
					</div>
				</a>
			))}
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  Ürün kartı (border yok, büyük tipografi)                           */
/* ------------------------------------------------------------------ */
type Product = (typeof popular)[number];

function ProductCard({
	p,
	onSelect,
	favorited = false,
	onToggleFavorite,
}: {
	p: Product;
	onSelect?: () => void;
	favorited?: boolean;
	onToggleFavorite?: () => void;
}) {
	return (
		<a
			href='#'
			onClick={(e) => {
				e.preventDefault();
				onSelect?.();
			}}
			className='group flex flex-col gap-3 rounded-2xl bg-neutral-50 p-3 transition hover:bg-neutral-100'>
			<div
				className={`relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${p.tone}`}>
				<img
					src={placeholderImg(`product-${p.title}`, 600)}
					alt={p.title}
					loading='lazy'
					className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.04]'
				/>
				{p.popular ? (
					<Badge
						variant='dark'
						className='absolute left-2 top-2 sm:left-3 sm:top-3'>
						Popüler
					</Badge>
				) : null}
				<button
					aria-label={favorited ? 'Favoriden kaldır' : 'Favori'}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						onToggleFavorite?.();
					}}
					className={`absolute right-2 top-2 grid size-8 place-items-center rounded-lg bg-background/90 shadow-sm transition sm:right-3 sm:top-3 sm:size-9 ${
						favorited
							? 'text-primary-500 hover:text-primary-600'
							: 'text-secondary-900 hover:text-primary-600'
					}`}>
					<Heart className={`size-4 ${favorited ? 'fill-primary-500' : ''}`} />
				</button>
				<Badge
					variant='surface'
					className='absolute bottom-2 left-2 sm:bottom-3 sm:left-3'>
					{p.scale}
				</Badge>
			</div>

			<div className='space-y-1.5 px-1 pb-1'>
				<div className='flex items-center gap-3 text-[11px] font-semibold text-neutral-500 sm:text-xs'>
					<span className='flex items-center gap-1'>
						<Heart className='size-3 text-primary-500 sm:size-3.5' />
						{p.likes}
					</span>
					<span className='flex items-center gap-1'>
						<Eye className='size-3 text-secondary-900 sm:size-3.5' />
						{p.views}
					</span>
				</div>
				<h3 className='line-clamp-2 text-sm font-semibold leading-snug text-secondary-900 group-hover:text-primary-600 sm:text-base md:text-[17px]'>
					{p.title}
				</h3>
				<div className='flex items-baseline gap-1 pt-1'>
					<span className='text-xl font-extrabold text-secondary-900 sm:text-2xl'>
						₺{p.price}
					</span>
					<span className='text-sm font-semibold text-neutral-500 sm:text-base'>
						,{p.cents}
					</span>
				</div>
			</div>
		</a>
	);
}

/* ------------------------------------------------------------------ */
/*  Product row — yatay (list) görünüm                                 */
/* ------------------------------------------------------------------ */
function ProductRow({ p, onSelect }: { p: Product; onSelect?: () => void }) {
	const brand = p.title.split(' ')[0].toUpperCase();
	return (
		<a
			href='#'
			onClick={(e) => {
				e.preventDefault();
				onSelect?.();
			}}
			className='group grid gap-5 rounded-2xl p-3 transition hover:bg-neutral-50 sm:grid-cols-[200px_1fr_220px]'>
			{/* Görsel */}
			<div
				className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${p.tone}`}>
				<img
					src={placeholderImg(`product-${p.title}`, 600)}
					alt={p.title}
					loading='lazy'
					className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.04]'
				/>
				{p.popular ? (
					<Badge
						variant='dark'
						className='absolute left-2.5 top-2.5'>
						Popüler
					</Badge>
				) : null}
				<button
					aria-label='Favori'
					onClick={(e) => e.preventDefault()}
					className='absolute right-2.5 top-2.5 grid size-9 place-items-center rounded-lg bg-background text-secondary-900 shadow-sm transition hover:text-primary-600'>
					<Heart className='size-4' />
				</button>
				<Badge
					variant='surface'
					className='absolute bottom-2.5 left-2.5'>
					{p.scale}
				</Badge>
			</div>

			{/* Meta + başlık + açıklama */}
			<div className='flex min-w-0 flex-col gap-1.5'>
				<div className='text-xs font-bold uppercase tracking-wider text-neutral-500'>
					{brand}
				</div>
				<h3 className='line-clamp-2 text-lg font-semibold leading-snug text-secondary-900 group-hover:text-primary-600 sm:text-xl'>
					{p.title}
				</h3>
				<div className='text-sm text-neutral-500'>
					{p.scale} · 248 parça · 2024
				</div>
				<div className='flex items-center gap-3 text-xs font-semibold text-neutral-500'>
					<span className='flex items-center gap-1'>
						<Heart className='size-3.5 text-primary-500' /> {p.likes}
					</span>
					<span>·</span>
					<span className='flex items-center gap-1'>
						<Eye className='size-3.5 text-secondary-900' /> {p.views}
					</span>
				</div>
				<p className='mt-1 line-clamp-2 max-w-2xl text-sm text-neutral-600'>
					Orijinal kutusunda, koleksiyoner kalitesinde detaylı diecast model. Az
					kullanılmış, mükemmel durumda. Tüm aksesuarlarıyla birlikte gelir.
				</p>
			</div>

			{/* Fiyat + aksiyonlar */}
			<div className='flex flex-col gap-3 sm:items-end'>
				<div className='sm:text-right'>
					<div className='flex items-baseline gap-1 sm:justify-end'>
						<span className='text-3xl font-extrabold text-secondary-900'>
							₺{p.price}
						</span>
						<span className='text-lg font-semibold text-neutral-500'>
							,{p.cents}
						</span>
					</div>
					<div className='text-xs text-neutral-400 line-through'>₺1.499,00</div>
				</div>
				<span className='inline-flex w-fit items-center gap-1 rounded-md bg-success-50 px-2 py-1 text-xs font-semibold text-success-700'>
					<Check
						className='size-3'
						strokeWidth={3}
					/>{' '}
					Stokta
				</span>
			</div>
		</a>
	);
}

function ProductSection({
	title,
	items,
	onSelect,
}: {
	title: string;
	items: Product[];
	onSelect?: () => void;
}) {
	return (
		<section className='space-y-6'>
			<div className='flex items-end justify-between gap-4'>
				<h2 className='font-display text-xl font-bold tracking-tight text-secondary-900 sm:text-2xl md:text-3xl'>
					{title}
				</h2>
				<a
					href='#'
					className='flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700'>
					Tümünü gör <ChevronRight className='size-4' />
				</a>
			</div>
			<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5'>
				{items.map((p) => (
					<ProductCard
						key={p.title}
						p={p}
						onSelect={onSelect}
					/>
				))}
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  En İyi Koleksiyonlar                                               */
/* ------------------------------------------------------------------ */
type Collection = {
	name: string;
	count: number;
	owner: string;
	desc: string;
	swap?: boolean;
	category: 'Otomobil' | 'Motosiklet' | 'Tema' | 'Vintage' | 'Karışık';
	tones: string[];
	cover: string;
	likes: string;
	views: string;
};

const collections: Collection[] = [
	{
		name: 'Klasik Ferrari Serisi',
		count: 24,
		owner: 'Ahmet Kara',
		desc: 'Yıllar içinde topladığım nadide Ferrari diecast modelleri',
		swap: true,
		category: 'Otomobil',
		cover: 'from-primary-200 via-primary-100 to-primary-50',
		likes: '1.2K',
		views: '8.4K',
		tones: [
			'from-primary-200 to-primary-100',
			'from-primary-100 to-primary-50',
			'from-neutral-100 to-primary-50',
		],
	},
	{
		name: 'JDM Efsaneleri',
		count: 18,
		owner: 'Burak Mert',
		desc: 'Japon klasiklerinin en seçkin parçaları bir arada',
		category: 'Otomobil',
		cover: 'from-secondary-200 via-secondary-100 to-secondary-50',
		likes: '845',
		views: '5.2K',
		tones: [
			'from-secondary-200 to-secondary-100',
			'from-secondary-100 to-secondary-50',
			'from-neutral-100 to-secondary-50',
		],
	},
	{
		name: 'Le Mans Yarışçıları',
		count: 32,
		owner: 'Cem Aslan',
		desc: 'Le Mans 24 saat yarışından efsane modeller',
		swap: true,
		category: 'Tema',
		cover: 'from-neutral-200 via-neutral-100 to-secondary-50',
		likes: '512',
		views: '3.1K',
		tones: [
			'from-neutral-200 to-neutral-100',
			'from-primary-100 to-neutral-100',
			'from-secondary-100 to-neutral-100',
		],
	},
	{
		name: 'American Muscle',
		count: 15,
		owner: 'Deniz Toprak',
		desc: 'Amerikan kas arabalarının en güzel temsilcileri',
		category: 'Otomobil',
		cover: 'from-primary-200 via-primary-100 to-secondary-50',
		likes: '234',
		views: '1.4K',
		tones: [
			'from-primary-100 to-secondary-100',
			'from-primary-50 to-primary-100',
			'from-secondary-50 to-primary-50',
		],
	},
	{
		name: 'Premium 1:18 Vitrinim',
		count: 28,
		owner: 'Mustafa Yılmaz',
		desc: 'Vitrinimde sergilediğim premium 1:18 ölçek koleksiyonu',
		category: 'Karışık',
		cover: 'from-primary-200 via-primary-100 to-secondary-100',
		likes: '1.8K',
		views: '12K',
		tones: [
			'from-primary-300 to-primary-200',
			'from-secondary-200 to-secondary-50',
			'from-neutral-200 to-primary-100',
		],
	},
	{
		name: 'Vintage Hazinelerim',
		count: 19,
		owner: 'Furkan Yıldız',
		desc: 'Yıllarca özenle korunmuş eski model hazineler',
		swap: true,
		category: 'Vintage',
		cover: 'from-neutral-100 via-neutral-200 to-secondary-100',
		likes: '678',
		views: '4.5K',
		tones: [
			'from-neutral-100 to-neutral-50',
			'from-primary-50 to-neutral-100',
			'from-secondary-50 to-neutral-50',
		],
	},
	{
		name: 'F1 Grid Koleksiyonu',
		count: 22,
		owner: 'Gizem Karadağ',
		desc: 'Tüm F1 takımlarından modellerle dolu seri',
		category: 'Tema',
		cover: 'from-primary-200 via-secondary-100 to-primary-50',
		likes: '432',
		views: '2.8K',
		tones: [
			'from-primary-200 to-primary-50',
			'from-secondary-100 to-primary-50',
			'from-primary-100 to-secondary-50',
		],
	},
	{
		name: 'Hot Wheels Treasure Hunt',
		count: 41,
		owner: 'Hakan Tunç',
		desc: "Yıllar boyunca avladığım Treasure Hunt'lar",
		category: 'Karışık',
		cover: 'from-primary-200 via-primary-100 to-neutral-50',
		likes: '2.1K',
		views: '15K',
		tones: [
			'from-primary-400 to-primary-200',
			'from-primary-200 to-primary-100',
			'from-primary-100 to-primary-50',
		],
	},
	{
		name: 'Rayların Efsaneleri',
		count: 14,
		owner: 'İsmail Öztürk',
		desc: 'Tren modelleri ve diorama elemanları',
		category: 'Tema',
		cover: 'from-secondary-200 via-secondary-100 to-neutral-50',
		likes: '156',
		views: '920',
		tones: [
			'from-secondary-300 to-secondary-100',
			'from-neutral-200 to-neutral-100',
			'from-secondary-100 to-neutral-100',
		],
	},
	{
		name: 'Denizlerin Hâkimi',
		count: 9,
		owner: 'Kaya Mertcan',
		desc: 'Gemi modelleri koleksiyonu — kaptan köşküm',
		swap: true,
		category: 'Tema',
		cover: 'from-secondary-100 via-secondary-200 to-secondary-50',
		likes: '389',
		views: '2.3K',
		tones: [
			'from-secondary-200 to-secondary-50',
			'from-neutral-100 to-secondary-100',
			'from-secondary-50 to-neutral-50',
		],
	},
	{
		name: 'Motosiklet Yıldızları',
		count: 16,
		owner: 'Levent Sönmez',
		desc: 'MotoGP ve klasik motosiklet modelleri',
		category: 'Motosiklet',
		cover: 'from-primary-100 via-secondary-100 to-secondary-50',
		likes: '567',
		views: '3.4K',
		tones: [
			'from-primary-300 to-secondary-100',
			'from-secondary-100 to-primary-100',
			'from-primary-50 to-secondary-50',
		],
	},
	{
		name: 'Başlangıç Paketi',
		count: 12,
		owner: 'Ekin Öz',
		desc: 'Yeni başlayanlar için özenle seçtiğim modeller',
		category: 'Karışık',
		cover: 'from-neutral-100 via-primary-100 to-secondary-100',
		likes: '287',
		views: '1.7K',
		tones: [
			'from-neutral-100 to-primary-50',
			'from-primary-50 to-secondary-50',
			'from-secondary-50 to-neutral-50',
		],
	},
];

function CollectionCard({
	c,
	onSelect,
}: {
	c: Collection;
	onSelect?: () => void;
}) {
	return (
		<a
			href='#'
			onClick={(e) => {
				e.preventDefault();
				onSelect?.();
			}}
			className='group flex flex-col gap-3 rounded-2xl bg-neutral-50 p-3 transition hover:bg-neutral-100'>
			{/* Header cover */}
			<div
				className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${c.cover}`}>
				<img
					src={placeholderImg(`collection-${c.name}`, 800, 500)}
					alt={c.name}
					loading='lazy'
					className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.04]'
				/>
				{c.swap ? (
					<Badge
						variant='success'
						className='absolute left-3 top-3 shadow-sm'>
						<Repeat className='size-3' /> Takas Açık
					</Badge>
				) : null}
				<Badge
					variant='surface'
					className='absolute bottom-3 left-3'>
					{c.count} model
				</Badge>
			</div>

			{/* Item örnek thumbnail strip */}
			<div className='grid grid-cols-3 gap-1.5'>
				{c.tones.map((t, i) => (
					<div
						key={i}
						className={`relative aspect-square overflow-hidden rounded-md bg-gradient-to-br ${t}`}>
						<img
							src={placeholderImg(`collection-${c.name}-thumb-${i}`, 200)}
							alt=''
							loading='lazy'
							className='absolute inset-0 size-full object-cover'
						/>
					</div>
				))}
			</div>

			{/* Body */}
			<div className='space-y-2 px-1 pb-1 pt-1'>
				<h3 className='line-clamp-1 text-lg font-bold text-secondary-900 group-hover:text-primary-600'>
					{c.name}
				</h3>
				<p className='line-clamp-2 text-sm text-neutral-500'>{c.desc}</p>
				<div className='flex items-center justify-between gap-2 pt-1 text-xs'>
					<div className='flex min-w-0 items-center gap-2 text-neutral-500'>
						<div className='grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary-300 to-primary-500 text-primary-foreground'>
							<User
								className='size-3'
								strokeWidth={2.4}
							/>
						</div>
						<span className='truncate font-semibold text-secondary-900'>
							{c.owner}
						</span>
					</div>
					<div className='flex shrink-0 items-center gap-2 font-semibold text-neutral-500'>
						<span className='flex items-center gap-1'>
							<Heart className='size-3 text-primary-500' /> {c.likes}
						</span>
						<span className='flex items-center gap-1'>
							<Eye className='size-3 text-secondary-900' /> {c.views}
						</span>
					</div>
				</div>
			</div>
		</a>
	);
}

function BestCollections({
	onSelectCollection,
}: {
	onSelectCollection?: () => void;
}) {
	return (
		<section className='space-y-6'>
			<div className='flex items-end justify-between'>
				<h2 className='font-display text-xl font-bold tracking-tight text-secondary-900 sm:text-2xl md:text-3xl'>
					En İyi Koleksiyonlar
				</h2>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onSelectCollection?.();
					}}
					className='flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700'>
					Tümünü gör <ChevronRight className='size-4' />
				</a>
			</div>
			<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
				{collections.slice(0, 4).map((c) => (
					<CollectionCard
						key={c.name}
						c={c}
						onSelect={onSelectCollection}
					/>
				))}
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  Haftanın Koleksiyoneri & Haftanın Şirketi                          */
/* ------------------------------------------------------------------ */
type WeeklyMetric = { value: string; label: string };

type WeeklyCardProps = {
	title: string;
	badge: string;
	badgeVariant: BadgeVariant;
	avatar: React.ReactNode;
	name: string;
	tagline: string;
	metrics: WeeklyMetric[];
	thumbs: string[];
	cta: string;
};

function WeeklyCard({
	title,
	badge,
	badgeVariant,
	avatar,
	name,
	tagline,
	metrics,
	thumbs,
	cta,
}: WeeklyCardProps) {
	return (
		<div className='flex h-full flex-col gap-5 rounded-2xl bg-neutral-50 p-6'>
			{/* Başlık */}
			<div className='flex items-center gap-3'>
				<span className='h-5 w-1 rounded-full bg-primary-500' />
				<h3 className='text-lg font-bold text-secondary-900'>{title}</h3>
				<Badge
					variant={badgeVariant}
					className='ml-1'>
					{badge}
				</Badge>
			</div>

			{/* Profil */}
			<div className='flex items-center gap-4'>
				{avatar}
				<div className='min-w-0 flex-1'>
					<div className='flex items-center gap-1.5'>
						<span className='truncate text-base font-bold text-secondary-900'>
							{name}
						</span>
						<BadgeCheck className='size-4 shrink-0 text-success-500' />
					</div>
					<div className='truncate text-sm text-neutral-500'>{tagline}</div>
				</div>
			</div>

			{/* Metrikler */}
			<div className='grid grid-cols-4 gap-2'>
				{metrics.map((m) => (
					<div
						key={m.label}
						className='rounded-lg bg-background px-2 py-3 text-center'>
						<div className='text-lg font-extrabold text-secondary-900'>
							{m.value}
						</div>
						<div className='mt-0.5 text-[11px] font-medium text-neutral-500'>
							{m.label}
						</div>
					</div>
				))}
			</div>

			{/* Thumbnail'lar */}
			<div className='grid grid-cols-3 gap-3'>
				{thumbs.map((t, i) => (
					<div
						key={i}
						className={`relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${t}`}>
						<img
							src={placeholderImg(`weekly-${name}-${i}`, 240)}
							alt=''
							loading='lazy'
							className='absolute inset-0 size-full object-cover'
						/>
					</div>
				))}
			</div>

			{/* CTA — her zaman en altta */}
			<Button
				size='lg'
				className='mt-auto h-11 w-full'>
				{cta}
			</Button>
		</div>
	);
}

function WeeklyDuo() {
	return (
		<section className='grid items-stretch gap-6 lg:grid-cols-2'>
			<WeeklyCard
				title='Haftanın Koleksiyoneri'
				badge='Bu Hafta'
				badgeVariant='default'
				avatar={
					<div className='grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 text-primary-foreground'>
						<User
							className='size-8'
							strokeWidth={2}
						/>
					</div>
				}
				name='Mustafa Yılmaz'
				tagline='Klasik Italyan & JDM koleksiyoneri'
				metrics={[
					{ value: '84', label: 'İlan' },
					{ value: '14', label: 'Satış' },
					{ value: '12.4K', label: 'Görüntü' },
					{ value: '1.2K', label: 'Beğeni' },
				]}
				thumbs={[
					'from-primary-200 to-primary-100',
					'from-secondary-100 to-secondary-50',
					'from-neutral-100 to-primary-50',
				]}
				cta='Profili Gör'
			/>
			<WeeklyCard
				title='Haftanın Şirketi'
				badge='Onaylı'
				badgeVariant='dark'
				avatar={
					<div className='grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-secondary-700 to-secondary-900 text-primary-400'>
						<Store
							className='size-8'
							strokeWidth={2}
						/>
					</div>
				}
				name='Diecast Atölyesi'
				tagline='Premium ve RLC modeller'
				metrics={[
					{ value: '2.481', label: 'Ürün' },
					{ value: '1.842', label: 'Satış' },
					{ value: '248K', label: 'Görüntü' },
					{ value: '24.6K', label: 'Beğeni' },
				]}
				thumbs={[
					'from-secondary-200 to-secondary-100',
					'from-primary-100 to-primary-50',
					'from-neutral-100 to-neutral-50',
				]}
				cta='Mağazayı Gör'
			/>
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  Promosyon banner                                                   */
/* ------------------------------------------------------------------ */
function PromoBanner() {
	return (
		<section className='grid gap-4 sm:gap-6 md:grid-cols-2'>
			<div className='flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-400 p-6 text-primary-foreground sm:flex-row sm:items-center sm:gap-6 sm:p-8'>
				<div className='flex-1'>
					<div className='text-xs font-medium uppercase tracking-wider text-primary-foreground/80 sm:text-sm'>
						Koleksiyoner mi olmak istiyorsun?
					</div>
					<h3 className='mt-1 min-h-[2lh] font-display text-xl font-extrabold tracking-tight sm:text-3xl'>
						Profilini öne çıkar, ücretsiz başla.
					</h3>
				</div>
				<Button
					size='lg'
					className='h-10 w-full bg-background px-6 text-primary-600 hover:bg-neutral-50 sm:h-11 sm:w-auto'>
					Üye Ol
				</Button>
			</div>
			<div className='flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-br from-secondary-900 to-secondary-400 p-6 text-primary-foreground sm:flex-row sm:items-center sm:gap-6 sm:p-8'>
				<div className='flex-1'>
					<div className='text-xs font-medium uppercase tracking-wider text-primary-foreground/60 sm:text-sm'>
						Mağazanı aç
					</div>
					<h3 className='mt-1 min-h-[2lh] font-display text-xl font-extrabold tracking-tight sm:text-3xl'>
						Diecast satışlarına bugün başla.
					</h3>
				</div>
				<Button
					size='lg'
					className='h-10 w-full px-6 sm:h-11 sm:w-auto'>
					Mağaza Aç
				</Button>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  Markalar şeridi                                                    */
/* ------------------------------------------------------------------ */
function BrandsStrip() {
	return (
		<section className='space-y-6'>
			<div className='flex items-end justify-between'>
				<h2 className='font-display text-2xl font-bold tracking-tight text-secondary-900'>
					Popüler Markalar
				</h2>
				<a
					href='#'
					className='text-sm font-semibold text-primary-600 hover:text-primary-700'>
					Tümü
				</a>
			</div>
			<div className='grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8'>
				{brands.map((b) => (
					<a
						key={b.name}
						href='#'
						className='group flex h-20 flex-col items-center justify-center gap-1.5 rounded-2xl bg-neutral-50 px-3 transition hover:bg-neutral-100'>
						<img
							src={`https://www.google.com/s2/favicons?domain=${b.domain}&sz=128`}
							alt=''
							loading='lazy'
							className='size-7 shrink-0 object-contain'
						/>
						<span className='line-clamp-1 text-[11px] font-extrabold tracking-wider text-secondary-900/70 transition group-hover:text-primary-600 sm:text-xs'>
							{b.name}
						</span>
					</a>
				))}
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
	const cols = [
		{
			title: 'Pazar',
			links: ['İlanlar', 'Takaslar', 'Koleksiyonlar', 'Üyelik Planları'],
		},
		{
			title: 'Destek',
			links: [
				'Hakkımızda',
				'Yardım Merkezi',
				'İletişim',
				'Sıkça Sorulan Sorular',
			],
		},
		{
			title: 'Yasal',
			links: [
				'Kullanım Koşulları',
				'Gizlilik Politikası',
				'Çerez Politikası',
				'Çerez Ayarları',
			],
		},
		{
			title: 'Dil',
			links: ['Türkçe', 'English'],
		},
	];
	return (
		<footer className='mt-12 bg-secondary-900 text-neutral-300 sm:mt-20'>
			<div className='mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14'>
				<div className='grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]'>
					<div className='space-y-4'>
						<img
							src={logoLightUrl}
							alt='Tarodan'
							className='h-10 w-auto rounded-lg'
						/>
						<p className='max-w-xs text-sm text-neutral-400'>
							Türkiye'nin en büyük diecast model araba pazarı. Koleksiyonerleri
							ve satıcıları aynı çatı altında buluşturuyoruz.
						</p>
						<div className='flex gap-2 pt-2'>
							{['FB', 'IG', 'X', 'YT'].map((s) => (
								<a
									key={s}
									href='#'
									className='grid size-9 place-items-center rounded-lg bg-background/10 text-xs font-bold text-primary-foreground hover:bg-primary-500'>
									{s}
								</a>
							))}
						</div>
					</div>
					{cols.map((c) => (
						<div key={c.title}>
							<h4 className='mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground'>
								{c.title}
							</h4>
							<ul className='space-y-2 text-sm'>
								{c.links.map((l) => (
									<li key={l}>
										<a
											className='hover:text-primary-400'
											href='#'>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-neutral-500 sm:flex-row'>
					<p>© 2026 Tarodan. Tüm hakları saklıdır.</p>
					<p>Made with care for collectors.</p>
				</div>
			</div>
		</footer>
	);
}

/* ------------------------------------------------------------------ */
/*  Home main                                                          */
/* ------------------------------------------------------------------ */
function HomeMain({
	onSelectProduct,
	onSelectCollection,
}: {
	onSelectProduct?: () => void;
	onSelectCollection?: () => void;
}) {
	return (
		<main className='mx-auto max-w-[1280px] space-y-10 px-4 py-6 sm:space-y-14 sm:px-6 sm:py-10'>
			<ProductSection
				title='Popüler İlanlar'
				items={discounted}
				onSelect={onSelectProduct}
			/>
			<CategoryCards />
			<ProductSection
				title='Yeni Gelenler'
				items={popular}
				onSelect={onSelectProduct}
			/>
			<PromoBanner />
			<ProductSection
				title='İndirimdekiler'
				items={discounted}
				onSelect={onSelectProduct}
			/>
			<BestCollections onSelectCollection={onSelectCollection} />
			<WeeklyDuo />
			<BrandsStrip />
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Listing main — filtre paneli + ürün grid'i                         */
/* ------------------------------------------------------------------ */
const filterCategories = [
	{ name: 'Otomobil', count: 1248 },
	{ name: 'Motosiklet', count: 234 },
	{ name: 'Kamyon & TIR', count: 89 },
	{ name: 'Uçak', count: 156 },
	{ name: 'Aksiyon Figürü', count: 412 },
	{ name: 'Diorama', count: 78 },
	{ name: 'Vintage', count: 312 },
];

const filterBrands = [
	{ name: 'Hot Wheels', count: 348 },
	{ name: 'Tomica', count: 256 },
	{ name: 'Maisto', count: 198 },
	{ name: 'Bburago', count: 142 },
	{ name: 'Greenlight', count: 87 },
	{ name: 'Kyosho', count: 56 },
	{ name: 'AUTOart', count: 42 },
	{ name: 'Minichamps', count: 38 },
];

const filterScales = [
	{ name: '1:18', count: 412 },
	{ name: '1:24', count: 356 },
	{ name: '1:43', count: 198 },
	{ name: '1:64', count: 624 },
];

const filterConditions = [
	{ name: 'Sıfır', count: 487 },
	{ name: 'İkinci El', count: 761 },
];

type FilterItem = { name: string; count: number };

function FilterGroup({
	title,
	items,
	searchable,
	defaultChecked,
}: {
	title: string;
	items: FilterItem[];
	searchable?: boolean;
	defaultChecked?: string[];
}) {
	return (
		<div className='space-y-3'>
			<h3 className='text-xs font-bold uppercase tracking-wider text-secondary-900'>
				{title}
			</h3>
			{searchable ? (
				<div className='relative'>
					<Search className='pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400' />
					<Input
						className='h-9 pl-9 text-sm'
						placeholder={`${title} ara...`}
					/>
				</div>
			) : null}
			<ul className='space-y-2.5 text-sm'>
				{items.map((i) => (
					<li key={i.name}>
						<label className='group flex cursor-pointer items-center gap-2.5 hover:text-primary-600'>
							<span className='relative inline-grid size-4 shrink-0 place-items-center'>
								<input
									type='checkbox'
									defaultChecked={defaultChecked?.includes(i.name)}
									className='peer absolute inset-0 size-full cursor-pointer appearance-none rounded border border-neutral-300 bg-background transition checked:border-primary-500 checked:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
								/>
								<Check
									className='pointer-events-none relative size-3 text-primary-foreground opacity-0 transition peer-checked:opacity-100'
									strokeWidth={3.5}
								/>
							</span>
							<span className='flex-1 font-medium text-secondary-900'>
								{i.name}
							</span>
							<span className='text-xs text-neutral-400'>{i.count}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

function FilterDivider() {
	return <div className='h-px bg-neutral-100' />;
}

function FilterSidebar() {
	return (
		<aside className='space-y-5 rounded-2xl bg-neutral-50 p-5 lg:sticky lg:top-4 lg:self-start'>
			<div className='flex items-center justify-between'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Filtreler
				</h2>
				<button className='text-xs font-semibold text-primary-600 hover:text-primary-700'>
					Temizle
				</button>
			</div>
			<FilterDivider />
			<FilterGroup
				title='Kategori'
				items={filterCategories}
				defaultChecked={['Otomobil']}
			/>
			<FilterDivider />
			<FilterGroup
				title='Marka'
				items={filterBrands}
				searchable
				defaultChecked={['Hot Wheels']}
			/>
			<FilterDivider />
			<FilterGroup
				title='Ölçek'
				items={filterScales}
				defaultChecked={['1:18']}
			/>
			<FilterDivider />
			<div className='space-y-3'>
				<h3 className='text-xs font-bold uppercase tracking-wider text-secondary-900'>
					Fiyat
				</h3>
				<div className='flex items-center gap-2'>
					<Input
						className='h-9 text-sm'
						placeholder='Min ₺'
					/>
					<span className='text-neutral-400'>—</span>
					<Input
						className='h-9 text-sm'
						placeholder='Max ₺'
					/>
				</div>
				<Button
					size='sm'
					variant='outline'
					className='h-8 w-full text-xs'>
					Uygula
				</Button>
			</div>
			<FilterDivider />
			<FilterGroup
				title='Durum'
				items={filterConditions}
			/>
		</aside>
	);
}

const allListings: Product[] = [
	...popular,
	...discounted,
	...popular,
	...discounted,
];

function PageButton({
	children,
	active,
}: {
	children: React.ReactNode;
	active?: boolean;
}) {
	return (
		<button
			className={
				active
					? 'grid h-9 min-w-9 place-items-center rounded-lg bg-primary-500 px-2 text-sm font-semibold text-primary-foreground'
					: 'grid h-9 min-w-9 place-items-center rounded-lg border border-neutral-200 bg-background px-2 text-sm font-semibold text-secondary-900 hover:bg-neutral-50'
			}>
			{children}
		</button>
	);
}

function ListingMain({ onSelectProduct }: { onSelectProduct?: () => void }) {
	const [view, setView] = useState<'grid' | 'list'>('grid');
	const [showFilters, setShowFilters] = useState(false);
	const activeChips = ['Otomobil', '1:18', 'Hot Wheels'];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			{/* Breadcrumb */}
			<nav className='mb-6 flex items-center gap-2 text-sm text-neutral-500'>
				<a
					href='#'
					className='hover:text-primary-600'>
					Anasayfa
				</a>
				<ChevronRight className='size-3' />
				<span className='font-semibold text-secondary-900'>Tüm İlanlar</span>
			</nav>

			{/* Mobil filtre toggle */}
			<button
				onClick={() => setShowFilters((s) => !s)}
				className='mb-4 inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 bg-background px-4 text-sm font-semibold text-secondary-900 hover:border-primary-300 hover:text-primary-600 lg:hidden'>
				<SlidersHorizontal className='size-4' />
				{showFilters ? 'Filtreleri gizle' : 'Filtreleri göster'}
			</button>

			<div className='grid gap-6 sm:gap-8 lg:grid-cols-[260px_1fr]'>
				<div className={showFilters ? 'block' : 'hidden lg:block'}>
					<FilterSidebar />
				</div>

				<div>
					{/* Üst bar — sol aktif filtreler | sağ sırala + görünüm */}
					<div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
						<div className='flex flex-wrap items-center gap-2'>
							{activeChips.map((c) => (
								<button
									key={c}
									className='inline-flex items-center gap-1.5 rounded-md bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 hover:bg-primary-100'>
									{c}
									<X className='size-3' />
								</button>
							))}
							<button className='ml-1 text-xs font-semibold text-neutral-500 underline-offset-2 hover:text-primary-600 hover:underline'>
								Tümünü temizle
							</button>
						</div>
						<div className='flex items-center gap-2'>
							<Select defaultValue='Önerilen'>
								<SelectTrigger className='h-10 min-w-[180px] rounded-lg border-neutral-200 bg-background text-sm font-semibold'>
									<span className='text-neutral-500'>Sırala:&nbsp;</span>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='Önerilen'>Önerilen</SelectItem>
									<SelectItem value='Yeni'>Yeni</SelectItem>
									<SelectItem value='En Düşük Fiyat'>En Düşük Fiyat</SelectItem>
									<SelectItem value='En Yüksek Fiyat'>
										En Yüksek Fiyat
									</SelectItem>
									<SelectItem value='En Çok Beğenilen'>
										En Çok Beğenilen
									</SelectItem>
								</SelectContent>
							</Select>
							<div className='flex items-center rounded-lg bg-neutral-100 p-1'>
								<button
									aria-label='Grid görünümü'
									onClick={() => setView('grid')}
									className={
										view === 'grid'
											? 'grid size-8 place-items-center rounded-md bg-background text-secondary-900 shadow-sm'
											: 'grid size-8 place-items-center rounded-md text-neutral-500 hover:text-secondary-900'
									}>
									<LayoutGrid className='size-4' />
								</button>
								<button
									aria-label='Liste görünümü'
									onClick={() => setView('list')}
									className={
										view === 'list'
											? 'grid size-8 place-items-center rounded-md bg-background text-secondary-900 shadow-sm'
											: 'grid size-8 place-items-center rounded-md text-neutral-500 hover:text-secondary-900'
									}>
									<List className='size-4' />
								</button>
							</div>
						</div>
					</div>

					{/* Grid / Liste */}
					{view === 'grid' ? (
						<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
							{allListings.map((p, i) => (
								<ProductCard
									key={`${p.title}-${i}`}
									p={p}
									onSelect={onSelectProduct}
								/>
							))}
						</div>
					) : (
						<div className='space-y-2'>
							{allListings.map((p, i) => (
								<ProductRow
									key={`${p.title}-${i}`}
									p={p}
									onSelect={onSelectProduct}
								/>
							))}
						</div>
					)}

					{/* Pagination */}
					<div className='mt-12 flex items-center justify-center gap-1'>
						<PageButton>
							<ChevronLeft className='size-4' />
						</PageButton>
						<PageButton active>1</PageButton>
						<PageButton>2</PageButton>
						<PageButton>3</PageButton>
						<PageButton>4</PageButton>
						<PageButton>5</PageButton>
						<span className='px-2 text-neutral-400'>…</span>
						<PageButton>42</PageButton>
						<PageButton>
							<ChevronRight className='size-4' />
						</PageButton>
					</div>
				</div>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Detail main — ürün detay sayfası                                   */
/* ------------------------------------------------------------------ */
const detailProduct = {
	brand: 'BBURAGO',
	title: 'Bburago Ferrari F40 Limited Edition Diecast Model',
	price: '1.249',
	cents: '00',
	oldPrice: '1.499',
	discount: '%17',
	likes: '342',
	views: '2.1K',
	scale: '1:18',
	rating: 4.7,
	reviewCount: 124,
	description:
		"Ferrari'nin efsanevi F40 modeli, Bburago tarafından 1:18 ölçekte titizlikle üretilmiştir. Kapılar, kaput ve bagaj açılır; iç mekan detayları, motor parçaları ve direksiyon kontrolü gerçekçi bir şekilde tasarlanmıştır. Orijinal kutusunda, hiç sergilenmemiş halde. Koleksiyonerlerin ve Ferrari hayranlarının vazgeçilmez modeli.",
};

const detailSpecs: { label: string; value: string }[] = [
	{ label: 'Marka', value: 'Bburago' },
	{ label: 'Ölçek', value: '1:18' },
	{ label: 'Malzeme', value: 'Diecast Metal' },
	{ label: 'Üretici', value: 'Bburago İtalya' },
	{ label: 'Kategori', value: 'Otomobil' },
	{ label: 'Yıl', value: '2024' },
	{ label: 'Durum', value: 'Sıfır' },
	{ label: 'Adet', value: '1 adet' },
];

const detailFeatures = [
	'Açılan kapı, kaput ve bagaj kapağı',
	'Detaylı V8 motor görünümü',
	'Gerçekçi iç mekan ve direksiyon detayları',
	'Diecast metal şasi, plastik aksesuarlar',
	'Orijinal kutusunda, hasarsız teslim',
	'Koleksiyonerler için sertifikalı edisyon',
];

const detailReviews = [
	{
		name: 'Ahmet Kara',
		when: '3 gün önce',
		stars: 5,
		text: 'Mükemmel kalite, kargo hızlıydı. Detaylar inanılmaz, koleksiyonuma ekleyince tam yerini buldu. Tavsiye ederim.',
	},
	{
		name: 'Burak Mert',
		when: '1 hafta önce',
		stars: 4,
		text: 'İyi bir model, fiyatına göre değer veriyor. Sadece kapılarından biri biraz sıkı açılıyor ama genel olarak çok güzel.',
	},
	{
		name: 'Cem Aslan',
		when: '2 hafta önce',
		stars: 5,
		text: 'Tam istediğim gibi geldi. Kutusunda gönderildi, paketleme harikaydı. Boyaması ve detayları muhteşem.',
	},
];

const galleryThumbs = [
	'from-primary-300 to-primary-500',
	'from-secondary-200 to-secondary-400',
	'from-neutral-200 to-neutral-400',
	'from-primary-200 to-primary-400',
];

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex items-center gap-2'>
			<span className='h-5 w-1 rounded-full bg-primary-500' />
			<h2 className='font-display text-lg font-bold text-secondary-900'>{children}</h2>
		</div>
	);
}

function StarRow({ value, size = 14 }: { value: number; size?: number }) {
	return (
		<div className='flex items-center gap-0.5'>
			{[1, 2, 3, 4, 5].map((i) => (
				<Star
					key={i}
					style={{ width: size, height: size }}
					className={
						i <= Math.round(value)
							? 'fill-primary-500 text-primary-500'
							: 'text-neutral-300'
					}
				/>
			))}
		</div>
	);
}

function DetailMain({
	onHome,
	onListing,
	onSelectProduct,
	onSwapOffer,
	onCheckout,
}: {
	onHome?: () => void;
	onListing?: () => void;
	onSelectProduct?: () => void;
	onSwapOffer?: () => void;
	onCheckout?: () => void;
}) {
	const [activeThumb, setActiveThumb] = useState(0);
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			{/* Breadcrumb */}
			<nav className='mb-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500'>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onHome?.();
					}}
					className='hover:text-primary-600'>
					Anasayfa
				</a>
				<ChevronRight className='size-3' />
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onListing?.();
					}}
					className='hover:text-primary-600'>
					Tüm İlanlar
				</a>
				<ChevronRight className='size-3' />
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onListing?.();
					}}
					className='hover:text-primary-600'>
					Otomobil
				</a>
				<ChevronRight className='size-3' />
				<span className='font-semibold text-secondary-900'>
					{detailProduct.brand}
				</span>
			</nav>

			{/* Üst banner — başlık + rating + likes/views (full width) */}
			<div className='mb-6'>
				<div className='text-xs font-bold uppercase tracking-wider text-neutral-500'>
					{detailProduct.brand}
				</div>
				<h1 className='font-display mt-1 text-2xl font-extrabold leading-tight tracking-tight text-secondary-900 sm:text-3xl'>
					{detailProduct.title}
				</h1>
				<div className='mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold text-neutral-500'>
					<StarRow value={detailProduct.rating} />
					<span className='text-secondary-900'>{detailProduct.rating}</span>
					<a
						href='#'
						className='text-primary-600 hover:text-primary-700'>
						{detailProduct.reviewCount} değerlendirme
					</a>
					<span>·</span>
					<span className='flex items-center gap-1'>
						<Heart className='size-3.5 text-primary-500' />{' '}
						{detailProduct.likes}
					</span>
					<span className='flex items-center gap-1'>
						<Eye className='size-3.5 text-secondary-900' />{' '}
						{detailProduct.views}
					</span>
					<div className='ml-auto flex items-center gap-2'>
						<button
							aria-label='Şikayet et'
							className='grid size-9 place-items-center rounded-lg border border-neutral-200 bg-background text-secondary-900 transition hover:border-primary-300 hover:text-primary-600'>
							<Flag className='size-4' />
						</button>
						<button
							aria-label='Paylaş'
							className='grid size-9 place-items-center rounded-lg border border-neutral-200 bg-background text-secondary-900 transition hover:border-primary-300 hover:text-primary-600'>
							<Share2 className='size-4' />
						</button>
					</div>
				</div>
			</div>

			{/* Ana grid — SOL galeri+detaylar | SAĞ aside (sticky) */}
			<div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8'>
				{/* SOL — galeri (full genişlik), altında özet+bullet, ardından section'lar */}
				<div className='min-w-0 space-y-8 sm:space-y-10'>
					{/* Galeri */}
					<div className='flex gap-2 sm:gap-3'>
						<div className='flex shrink-0 flex-col gap-2'>
							{galleryThumbs.map((t, i) => (
								<button
									key={i}
									onClick={() => setActiveThumb(i)}
									className={`relative size-12 overflow-hidden rounded-lg bg-gradient-to-br sm:size-16 sm:rounded-xl ${t} transition ${
										activeThumb === i
											? 'ring-2 ring-primary-500 ring-offset-2'
											: 'opacity-70 hover:opacity-100'
									}`}>
									<img
										src={placeholderImg(
											`detail-${detailProduct.title}-${i}`,
											200,
										)}
										alt=''
										loading='lazy'
										className='absolute inset-0 size-full object-cover'
									/>
								</button>
							))}
						</div>
						<div
							className={`relative aspect-[4/3] flex-1 overflow-hidden rounded-2xl bg-gradient-to-br ${galleryThumbs[activeThumb]}`}>
							<img
								src={placeholderImg(
									`detail-${detailProduct.title}-${activeThumb}`,
									1200,
									900,
								)}
								alt={detailProduct.title}
								className='absolute inset-0 size-full object-cover'
							/>
							<div className='absolute left-4 top-4 flex flex-col gap-2'>
								<Badge variant='success'>
									<Repeat className='size-3' /> Takas Açık
								</Badge>
								<Badge variant='dark'>Popüler</Badge>
							</div>
							<Badge
								variant='surface'
								className='absolute bottom-4 left-4'>
								{detailProduct.scale}
							</Badge>
						</div>
					</div>

					{/* Açıklama */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<SectionHeading>Açıklama</SectionHeading>
						<p className='max-w-3xl text-sm leading-relaxed text-secondary-900'>
							{detailProduct.description}
						</p>
					</section>

					{/* Özellikler (spec dl) */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<SectionHeading>Özellikler</SectionHeading>
						<dl className='grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4'>
							{detailSpecs.map((s) => (
								<div key={s.label}>
									<dt className='text-[11px] font-bold uppercase tracking-wider text-neutral-500'>
										{s.label}
									</dt>
									<dd className='mt-0.5 font-semibold text-secondary-900'>
										{s.value}
									</dd>
								</div>
							))}
						</dl>
					</section>

					{/* Teknik özellikler */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<SectionHeading>Teknik Özellikler</SectionHeading>
						<ul className='grid gap-3 sm:grid-cols-2'>
							{detailFeatures.map((f) => (
								<li
									key={f}
									className='flex items-start gap-2 text-sm text-secondary-900'>
									<span className='mt-0.5 grid size-4 shrink-0 place-items-center rounded-md bg-primary-500 text-primary-foreground'>
										<Check
											className='size-3'
											strokeWidth={3}
										/>
									</span>
									{f}
								</li>
							))}
						</ul>
					</section>

					{/* Değerlendirmeler */}
					<section className='space-y-5'>
						<div className='flex flex-wrap items-end justify-between gap-3'>
							<SectionHeading>Ürün Değerlendirmeleri</SectionHeading>
							<div className='flex items-center gap-2 text-sm'>
								<StarRow value={detailProduct.rating} />
								<span className='font-bold text-secondary-900'>
									{detailProduct.rating}
								</span>
								<span className='text-neutral-500'>
									({detailProduct.reviewCount} değerlendirme)
								</span>
							</div>
						</div>
						<div className='grid gap-3 sm:grid-cols-2'>
							{detailReviews.map((r) => (
								<article
									key={r.name}
									className='space-y-3 rounded-2xl bg-neutral-50 p-5'>
									<div className='flex items-center gap-3'>
										<div className='grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-300 to-primary-500 text-primary-foreground'>
											<User
												className='size-5'
												strokeWidth={2}
											/>
										</div>
										<div className='min-w-0 flex-1'>
											<div className='truncate font-semibold text-secondary-900'>
												{r.name}
											</div>
											<div className='text-xs text-neutral-500'>{r.when}</div>
										</div>
										<StarRow
											value={r.stars}
											size={12}
										/>
									</div>
									<p className='text-sm leading-relaxed text-secondary-900'>
										{r.text}
									</p>
								</article>
							))}
						</div>
					</section>
				</div>

				{/* SAĞ ASIDE — fiyat + satıcı + benzer ilanlar (sticky) */}
				<aside className='space-y-5 lg:sticky lg:top-4 lg:self-start'>
					{/* Fiyat kartı */}
					<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<div>
							<div className='flex items-baseline gap-1.5'>
								<span className='text-4xl font-extrabold text-secondary-900'>
									₺{detailProduct.price}
								</span>
								<span className='text-xl font-semibold text-neutral-500'>
									,{detailProduct.cents}
								</span>
							</div>
							<div className='mt-1 flex flex-wrap items-center gap-2'>
								<span className='text-sm text-neutral-400 line-through'>
									₺{detailProduct.oldPrice},00
								</span>
								<Badge variant='discount'>
									{detailProduct.discount} indirim
								</Badge>
							</div>
						</div>
						<span className='inline-flex w-fit items-center gap-1 rounded-md bg-success-50 px-2 py-1 text-xs font-semibold text-success-700'>
							<Check
								className='size-3'
								strokeWidth={3}
							/>{' '}
							Stokta
						</span>
						<div className='flex flex-col gap-2'>
							<button className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-600'>
								<ShoppingCart className='size-5' /> Sepete Ekle
							</button>
							<button
								type='button'
								onClick={onCheckout}
								className='inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-background px-5 text-sm font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'>
								<Zap
									className='size-5'
									strokeWidth={2.4}
								/>{' '}
								Hemen Al
							</button>
						</div>
						<div className='flex gap-2'>
							<button
								type='button'
								onClick={onSwapOffer}
								className='inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-background text-sm font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'>
								<Repeat className='size-4' /> Takas
							</button>
							<button className='inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-background text-sm font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'>
								Teklif Ver
							</button>
						</div>
						<div className='flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-3 text-xs text-neutral-500'>
							<span className='flex items-center gap-1.5'>
								<Truck className='size-3.5 text-secondary-900' /> Hızlı kargo
							</span>
							<span className='flex items-center gap-1.5'>
								<ShieldCheck className='size-3.5 text-success-600' /> Güvenli
								alışveriş
							</span>
						</div>
					</div>

					{/* Satıcı kartı */}
					<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<SectionHeading>Satıcı</SectionHeading>
						<div className='flex items-center gap-3'>
							<div className='grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 text-primary-foreground'>
								<User
									className='size-6'
									strokeWidth={2}
								/>
							</div>
							<div className='min-w-0 flex-1'>
								<div className='flex items-center gap-1.5'>
									<span className='truncate text-base font-bold text-secondary-900'>
										Mustafa Yılmaz
									</span>
									<BadgeCheck className='size-4 shrink-0 text-success-500' />
								</div>
								<div className='flex items-center gap-2 text-xs text-neutral-500'>
									<span>İstanbul</span>
									<span>·</span>
									<span>84 ilan</span>
									<span>·</span>
									<span className='flex items-center gap-0.5'>
										<Star className='size-3 fill-primary-500 text-primary-500' />
										4.8
									</span>
								</div>
							</div>
						</div>
						<button className='inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-background text-sm font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'>
							<MessageSquare className='size-4' /> Mesaj Gönder
						</button>
					</div>
				</aside>
			</div>

			{/* Benzer İlanlar — altta full-width carousel */}
			<section className='mt-12 space-y-6'>
				<div className='flex items-end justify-between gap-4'>
					<h2 className='font-display text-xl font-bold tracking-tight text-secondary-900 sm:text-2xl md:text-3xl'>
						Benzer İlanlar
					</h2>
					<a
						href='#'
						onClick={(e) => {
							e.preventDefault();
							onListing?.();
						}}
						className='flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700'>
						Tümünü gör <ChevronRight className='size-4' />
					</a>
				</div>
				<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5'>
					{popular.map((p) => (
						<ProductCard
							key={p.title}
							p={p}
							onSelect={onSelectProduct}
						/>
					))}
				</div>
			</section>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Collections main — koleksiyon listeleme                            */
/* ------------------------------------------------------------------ */
function CollectionsMain({
	onSelectCollection,
	onBack,
}: {
	onSelectCollection?: () => void;
	onBack?: () => void;
}) {
	const [sort, setSort] = useState('Popüler');
	const [category, setCategory] = useState('Tüm Kategoriler');
	const sortOptions = ['Popüler', 'En Yeni', 'En Çok Modelli', 'Takas Açık'];
	const categoryOptions = [
		'Tüm Kategoriler',
		'Otomobil',
		'Motosiklet',
		'Tema',
		'Vintage',
		'Karışık',
	];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center gap-3'>
				{onBack ? (
					<button
						type='button'
						onClick={onBack}
						aria-label='Geri'
						className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
						<ChevronLeft className='size-5' />
					</button>
				) : null}
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Koleksiyonlar
				</h1>
			</div>

			{/* Filter bar */}
			<div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
				<div className='relative max-w-md flex-1'>
					<Search className='pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
					<Input
						placeholder='Koleksiyon adı, sahip veya marka ara...'
						className='h-10 pl-10 text-sm'
					/>
				</div>
				<div className='flex flex-wrap items-center gap-2'>
					<Select
						value={category}
						onValueChange={setCategory}>
						<SelectTrigger className='h-10 min-w-[180px] rounded-lg border-neutral-200 bg-background text-sm font-semibold'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{categoryOptions.map((c) => (
								<SelectItem
									key={c}
									value={c}>
									{c}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select
						value={sort}
						onValueChange={setSort}>
						<SelectTrigger className='h-10 min-w-[150px] rounded-lg border-neutral-200 bg-background text-sm font-semibold'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{sortOptions.map((s) => (
								<SelectItem
									key={s}
									value={s}>
									{s}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Grid */}
			<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
				{collections.map((c) => (
					<CollectionCard
						key={c.name}
						c={c}
						onSelect={onSelectCollection}
					/>
				))}
			</div>

			{/* Pagination */}
			<div className='mt-12 flex items-center justify-center gap-1'>
				<PageButton>
					<ChevronLeft className='size-4' />
				</PageButton>
				<PageButton active>1</PageButton>
				<PageButton>2</PageButton>
				<PageButton>3</PageButton>
				<PageButton>4</PageButton>
				<PageButton>5</PageButton>
				<span className='px-2 text-neutral-400'>…</span>
				<PageButton>104</PageButton>
				<PageButton>
					<ChevronRight className='size-4' />
				</PageButton>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Collection Detail main — koleksiyon detay sayfası                  */
/* ------------------------------------------------------------------ */
const detailCollection = collections[0];
const collectionItems: Product[] = [...popular, ...discounted];

function CollectionDetailMain({
	onHome,
	onCollections,
	onSelectProduct,
}: {
	onHome?: () => void;
	onCollections?: () => void;
	onSelectProduct?: () => void;
}) {
	const stats = [
		{ value: detailCollection.count.toString(), label: 'Model' },
		{ value: detailCollection.likes, label: 'Beğeni' },
		{ value: detailCollection.views, label: 'Görüntü' },
		{ value: '124', label: 'Takipçi' },
	];
	return (
		<main className='mx-auto max-w-[1280px] space-y-10 px-4 py-6 sm:space-y-12 sm:px-6 sm:py-10'>
			{/* Breadcrumb */}
			<nav className='flex flex-wrap items-center gap-2 text-sm text-neutral-500'>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onHome?.();
					}}
					className='hover:text-primary-600'>
					Anasayfa
				</a>
				<ChevronRight className='size-3' />
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onCollections?.();
					}}
					className='hover:text-primary-600'>
					Koleksiyonlar
				</a>
				<ChevronRight className='size-3' />
				<span className='font-semibold text-secondary-900'>
					{detailCollection.name}
				</span>
			</nav>

			{/* Hero — sol cover | sağ meta */}
			<section className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]'>
				{/* Sol: ana görsel */}
				<div
					className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${detailCollection.cover}`}>
					<img
						src={placeholderImg(
							`collection-${detailCollection.name}`,
							1200,
							750,
						)}
						alt={detailCollection.name}
						className='absolute inset-0 size-full object-cover'
					/>
					{detailCollection.swap ? (
						<Badge
							variant='success'
							className='absolute left-3 top-3 shadow-md sm:left-4 sm:top-4'>
							<Repeat className='size-3' /> Takas Açık
						</Badge>
					) : null}
					<Badge
						variant='surface'
						className='absolute bottom-3 left-3 sm:bottom-4 sm:left-4'>
						{detailCollection.count} model
					</Badge>
				</div>

				{/* Sağ: meta + sahip + stats */}
				<div className='flex flex-col gap-5 rounded-2xl bg-neutral-50 p-5 sm:p-6'>
					<div>
						<Badge
							variant='surface'
							className='bg-background'>
							{detailCollection.category}
						</Badge>
						<h1 className='font-display mt-3 text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
							{detailCollection.name}
						</h1>
						<p className='mt-2 text-sm leading-relaxed text-neutral-600'>
							{detailCollection.desc}
						</p>
					</div>

					{/* Sahip */}
					<div className='flex items-center gap-3 rounded-xl bg-background p-3'>
						<div className='grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 text-primary-foreground'>
							<User
								className='size-6'
								strokeWidth={2}
							/>
						</div>
						<div className='min-w-0 flex-1'>
							<div className='flex items-center gap-1.5'>
								<span className='truncate text-base font-bold text-secondary-900'>
									{detailCollection.owner}
								</span>
								<BadgeCheck className='size-4 shrink-0 text-success-500' />
							</div>
							<div className='flex items-center gap-1.5 text-xs text-neutral-500'>
								<span>@ahmet.kara</span>
								<span>·</span>
								<span className='flex items-center gap-0.5'>
									<Star className='size-3 fill-primary-500 text-primary-500' />
									4.8
								</span>
							</div>
						</div>
					</div>

					{/* İstatistikler */}
					<div className='grid grid-cols-4 gap-2'>
						{stats.map((s) => (
							<div
								key={s.label}
								className='rounded-lg bg-background px-2 py-3 text-center'>
								<div className='text-lg font-extrabold text-secondary-900'>
									{s.value}
								</div>
								<div className='mt-0.5 text-[11px] font-medium text-neutral-500'>
									{s.label}
								</div>
							</div>
						))}
					</div>

					{/* Aksiyonlar */}
					<div className='mt-auto space-y-2'>
						<button className='inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-600'>
							<UserPlus
								className='size-4'
								strokeWidth={2.4}
							/>{' '}
							Koleksiyonu Takip Et
						</button>
						<button className='inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-background px-5 text-sm font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600'>
							<MessageSquare className='size-4' /> Sahibine Mesaj Gönder
						</button>
					</div>
				</div>
			</section>

			{/* Koleksiyon İçeriği */}
			<section className='space-y-6'>
				<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5'>
					{collectionItems.map((p, i) => (
						<ProductCard
							key={`${p.title}-${i}`}
							p={p}
							onSelect={onSelectProduct}
						/>
					))}
				</div>
				<div className='flex items-center justify-center gap-1 pt-4'>
					<PageButton>
						<ChevronLeft className='size-4' />
					</PageButton>
					<PageButton active>1</PageButton>
					<PageButton>2</PageButton>
					<PageButton>3</PageButton>
					<PageButton>
						<ChevronRight className='size-4' />
					</PageButton>
				</div>
			</section>

			{/* Benzer koleksiyonlar */}
			<section className='space-y-6'>
				<h2 className='font-display text-xl font-bold tracking-tight text-secondary-900 sm:text-2xl md:text-3xl'>
					Benzer Koleksiyonlar
				</h2>
				<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
					{collections.slice(1, 5).map((c) => (
						<CollectionCard
							key={c.name}
							c={c}
							onSelect={onCollections}
						/>
					))}
				</div>
			</section>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Manufacturers main — üreticiler                                    */
/* ------------------------------------------------------------------ */
type Manufacturer = {
	name: string;
	domain: string;
	country: string;
	flag: string;
	founded: number;
	productCount: number;
	rating: number;
	followers: string;
	desc: string;
	premium?: boolean;
	verified?: boolean;
	cover: string;
	scale: string;
	parentCompany: string;
	activeListings: number;
	history: string;
	specialty: string[];
	popularModels: string[];
};

const manufacturers: Manufacturer[] = [
	{
		name: 'Hot Wheels',
		domain: 'hotwheels.com',
		country: 'ABD',
		flag: '🇺🇸',
		founded: 1968,
		productCount: 348,
		rating: 4.9,
		followers: '12K',
		desc: 'Dünyanın en popüler diecast marka. Koleksiyonerlerin ve çocukların vazgeçilmezi.',
		premium: true,
		verified: true,
		cover: 'from-primary-500 via-primary-400 to-primary-300',
		scale: '1:64',
		parentCompany: 'Mattel',
		activeListings: 3,
		history:
			"Elliot Handler tarafından 1968'de kurulan Hot Wheels, yarış performansına odaklanan ilk oyuncak araba markasıdır. İlk yılında 16 model ile başlayan marka, bugün milyarlarca araba üretti.",
		specialty: [
			'Fantasy & Licensed araçlar',
			'Treasure Hunts',
			'Super Treasure Hunts',
		],
		popularModels: [
			'Nissan Skyline GT-R',
			'Twin Mill',
			"'67 Camaro",
			'Bone Shaker',
			'Toyota AE86',
		],
	},
	{
		name: 'Tomica',
		domain: 'takaratomy.co.jp',
		country: 'Japonya',
		flag: '🇯🇵',
		founded: 1970,
		productCount: 256,
		rating: 4.8,
		followers: '8.4K',
		desc: 'Takara Tomy çatısı altında üretilen Japonya yapımı detaylı diecast modeller.',
		premium: true,
		verified: true,
		cover: 'from-secondary-500 via-primary-400 to-primary-200',
		scale: '1:64',
		parentCompany: 'Takara Tomy',
		activeListings: 5,
		history:
			"1970'te Japonya'da kurulan Tomica, yüksek detay seviyesi ve Japon araç kültürünü yansıtan modelleriyle koleksiyoner pazarında zirvede yer aldı.",
		specialty: ['Japon klasikleri', 'JDM modelleri', 'Premium Tomica'],
		popularModels: [
			'Toyota Supra A80',
			'Honda NSX',
			'Skyline GT-R R34',
			'Mazda RX-7',
			'Subaru Impreza WRX',
		],
	},
	{
		name: 'Maisto',
		domain: 'maisto.com',
		country: 'İtalya',
		flag: '🇮🇹',
		founded: 1990,
		productCount: 198,
		rating: 4.5,
		followers: '5.2K',
		desc: 'Geniş ölçek yelpazesi ve uygun fiyatlı koleksiyon modelleriyle bilinen marka.',
		verified: true,
		cover: 'from-secondary-700 via-secondary-500 to-secondary-400',
		scale: '1:24',
		parentCompany: 'Maisto International',
		activeListings: 7,
		history:
			"1990'da İtalya'da kurulan Maisto, geniş ölçek seçenekleri ve film lisanslı modelleriyle hızla küresel bir marka hâline geldi.",
		specialty: [
			'Special Edition',
			'Need For Speed lisanslı',
			'1:18 yarış araçları',
		],
		popularModels: [
			'BMW M3 GTR NFS',
			'Lamborghini Aventador',
			'Ford GT 2017',
			'Audi RS6 Avant',
			'Porsche 911 GT2',
		],
	},
	{
		name: 'Bburago',
		domain: 'bburago.com',
		country: 'İtalya',
		flag: '🇮🇹',
		founded: 1974,
		productCount: 142,
		rating: 4.7,
		followers: '6.8K',
		desc: 'Ferrari, Lamborghini, Maserati gibi İtalyan klasiklerinde sektörün lideri.',
		premium: true,
		verified: true,
		cover: 'from-primary-400 via-primary-300 to-primary-100',
		scale: '1:18',
		parentCompany: 'May Cheong Group',
		activeListings: 4,
		history:
			"İtalya'da 1974'te kurulan Bburago, Ferrari ve diğer İtalyan ikon araçların en sevilen üreticisi olarak öne çıktı. 'Race & Play' serisi koleksiyonerlerin vazgeçilmezi.",
		specialty: ['Ferrari serisi', 'Race & Play', '1:18 premium'],
		popularModels: [
			'Ferrari F40',
			'Ferrari Enzo',
			'Lamborghini Diablo',
			'Maserati GranTurismo',
			'Ferrari LaFerrari',
		],
	},
	{
		name: 'Greenlight',
		domain: 'greenlightcollectibles.com',
		country: 'ABD',
		flag: '🇺🇸',
		founded: 2003,
		productCount: 87,
		rating: 4.6,
		followers: '3.1K',
		desc: 'Hollywood film araçları ve gerçek lisanslı modelleriyle öne çıkar.',
		verified: true,
		cover: 'from-primary-300 via-secondary-300 to-secondary-500',
		scale: '1:18',
		parentCompany: 'Greenlight Collectibles',
		activeListings: 2,
		history:
			"2003'te Indianapolis'te kurulan Greenlight, Hollywood'un ikonik film araçlarını lisanslı olarak sunan ilk üretici olarak yola çıktı.",
		specialty: ['Hollywood lisanslı', 'TV Series araçlar', 'Vintage Pickups'],
		popularModels: [
			'Bullitt Mustang',
			'Eleanor Mustang GT500',
			'Smokey & The Bandit Trans Am',
			'Dukes of Hazzard Charger',
			'Mad Max Falcon',
		],
	},
	{
		name: 'Kyosho',
		domain: 'kyosho.com',
		country: 'Japonya',
		flag: '🇯🇵',
		founded: 1963,
		productCount: 56,
		rating: 4.8,
		followers: '4.2K',
		desc: 'Premium 1:18 ölçek modellerinde Japonya yapımı kalite standardı.',
		premium: true,
		verified: true,
		cover: 'from-secondary-700 via-secondary-500 to-primary-400',
		scale: '1:18',
		parentCompany: 'Kyosho Corporation',
		activeListings: 1,
		history:
			"1963'te Japonya'da kurulan Kyosho, RC araç üretimine başladı; sonradan diecast model alanında üst segment koleksiyonerlerinin tercih ettiği marka oldu.",
		specialty: [
			'Porsche koleksiyonu',
			'Japonya yapımı premium',
			'Sınırlı edisyon',
		],
		popularModels: [
			'Porsche 911 GT3 RS',
			'Mercedes-AMG GT R',
			'Lamborghini Huracan',
			'Lexus LFA',
			'BMW M4 CSL',
		],
	},
	{
		name: 'AUTOart',
		domain: 'autoartmodels.com',
		country: 'Hong Kong',
		flag: '🇭🇰',
		founded: 1996,
		productCount: 42,
		rating: 4.9,
		followers: '5.6K',
		desc: 'Composite ve diecast karışımı premium koleksiyon modellerinde dünya çapında ün.',
		premium: true,
		verified: true,
		cover: 'from-secondary-800 via-secondary-600 to-secondary-400',
		scale: '1:18',
		parentCompany: 'AUTOart Models Ltd.',
		activeListings: 1,
		history:
			"1996'da Hong Kong'da kurulan AUTOart, Composite teknolojisiyle ürettiği yüksek detaylı modelleriyle premium koleksiyoner pazarının zirvesinde.",
		specialty: [
			'Composite serisi',
			'Signature edition',
			'Millenium koleksiyon',
		],
		popularModels: [
			'Aston Martin DB11',
			'Lamborghini Centenario',
			'Bugatti Chiron',
			'Pagani Huayra',
			'Koenigsegg Agera',
		],
	},
	{
		name: 'Minichamps',
		domain: 'minichamps.de',
		country: 'Almanya',
		flag: '🇩🇪',
		founded: 1990,
		productCount: 38,
		rating: 4.7,
		followers: '2.8K',
		desc: 'Motor sporları ve nadide üretim sayılarıyla koleksiyoner pazarının gözdesi.',
		verified: true,
		cover: 'from-neutral-500 via-secondary-400 to-secondary-600',
		scale: '1:43',
		parentCompany: "Paul's Model Art",
		activeListings: 2,
		history:
			"1990'da Almanya'da kurulan Minichamps, F1 ve MotoGP araçlarının en geniş arşiv koleksiyonuna sahip üreticilerden biri.",
		specialty: ['Formula 1', 'MotoGP', 'Le Mans araçları'],
		popularModels: [
			'McLaren MP4/4 Senna',
			'Ferrari F2002 Schumacher',
			'Red Bull RB9 Vettel',
			'Yamaha M1 Rossi',
			'Mercedes W11 Hamilton',
		],
	},
	{
		name: 'Welly',
		domain: 'welly.com.hk',
		country: 'Çin',
		flag: '🇨🇳',
		founded: 1979,
		productCount: 124,
		rating: 4.4,
		followers: '2.4K',
		desc: 'Geniş ürün yelpazesi ve uygun fiyat-kalite dengesi sunan üretici.',
		cover: 'from-primary-300 via-primary-200 to-neutral-200',
		scale: '1:24',
		parentCompany: 'Welly Diecast Manufactory',
		activeListings: 3,
		history:
			"1979'da Hong Kong'da kurulan Welly, ekonomik fiyatlı diecast modeller alanında dünya çapında en yaygın üreticilerden biri.",
		specialty: ['Klasik 1:24', 'Bisikletler', 'Lisanslı modeller'],
		popularModels: [
			'Mercedes-Benz SLR McLaren',
			'BMW i8 Spyder',
			'Audi R8 V10',
			'Porsche Boxster',
			'Volkswagen Beetle',
		],
	},
	{
		name: 'Solido',
		domain: 'solido.com',
		country: 'Fransa',
		flag: '🇫🇷',
		founded: 1932,
		productCount: 67,
		rating: 4.6,
		followers: '1.9K',
		desc: 'Fransız klasik ve vintage modellerinde köklü üretim geleneği.',
		verified: true,
		cover: 'from-secondary-300 via-neutral-300 to-primary-300',
		scale: '1:18',
		parentCompany: 'Solido (Simba Smoby)',
		activeListings: 2,
		history:
			"1932'de Fransa'da kurulan Solido, sektörün en köklü üreticilerinden biri. Vintage Avrupa otomobillerinde otorite kabul edilir.",
		specialty: [
			'Fransız klasikleri',
			'Vintage 1950-70',
			'Citroën & Renault arşivi',
		],
		popularModels: [
			'Citroën DS',
			'Peugeot 205 GTI',
			'Renault 5 Turbo',
			'Alpine A110',
			'Citroën 2CV',
		],
	},
	{
		name: 'NoreV',
		domain: 'norev.com',
		country: 'Fransa',
		flag: '🇫🇷',
		founded: 1953,
		productCount: 58,
		rating: 4.5,
		followers: '1.6K',
		desc: 'Avrupa otomobillerinin detaylı 1:18 koleksiyon modelleri.',
		cover: 'from-neutral-300 via-secondary-300 to-secondary-500',
		scale: '1:18',
		parentCompany: 'NoreV S.A.',
		activeListings: 1,
		history:
			"1953'te Lyon'da kurulan NoreV, Fransız otomotiv markalarının resmi lisansıyla detaylı modeller üreten köklü bir Avrupa üreticisi.",
		specialty: [
			'Renault arşivi',
			'Mercedes klasikleri',
			'Sınırlı sayıda edisyon',
		],
		popularModels: [
			'Renault Megane RS',
			'Peugeot 504',
			'Mercedes-Benz 300 SL',
			'Renault Clio Sport',
			'Citroën SM',
		],
	},
	{
		name: 'Mattel',
		domain: 'mattel.com',
		country: 'ABD',
		flag: '🇺🇸',
		founded: 1945,
		productCount: 412,
		rating: 4.7,
		followers: '9.2K',
		desc: 'Hot Wheels ve Matchbox markalarının da arkasındaki dev oyuncak üreticisi.',
		premium: true,
		verified: true,
		cover: 'from-primary-500 via-secondary-500 to-secondary-700',
		scale: '1:64',
		parentCompany: 'Mattel Inc.',
		activeListings: 8,
		history:
			"1945'te kurulan Mattel, Hot Wheels (1968) ve Matchbox (2001) markalarıyla dünya diecast pazarının yarısından fazlasını domine ediyor.",
		specialty: ['Hot Wheels', 'Matchbox', 'Disney Cars'],
		popularModels: [
			'Hot Wheels Treasure Hunts',
			'Matchbox Vintage Series',
			'Cars Lightning McQueen',
			'Hot Wheels RLC',
			'Matchbox Power Grabs',
		],
	},
];

function ManufacturerCard({ m }: { m: Manufacturer }) {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={`overflow-hidden rounded-2xl border transition ${
				open
					? 'border-primary-300 bg-background shadow-sm'
					: 'border-transparent bg-neutral-50 hover:bg-neutral-100'
			}`}>
			{/* Header satırı */}
			<button
				onClick={() => setOpen((o) => !o)}
				className='flex w-full items-start gap-4 p-4 text-left sm:p-5'>
				<div
					className={`relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-background p-3 ring-1 ring-neutral-200 sm:size-20`}>
					<img
						src={`https://www.google.com/s2/favicons?domain=${m.domain}&sz=128`}
						alt={`${m.name} logo`}
						loading='lazy'
						className='size-full object-contain'
					/>
				</div>
				<div className='min-w-0 flex-1'>
					<div className='flex flex-wrap items-center gap-2'>
						<h3 className='text-base font-bold text-secondary-900 sm:text-lg'>
							{m.name}
						</h3>
						<span className='text-base'>{m.flag}</span>
						{m.verified ? (
							<BadgeCheck className='size-4 text-success-500' />
						) : null}
						{m.premium ? <Badge variant='default'>Premium</Badge> : null}
					</div>
					<p className='mt-1 line-clamp-2 text-sm text-neutral-600'>{m.desc}</p>
					<div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500'>
						<span className='flex items-center gap-1'>
							<Calendar className='size-3.5' /> {m.founded}
						</span>
						<span className='flex items-center gap-1'>
							<Globe className='size-3.5' /> {m.parentCompany}
						</span>
						<span className='font-semibold text-secondary-900'>{m.scale}</span>
					</div>
				</div>
				<div className='flex shrink-0 flex-col items-end gap-2'>
					<Badge
						variant='primarySoft'
						className='bg-primary-50'>
						{m.scale}
					</Badge>
					<ChevronDown
						className={`size-5 text-neutral-400 transition ${
							open ? 'rotate-180' : ''
						}`}
					/>
				</div>
			</button>

			{/* Detay (açıkken) */}
			{open ? (
				<div className='border-t border-neutral-200 px-4 pb-5 sm:px-5'>
					<div className='grid gap-6 pt-5 lg:grid-cols-[minmax(0,1fr)_280px]'>
						<div className='space-y-4 min-w-0'>
							<div>
								<div className='flex items-center gap-2'>
									<Calendar className='size-4 text-primary-500' />
									<h4 className='text-sm font-bold text-secondary-900'>
										Üretici Tarihi
									</h4>
								</div>
								<p className='mt-2 text-sm leading-relaxed text-neutral-600'>
									{m.history}
								</p>
							</div>
							<div className='rounded-xl bg-primary-50 p-4'>
								<div className='text-sm font-bold text-primary-700'>
									Uzmanlık Alanı
								</div>
								<div className='mt-1 text-sm text-primary-600'>
									{m.specialty.join(', ')}
								</div>
							</div>
						</div>
						<div className='min-w-0'>
							<div className='flex items-center gap-2'>
								<Sparkles className='size-4 text-primary-500' />
								<h4 className='text-sm font-bold text-secondary-900'>
									Popüler Modeller
								</h4>
							</div>
							<ul className='mt-2 space-y-1.5 text-sm text-secondary-900'>
								{m.popularModels.map((mdl) => (
									<li
										key={mdl}
										className='flex items-center gap-2'>
										<span className='size-1.5 shrink-0 rounded-full bg-neutral-400' />
										{mdl}
									</li>
								))}
							</ul>
							<a
								href='#'
								onClick={(e) => e.preventDefault()}
								className='mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700'>
								Tüm {m.name} ilanları <ChevronRight className='size-4' />
							</a>
						</div>
					</div>
					<div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-neutral-200 pt-4 text-xs'>
						<div>
							<span className='font-bold text-secondary-900'>Kuruluş: </span>
							<span className='text-neutral-600'>
								{m.founded}, {m.country}
							</span>
						</div>
						<div>
							<span className='font-bold text-secondary-900'>Ana Şirket: </span>
							<span className='text-neutral-600'>{m.parentCompany}</span>
						</div>
						<div>
							<span className='font-bold text-secondary-900'>Ölçek: </span>
							<span className='text-neutral-600'>{m.scale}</span>
						</div>
						<div>
							<span className='font-bold text-secondary-900'>Aktif İlan: </span>
							<span className='font-semibold text-primary-600'>
								{m.activeListings}
							</span>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

function ManufacturersMain() {
	const stats = [
		{ value: '21', label: 'Toplam Marka' },
		{ value: '8', label: 'Premium Üretici' },
		{ value: '15+', label: 'Ülke' },
		{ value: '70+', label: 'Yıl Geçmiş' },
	];
	const filters = ['Tümü', 'Premium', 'Onaylı', 'Aktif', 'Yeni'];
	return (
		<main className='mx-auto max-w-[1280px] space-y-6 px-4 py-6 sm:px-6 sm:py-10'>
			<div className='flex flex-wrap items-center justify-between gap-3'>
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Üreticiler
				</h1>
			</div>

			{/* Üst metric banner */}
			<section className='space-y-5 rounded-2xl bg-neutral-50 p-6 sm:p-8'>
				<div>
					<SectionHeading>Diecast Üreticiler Rehberi</SectionHeading>
					<p className='mt-2 max-w-2xl text-sm text-neutral-600'>
						Diecast modeller dünyasının köklü üreticilerini keşfet. Her birinin
						kuruluş hikayesini, üretim odağını ve sundukları ürün yelpazesini
						burada bulabilirsin.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{stats.map((s) => (
						<div
							key={s.label}
							className='rounded-xl bg-background px-4 py-4 text-center'>
							<div className='text-2xl font-extrabold text-secondary-900 sm:text-3xl'>
								{s.value}
							</div>
							<div className='mt-1 text-xs font-medium text-neutral-500'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Filter bar */}
			<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
				<div className='relative max-w-md flex-1'>
					<Search className='pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
					<Input
						placeholder='Marka, ülke veya kategori ara...'
						className='h-10 pl-10 text-sm'
					/>
				</div>
				<div className='flex flex-wrap gap-1.5'>
					{filters.map((f, i) => (
						<button
							key={f}
							className={
								i === 0
									? 'rounded-lg bg-primary-500 px-3.5 py-2 text-xs font-semibold text-primary-foreground'
									: 'rounded-lg border border-neutral-200 bg-background px-3.5 py-2 text-xs font-semibold text-secondary-900 transition hover:border-primary-300 hover:text-primary-600'
							}>
							{f}
						</button>
					))}
				</div>
			</div>

			{/* Grid */}
			<div className='space-y-3'>
				{manufacturers.map((m) => (
					<ManufacturerCard
						key={m.name}
						m={m}
					/>
				))}
			</div>

			{/* Pagination */}
			<div className='flex items-center justify-center gap-1 pt-4'>
				<PageButton>
					<ChevronLeft className='size-4' />
				</PageButton>
				<PageButton active>1</PageButton>
				<PageButton>2</PageButton>
				<PageButton>3</PageButton>
				<PageButton>
					<ChevronRight className='size-4' />
				</PageButton>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Cart main — sepet sayfası                                          */
/* ------------------------------------------------------------------ */
type CartItem = {
	title: string;
	seller: string;
	price: string;
	cents: string;
	tone: string;
};

const cartItems: CartItem[] = [
	{
		title: 'Tamiya 1950s Vintage Classic',
		seller: '@MehmetDiecast',
		price: '565',
		cents: '08',
		tone: 'from-primary-300 to-primary-100',
	},
];

function CartMain({
	onListing,
	onCheckout,
}: {
	onListing?: () => void;
	onCheckout?: () => void;
}) {
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<h1 className='font-display mb-6 text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
				Sepetim
			</h1>

			<div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]'>
				{/* Sol: ürün listesi */}
				<div className='space-y-3'>
					{cartItems.length === 0 ? (
						<div className='rounded-2xl bg-neutral-50 p-10 text-center text-sm text-neutral-500'>
							Sepetin boş.
						</div>
					) : (
						cartItems.map((item, i) => (
							<div
								key={`${item.title}-${i}`}
								className='flex items-center gap-4 rounded-2xl bg-neutral-50 p-4'>
								<div
									className={`relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${item.tone}`}>
									<img
										src={placeholderImg(`cart-${item.title}`, 200)}
										alt={item.title}
										loading='lazy'
										className='absolute inset-0 size-full object-cover'
									/>
								</div>
								<div className='min-w-0 flex-1'>
									<h3 className='truncate text-base font-bold text-secondary-900'>
										{item.title}
									</h3>
									<div className='text-xs text-neutral-500'>
										Satıcı:{' '}
										<span className='font-semibold text-secondary-900'>
											{item.seller}
										</span>
									</div>
									<div className='mt-1 text-lg font-extrabold text-secondary-900'>
										{item.price},{item.cents} TL
									</div>
								</div>
								<button
									aria-label='Sepetten kaldır'
									className='grid size-9 shrink-0 place-items-center rounded-lg text-neutral-500 transition hover:bg-danger-50 hover:text-danger-600'>
									<Trash2 className='size-4' />
								</button>
							</div>
						))
					)}
				</div>

				{/* Sağ: sipariş özeti */}
				<aside className='lg:sticky lg:top-4 lg:self-start'>
					<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<h2 className='font-display text-base font-bold text-secondary-900'>
							Sipariş Özeti
						</h2>
						<div className='space-y-2 text-sm text-neutral-600'>
							<div className='flex items-center justify-between'>
								<span>Ara Toplam</span>
								<span className='font-semibold text-secondary-900'>
									565,08 TL
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<span>Kargo</span>
								<span className='font-semibold text-secondary-900'>₺0,00</span>
							</div>
						</div>
						<div className='flex items-baseline justify-between border-t border-neutral-200 pt-3'>
							<span className='text-sm font-bold text-secondary-900'>
								Toplam
							</span>
							<span className='text-2xl font-extrabold text-secondary-900'>
								₺565,08
							</span>
						</div>
						<button
							onClick={onCheckout}
							className='inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary-500 text-sm font-semibold text-primary-foreground transition hover:bg-primary-600'>
							Ödemeye Geç
						</button>
						<button
							onClick={onListing}
							className='block w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700'>
							Alışverişe Devam Et
						</button>
					</div>
				</aside>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Create listing main — yeni ilan oluştur                            */
/* ------------------------------------------------------------------ */
function FormSectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
			<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
			{children}
		</h2>
	);
}

function FormField({
	label,
	required,
	hint,
	children,
	className,
}: {
	label: string;
	required?: boolean;
	hint?: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`space-y-1.5 ${className ?? ''}`}>
			<label className='block text-sm font-medium text-secondary-900'>
				{label}
				{required ? <span className='ml-0.5 text-primary-600'>*</span> : null}
			</label>
			{children}
			{hint ? <p className='text-xs text-neutral-500'>{hint}</p> : null}
		</div>
	);
}

function ToggleRow({
	label,
	caption,
	defaultOn,
}: {
	label: string;
	caption: string;
	defaultOn?: boolean;
}) {
	const [on, setOn] = useState(!!defaultOn);
	return (
		<div className='flex items-start justify-between gap-4 rounded-xl bg-background p-4'>
			<div className='min-w-0'>
				<div className='text-sm font-semibold text-secondary-900'>{label}</div>
				<div className='mt-0.5 text-xs text-neutral-500'>{caption}</div>
			</div>
			<button
				type='button'
				role='switch'
				aria-checked={on}
				onClick={() => setOn((o) => !o)}
				className={`relative h-6 w-11 shrink-0 rounded-full transition ${
					on ? 'bg-primary-500' : 'bg-neutral-300'
				}`}>
				<span
					className={`absolute top-0.5 size-5 rounded-full bg-background shadow transition ${
						on ? 'translate-x-[22px]' : 'translate-x-0.5'
					}`}
				/>
			</button>
		</div>
	);
}

function SelectField({
	options,
	defaultValue,
	placeholder,
	disabled,
}: {
	options: string[];
	defaultValue?: string;
	placeholder?: string;
	disabled?: boolean;
}) {
	return (
		<Select
			defaultValue={defaultValue}
			disabled={disabled}>
			<SelectTrigger className='h-10 w-full rounded-lg border-neutral-200 bg-background'>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{options.map((o) => (
					<SelectItem
						key={o}
						value={o}>
						{o}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

function CreateListingMain() {
	const tips = [
		'Yüksek kaliteli, net fotoğraflar yükle',
		'Ürünün gerçek durumunu detaylıca açıkla',
		'Rekabetçi ve adil bir fiyat belirle',
		'Marka, model, ölçek bilgilerini eksiksiz doldur',
		'Takas seçeneğini açarsan ilanın daha çok görüntülenir',
	];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			{/* Başlık */}
			<header className='mb-6'>
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Yeni İlan Oluştur
				</h1>
			</header>

			<form
				onSubmit={(e) => e.preventDefault()}
				className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-6'>
				{/* Sağ kolon — mobilde grid sırası order ile dağılır, desktop'ta tek flex sütun */}
				<div className='contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-4'>
					{/* İlan limiti — mobilde en üst, desktop sağ üst */}
					<div className='order-1 h-fit space-y-4 rounded-2xl border border-warning-200 bg-warning-50 p-5 text-sm lg:order-none'>
						<div className='flex items-center justify-between gap-2'>
							<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
								<span className='inline-block h-5 w-1 rounded-full bg-warning-500' />
								İlan Hakkı
							</h2>
							<span className='font-bold text-warning-700'>5 / 200</span>
						</div>
						<div>
							<div className='h-1.5 overflow-hidden rounded-full bg-warning-200/60'>
								<div
									className='h-full bg-warning-500'
									style={{ width: '2.5%' }}
								/>
							</div>
							<div className='mt-1.5 text-xs text-warning-600'>
								195 ilan hakkın kaldı
							</div>
						</div>
					</div>

					{/* İpuçları — mobilde 2., desktop sağ orta */}
					<div className='order-2 h-fit space-y-4 rounded-2xl bg-neutral-50 p-5 lg:order-none'>
						<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
							<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
							Daha çok satış için ipuçları
						</h2>
						<ul className='space-y-2 text-sm text-neutral-600'>
							{tips.map((t) => (
								<li
									key={t}
									className='flex items-start gap-2'>
									<span className='mt-0.5 grid size-4 shrink-0 place-items-center rounded-md bg-primary-500 text-primary-foreground'>
										<Check
											className='size-3'
											strokeWidth={3}
										/>
									</span>
									{t}
								</li>
							))}
						</ul>
					</div>

					{/* Aksiyon butonu — mobilde en altta, desktop sağ alt */}
					<div className='order-4 h-fit lg:order-none'>
						<Button
							type='submit'
							className='h-11 w-full'>
							İlanı Oluştur
						</Button>
					</div>
				</div>

				{/* SOL — form section'ları (mobilde 3., desktop sol kolon) */}
				<div className='order-3 min-w-0 space-y-5 lg:order-none lg:col-start-1 lg:row-start-1'>
					{/* TEMEL BİLGİLER */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<FormSectionTitle>Temel Bilgiler</FormSectionTitle>
						<FormField
							label='Başlık'
							required>
							<Input
								placeholder="Örn: Hot Wheels '69 Camaro Z28"
								className='h-10 rounded-lg border-neutral-200 bg-background'
							/>
						</FormField>
						<FormField label='Açıklama'>
							<textarea
								rows={4}
								placeholder='Ürün hakkında detaylı bilgi...'
								className='w-full rounded-lg border border-neutral-200 bg-background px-3 py-2 text-sm text-secondary-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
							/>
						</FormField>
					</section>

					{/* ÜRÜN DETAYLARI */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<FormSectionTitle>Ürün Detayları</FormSectionTitle>
						<div className='grid gap-4 sm:grid-cols-2'>
							<FormField
								label='Ürün Tipi'
								required>
								<SelectField
									placeholder='Kategori Seçin'
									options={[
										'Otomobil',
										'Motosiklet',
										'Kamyon & TIR',
										'Uçak',
										'Aksiyon Figürü',
										'Diorama',
										'Vintage',
									]}
								/>
							</FormField>
							<FormField
								label='Ürün Durumu'
								required>
								<SelectField
									defaultValue='Mükemmel'
									options={[
										'Mükemmel',
										'Çok İyi',
										'İyi',
										'Orta',
										'Tamir Gerekli',
									]}
								/>
							</FormField>
							<FormField label='Marka'>
								<SelectField
									placeholder='Marka Seçin'
									options={[
										'Hot Wheels',
										'Tomica',
										'Bburago',
										'Maisto',
										'Kyosho',
										'AUTOart',
										'Minichamps',
									]}
								/>
							</FormField>
							<FormField label='Model'>
								<SelectField
									disabled
									placeholder='Önce marka seçin'
									options={[]}
								/>
							</FormField>
							<FormField label='Ölçek'>
								<SelectField
									defaultValue='1:64'
									options={['1:18', '1:24', '1:43', '1:64', 'Diğer']}
								/>
							</FormField>
							<FormField label='Malzeme'>
								<SelectField
									placeholder='Malzeme seçin'
									options={[
										'Diecast Metal',
										'Plastik',
										'Reçine',
										'Composite',
										'Karışık',
									]}
								/>
							</FormField>
							<FormField label='Üretici'>
								<SelectField
									placeholder='Üretici seçin'
									options={[
										'Mattel',
										'Takara Tomy',
										'May Cheong',
										'Maisto Int.',
										'Greenlight',
									]}
								/>
							</FormField>
							<FormField label='Çıkış Yılı'>
								<SelectField
									placeholder='Yıl seçin'
									options={[
										'2026',
										'2025',
										'2024',
										'2023',
										'2022',
										'2021',
										'2020',
										'Daha eski',
									]}
								/>
							</FormField>
						</div>
					</section>

					{/* SEÇENEKLER */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<FormSectionTitle>Seçenekler</FormSectionTitle>
						<ToggleRow
							label='Takas Aktif'
							caption='Bu ürünü takas için de açık tutar'
						/>
						<ToggleRow
							label='Set / Paket'
							caption="Tek ilanda birden fazla model (örn. 5'li paket, garaj seti)"
						/>
					</section>

					{/* FİYATLANDIRMA */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<FormSectionTitle>Fiyatlandırma</FormSectionTitle>
						<div className='grid gap-4 sm:grid-cols-2'>
							<FormField
								label='Fiyat (₺)'
								required>
								<Input
									placeholder='0.00'
									className='h-10 rounded-lg border-neutral-200 bg-background'
								/>
							</FormField>
							<FormField
								label='Stok Miktarı'
								hint='Boş bırakırsanız sınırsız stok'>
								<Input
									placeholder='Sınırsız'
									className='h-10 rounded-lg border-neutral-200 bg-background'
								/>
							</FormField>
						</div>
					</section>

					{/* GÖRSELLER */}
					<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
						<FormSectionTitle>Görseller</FormSectionTitle>
						<button
							type='button'
							className='flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-neutral-300 bg-background p-8 text-center transition hover:border-primary-300 hover:bg-primary-50/40'>
							<ImagePlus className='size-7 text-neutral-400' />
							<span className='text-sm font-semibold text-secondary-900'>
								Görsel yüklemek için tıklayın
							</span>
							<span className='text-xs text-neutral-500'>0 / 10 yüklendi</span>
						</button>
					</section>
				</div>
			</form>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Checkout main — 3 adımlı ödeme akışı                               */
/* ------------------------------------------------------------------ */
type CheckoutStep = 1 | 2 | 3;

function CheckoutStepper({ step }: { step: CheckoutStep }) {
	const steps: { num: CheckoutStep; label: string }[] = [
		{ num: 1, label: 'Adres' },
		{ num: 2, label: 'Ödeme' },
		{ num: 3, label: 'Onay' },
	];
	return (
		<div className='mb-6 flex items-center justify-center gap-2 sm:gap-3'>
			{steps.map((s, i) => {
				const done = s.num < step;
				const active = s.num === step;
				return (
					<div
						key={s.num}
						className='flex items-center gap-2 sm:gap-3'>
						<div className='flex items-center gap-2'>
							<div
								className={`grid size-8 shrink-0 place-items-center rounded-md text-sm font-bold transition ${
									done || active
										? 'bg-primary-500 text-primary-foreground'
										: 'bg-neutral-200 text-neutral-500'
								}`}>
								{done ? (
									<Check
										className='size-4'
										strokeWidth={3}
									/>
								) : (
									s.num
								)}
							</div>
							<span
								className={`text-sm font-semibold ${
									active || done ? 'text-secondary-900' : 'text-neutral-500'
								}`}>
								{s.label}
							</span>
						</div>
						{i < steps.length - 1 ? (
							<div
								className={`hidden h-px w-8 sm:block sm:w-12 ${
									done ? 'bg-primary-500' : 'bg-neutral-300'
								}`}
							/>
						) : null}
					</div>
				);
			})}
		</div>
	);
}

function OrderSummary() {
	return (
		<aside className='lg:sticky lg:top-4 lg:self-start'>
			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Sipariş Özeti
				</h2>
				<div className='flex items-center gap-3'>
					<div className='relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-300 to-primary-100'>
						<img
							src={placeholderImg('Tamiya 1950s Vintage Classic', 160)}
							alt='Tamiya 1950s Vintage Classic'
							loading='lazy'
							className='absolute inset-0 size-full object-cover'
						/>
					</div>
					<div className='min-w-0 flex-1'>
						<div className='truncate text-sm font-semibold text-secondary-900'>
							Tamiya 1950s Vintage Classic
						</div>
						<div className='text-xs text-neutral-500'>565,08 TL</div>
					</div>
				</div>
				<div className='space-y-2 border-t border-neutral-200 pt-3 text-sm text-neutral-600'>
					<div className='flex items-center justify-between'>
						<span>Ara Toplam</span>
						<span className='font-semibold text-secondary-900'>565,08 TL</span>
					</div>
					<div className='flex items-center justify-between'>
						<span>Kargo (Aras)</span>
						<span className='font-semibold text-secondary-900'>0,00 TL</span>
					</div>
				</div>
				<div className='flex items-baseline justify-between border-t border-neutral-200 pt-3'>
					<span className='text-sm font-bold text-secondary-900'>Toplam</span>
					<span className='text-2xl font-extrabold text-secondary-900'>
						565,08 TL
					</span>
				</div>
			</div>
		</aside>
	);
}

function RadioCard({
	checked,
	onClick,
	children,
}: {
	checked?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
				checked
					? 'border-primary-500 bg-primary-50'
					: 'border-neutral-200 bg-background hover:border-primary-300'
			}`}>
			<span
				className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border-2 ${
					checked ? 'border-primary-500' : 'border-neutral-300'
				}`}>
				{checked ? (
					<span className='size-2 rounded-full bg-primary-500' />
				) : null}
			</span>
			<span className='flex-1'>{children}</span>
		</button>
	);
}

function AddressStep({ onNext }: { onNext: () => void }) {
	const [address, setAddress] = useState('default');
	const [billing, setBilling] = useState('same');
	return (
		<div className='space-y-5'>
			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-lg font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Teslimat Adresi
				</h2>
				<RadioCard
					checked={address === 'default'}
					onClick={() => setAddress('default')}>
					<div className='font-bold text-secondary-900'>Ahmet Koleksiyoncu</div>
					<div className='mt-0.5 text-xs text-neutral-500'>
						+90 555 000 0100
					</div>
					<div className='mt-1 text-sm text-secondary-900'>
						Ahmet Koleksiyoncu Mahallesi, Koleksiyon Sokak No: 3, Nilüfer/Bursa
					</div>
				</RadioCard>
				<button
					type='button'
					className='flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-neutral-300 bg-background py-4 text-sm font-semibold text-neutral-500 transition hover:border-primary-300 hover:text-primary-600'>
					<Plus className='size-4' /> Yeni Adres Ekle
				</button>
			</div>

			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Fatura Adresi
				</h2>
				<RadioCard
					checked={billing === 'same'}
					onClick={() => setBilling('same')}>
					<span className='text-sm font-medium text-secondary-900'>
						Fatura adresi teslimat adresiyle aynı
					</span>
				</RadioCard>
				<RadioCard
					checked={billing === 'different'}
					onClick={() => setBilling('different')}>
					<span className='text-sm font-medium text-secondary-900'>
						Farklı fatura adresi kullan
					</span>
				</RadioCard>
			</div>

			<div className='flex justify-end'>
				<Button
					onClick={onNext}
					className='h-11 px-6'>
					Devam Et
				</Button>
			</div>
		</div>
	);
}

function PaymentStep({
	onBack,
	onNext,
}: {
	onBack: () => void;
	onNext: () => void;
}) {
	const [save, setSave] = useState(false);
	return (
		<div className='space-y-5'>
			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-lg font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Ödeme Yöntemi
				</h2>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-secondary-900'>
						Ödeme Yöntemi
					</label>
					<RadioCard checked>
						<div className='flex items-center justify-between gap-3'>
							<div>
								<div className='text-sm font-semibold text-secondary-900'>
									PayTR ile Öde
								</div>
								<div className='mt-0.5 text-xs text-neutral-500'>
									Kredi kartı ile güvenli ödeme
								</div>
							</div>
							<Store className='size-5 text-primary-500' />
						</div>
					</RadioCard>
				</div>
			</div>

			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Kart Bilgileri
				</h2>
				<FormField label='Kart Üzerindeki İsim'>
					<Input
						placeholder='AD SOYAD'
						className='h-10 rounded-lg border-neutral-200 bg-background uppercase'
					/>
				</FormField>
				<FormField label='Kart Numarası'>
					<Input
						placeholder='0000 0000 0000 0000'
						className='h-10 rounded-lg border-neutral-200 bg-background tracking-wider'
					/>
				</FormField>
				<div className='grid grid-cols-2 gap-4'>
					<FormField label='Son Kullanma Tarihi'>
						<Input
							placeholder='AA/YY'
							className='h-10 rounded-lg border-neutral-200 bg-background'
						/>
					</FormField>
					<FormField label='CVV/CVC'>
						<Input
							placeholder='***'
							className='h-10 rounded-lg border-neutral-200 bg-background'
						/>
					</FormField>
				</div>
				<label className='group flex cursor-pointer items-center gap-2.5 text-sm hover:text-primary-600'>
					<span className='relative inline-grid size-4 shrink-0 place-items-center'>
						<input
							type='checkbox'
							checked={save}
							onChange={(e) => setSave(e.target.checked)}
							className='peer absolute inset-0 size-full cursor-pointer appearance-none rounded border border-neutral-300 bg-background transition checked:border-primary-500 checked:bg-primary-500 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
						/>
						<Check
							className='pointer-events-none relative size-3 text-primary-foreground opacity-0 transition peer-checked:opacity-100'
							strokeWidth={3.5}
						/>
					</span>
					<span className='font-medium text-secondary-900'>
						Bu kartı gelecekteki alışverişlerim için kaydet
					</span>
				</label>
				<p className='flex items-center gap-1.5 text-xs text-success-700'>
					<ShieldCheck className='size-3.5' /> 256-bit SSL ile şifrelenmiş
					güvenli ödeme
				</p>
			</div>

			<div className='space-y-2 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Fatura Bilgisi
				</h2>
				<p className='text-sm text-neutral-600'>
					Ödeme tamamlandıktan sonra faturanız e-posta adresinize otomatik
					olarak gönderilecektir.
				</p>
				<p className='text-sm text-neutral-600'>
					Kurumsal fatura için profil sayfanızdan vergi bilgilerinizi
					güncelleyebilirsiniz.
				</p>
			</div>

			<div className='flex flex-wrap items-center justify-between gap-3'>
				<Button
					variant='outline'
					onClick={onBack}
					className='h-11 px-6'>
					Geri
				</Button>
				<Button
					onClick={onNext}
					className='h-11 px-6'>
					Devam Et
				</Button>
			</div>
		</div>
	);
}

function ConfirmStep({ onBack }: { onBack: () => void }) {
	return (
		<div className='space-y-5'>
			<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-lg font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Sipariş Özeti
				</h2>

				<div className='flex items-center gap-3 rounded-xl bg-background p-3'>
					<div className='relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-300 to-primary-100'>
						<img
							src={placeholderImg('Tamiya 1950s Vintage Classic', 200)}
							alt='Tamiya 1950s Vintage Classic'
							loading='lazy'
							className='absolute inset-0 size-full object-cover'
						/>
					</div>
					<div className='min-w-0 flex-1'>
						<div className='text-base font-bold text-secondary-900'>
							Tamiya 1950s Vintage Classic
						</div>
						<div className='text-xs text-neutral-500'>
							Satıcı: Mehmet Diecast
						</div>
					</div>
					<div className='shrink-0 text-base font-extrabold text-secondary-900'>
						565,08 TL
					</div>
				</div>

				<div className='rounded-xl bg-background p-4'>
					<div className='text-xs font-bold uppercase tracking-wider text-neutral-500'>
						Teslimat Adresi
					</div>
					<div className='mt-1.5 text-sm text-secondary-900'>
						Ahmet Koleksiyoncu, Ahmet Koleksiyoncu Mahallesi, Koleksiyon Sokak
						No: 3, Nilüfer/Bursa
					</div>
				</div>

				<div className='rounded-xl bg-background p-4'>
					<div className='text-xs font-bold uppercase tracking-wider text-neutral-500'>
						Ödeme Yöntemi
					</div>
					<div className='mt-1.5 text-sm font-semibold text-secondary-900'>
						PayTR ile Öde
					</div>
				</div>

				<div className='flex items-start gap-3 rounded-xl bg-success-50 p-4'>
					<ShieldCheck className='mt-0.5 size-5 shrink-0 text-success-600' />
					<div>
						<div className='text-sm font-bold text-success-700'>
							Güvenli Alışveriş
						</div>
						<div className='mt-0.5 text-xs text-success-600'>
							Ödemeniz şifreli olarak iletilir. Ürün elinize ulaşana kadar
							ödemeniz güvende tutulur.
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-wrap items-center justify-between gap-3'>
				<Button
					variant='outline'
					onClick={onBack}
					className='h-11 px-6'>
					Geri
				</Button>
				<Button className='h-11 gap-2 px-6'>
					<Wallet className='size-4' /> Onayla ve Öde (₺565,08)
				</Button>
			</div>
		</div>
	);
}

function CheckoutMain({ onCart }: { onCart?: () => void }) {
	const [step, setStep] = useState<CheckoutStep>(1);
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex items-center gap-3'>
				<button
					type='button'
					onClick={onCart}
					aria-label='Sepete dön'
					className='grid size-10 place-items-center rounded-lg text-neutral-500 transition hover:bg-neutral-100 hover:text-primary-600'>
					<ArrowLeft className='size-5' />
				</button>
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Ödeme
				</h1>
			</div>

			<CheckoutStepper step={step} />

			<div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]'>
				<div className='min-w-0'>
					{step === 1 ? (
						<AddressStep onNext={() => setStep(2)} />
					) : step === 2 ? (
						<PaymentStep
							onBack={() => setStep(1)}
							onNext={() => setStep(3)}
						/>
					) : (
						<ConfirmStep onBack={() => setStep(2)} />
					)}
				</div>
				<OrderSummary />
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Swaps main — takaslarım listesi                                    */
/* ------------------------------------------------------------------ */
type SwapStatus =
	| 'pending'
	| 'accepted'
	| 'shipping_both'
	| 'shipping_sent'
	| 'completed'
	| 'rejected'
	| 'cancelled';

type SwapItemData = {
	title: string;
	qty: string;
	amount: string;
	tone: string;
};

type Swap = {
	id: string;
	direction: 'Gönderilen Teklifler' | 'Gelen Teklifler';
	partner: string;
	status: SwapStatus;
	offered: SwapItemData;
	received: SwapItemData;
	diff: string;
	date: string;
};

const swapStatusMeta: Record<
	SwapStatus,
	{ label: string; variant: BadgeVariant }
> = {
	pending: { label: 'Beklemede', variant: 'warningSoft' },
	accepted: { label: 'Kabul Edildi', variant: 'successSoft' },
	shipping_both: { label: 'Her İkisi Kargoda', variant: 'primarySoft' },
	shipping_sent: { label: 'Gönderilen Kargoda', variant: 'primarySoft' },
	completed: { label: 'Tamamlandı', variant: 'successSoft' },
	rejected: { label: 'Reddedildi', variant: 'dangerSoft' },
	cancelled: { label: 'İptal Edildi', variant: 'neutralSoft' },
};

const swaps: Swap[] = [
	{
		id: '#TRD-MN8E0008-MX5T',
		direction: 'Gönderilen Teklifler',
		partner: 'Ali Premium',
		status: 'pending',
		offered: {
			title: 'Corolla',
			qty: '1x · 1.000,00 TL',
			amount: '1.000,00',
			tone: 'from-primary-300 to-primary-100',
		},
		received: {
			title: 'AUTOart Plymouth Ba…',
			qty: '1x · 2.869,87 TL',
			amount: '2.869,87',
			tone: 'from-secondary-300 to-secondary-100',
		},
		diff: '1.200,00',
		date: '21 Mart 2026',
	},
	{
		id: '#TRD-MM53RMV4-PA2R',
		direction: 'Gelen Teklifler',
		partner: 'Selin European',
		status: 'shipping_both',
		offered: {
			title: 'Honda Civic',
			qty: '1x · 1.234,00 TL',
			amount: '1.234,00',
			tone: 'from-secondary-200 to-primary-100',
		},
		received: {
			title: 'Minichamps BMW M4 …',
			qty: '1x · 668,87 TL',
			amount: '668,87',
			tone: 'from-secondary-400 to-secondary-200',
		},
		diff: '300,00',
		date: '17 Mart 2026',
	},
	{
		id: '#TRD-MMSCJ20T-Z3N',
		direction: 'Gönderilen Teklifler',
		partner: 'Ali Premium',
		status: 'accepted',
		offered: {
			title: 'F1 Car',
			qty: '1x · 1.000,00 TL',
			amount: '1.000,00',
			tone: 'from-primary-400 to-primary-200',
		},
		received: {
			title: 'RWS Titanic Model De…',
			qty: '1x · 552,38 TL',
			amount: '552,38',
			tone: 'from-secondary-400 to-secondary-200',
		},
		diff: '12.000,00',
		date: '15 Mart 2026',
	},
	{
		id: '#TRD-MMR9JJP3-MK2Q',
		direction: 'Gelen Teklifler',
		partner: 'Enno JDM',
		status: 'shipping_both',
		offered: {
			title: 'Tomica Toyota Hilux',
			qty: '1x · 105,44 TL',
			amount: '105,44',
			tone: 'from-primary-200 to-primary-100',
		},
		received: {
			title: 'Tomica Honda NSX Ty…',
			qty: '1x · 386,28 TL',
			amount: '386,28',
			tone: 'from-primary-300 to-primary-100',
		},
		diff: '125,91',
		date: '13 Mart 2026',
	},
	{
		id: '#TRD-MMK8DPLD-LXAB',
		direction: 'Gönderilen Teklifler',
		partner: 'Mustafa Trader',
		status: 'rejected',
		offered: {
			title: 'Greenlight Pontiac ST…',
			qty: '1x · 153,68 TL',
			amount: '153,68',
			tone: 'from-secondary-300 to-secondary-100',
		},
		received: {
			title: 'Greenlight 1969 Ford …',
			qty: '1x · 232,87 TL',
			amount: '232,87',
			tone: 'from-secondary-400 to-secondary-200',
		},
		diff: '79,19',
		date: '11 Mart 2026',
	},
	{
		id: '#TRD-MMK29DLT-Z2PZ',
		direction: 'Gönderilen Teklifler',
		partner: 'Mustafa Trader',
		status: 'completed',
		offered: {
			title: 'Greenlight Pontiac ST…',
			qty: '1x · 153,68 TL',
			amount: '153,68',
			tone: 'from-secondary-300 to-secondary-100',
		},
		received: {
			title: 'Kyosho F1 Aston Mart…',
			qty: '1x · 4.578,52 TL',
			amount: '4.578,52',
			tone: 'from-primary-400 to-primary-200',
		},
		diff: '2.222,53',
		date: '10 Mart 2026',
	},
	{
		id: '#TRD-MMSAR8TP-LK3F',
		direction: 'Gönderilen Teklifler',
		partner: 'Mustafa Trader',
		status: 'rejected',
		offered: {
			title: 'Klasik İngiliz Buharlı …',
			qty: '1x · 856,30 TL',
			amount: '816,35',
			tone: 'from-secondary-200 to-primary-100',
		},
		received: {
			title: 'Hot Wheels Ford F-1…',
			qty: '1x · 144,52 TL',
			amount: '144,52',
			tone: 'from-primary-300 to-primary-100',
		},
		diff: '533,02',
		date: '8 Mart 2026',
	},
	{
		id: '#TRD-MMK9PPLD-XR2A',
		direction: 'Gönderilen Teklifler',
		partner: 'Mustafa Trader',
		status: 'shipping_sent',
		offered: {
			title: 'Klasik İngiliz Buharlı …',
			qty: '1x · 856,30 TL',
			amount: '816,35',
			tone: 'from-secondary-200 to-primary-100',
		},
		received: {
			title: 'Bornova Zırlou 1700',
			qty: '1x · 510,87 TL',
			amount: '510,87',
			tone: 'from-secondary-300 to-primary-200',
		},
		diff: '146,27',
		date: '6 Mart 2026',
	},
	{
		id: '#TRD-MMS7P7DS-PL8K',
		direction: 'Gönderilen Teklifler',
		partner: 'Ayşe Vintage',
		status: 'shipping_sent',
		offered: {
			title: 'Matchbox 007 Aston',
			qty: '1x · 715,28 TL',
			amount: '710,07',
			tone: 'from-primary-300 to-primary-100',
		},
		received: {
			title: 'AUTOart Mercedes (S…',
			qty: '1x · 3.564,49 TL',
			amount: '3.564,49',
			tone: 'from-secondary-400 to-secondary-200',
		},
		diff: '1.426,30',
		date: '7 Mart 2026',
	},
	{
		id: '#TRD-MM4S5KQ7-DK8B',
		direction: 'Gelen Teklifler',
		partner: 'Enno JDM',
		status: 'cancelled',
		offered: {
			title: 'Supermarine Spitfire',
			qty: '1x · 612,55 TL',
			amount: '512,55',
			tone: 'from-secondary-300 to-secondary-100',
		},
		received: {
			title: 'Movrego F1 Lotus JPS…',
			qty: '1x · 380,49 TL',
			amount: '380,49',
			tone: 'from-secondary-400 to-secondary-200',
		},
		diff: '69,53',
		date: '6 Mart 2026',
	},
];

function SwapItemThumb({ item }: { item: SwapItemData }) {
	return (
		<div className='flex items-center gap-3 rounded-xl bg-background p-3'>
			<div
				className={`relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br ${item.tone}`}>
				<img
					src={placeholderImg(`swap-${item.title}`, 120)}
					alt=''
					loading='lazy'
					className='absolute inset-0 size-full object-cover'
				/>
			</div>
			<div className='min-w-0 flex-1'>
				<div className='truncate text-sm font-semibold text-secondary-900'>
					{item.title}
				</div>
				<div className='truncate text-xs text-neutral-500'>{item.qty}</div>
			</div>
		</div>
	);
}

function SwapItemTotal({ amount }: { amount: string }) {
	return (
		<div>
			<div className='text-xs font-medium text-neutral-500'>Toplam Değer</div>
			<div className='mt-0.5 text-lg font-extrabold text-secondary-900'>
				{amount} TL
			</div>
		</div>
	);
}

function SwapCard({ s, onSelect }: { s: Swap; onSelect?: () => void }) {
	const meta = swapStatusMeta[s.status];
	return (
		<article className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
			{/* Header — bar+title + status */}
			<header className='flex flex-wrap items-start justify-between gap-3'>
				<div className='min-w-0'>
					<h2 className='font-display flex items-center gap-2 text-sm font-bold text-secondary-900 sm:text-base'>
						<span className='inline-block h-5 w-1 shrink-0 rounded-full bg-primary-500' />
						<span className='truncate'>{s.direction}</span>
					</h2>
					<div className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 pl-3 text-xs'>
						<span className='font-mono text-neutral-500'>{s.id}</span>
						<span className='text-neutral-400'>·</span>
						<span className='font-semibold text-secondary-900'>
							{s.partner}
						</span>
					</div>
				</div>
				<Badge
					variant={meta.variant}
					className='shrink-0'>
					{meta.label}
				</Badge>
			</header>

			{/* Takas grid — mobile: tek sütun (Senin → Repeat → Karşı); desktop: 3 sütun */}
			<div className='grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-x-4 sm:gap-y-3'>
				{/* Senin Ürünlerin başlık */}
				<h4 className='text-sm font-bold text-secondary-900 sm:col-start-1 sm:row-start-1'>
					Senin Ürünlerin
				</h4>
				{/* Senin ürün */}
				<div className='sm:col-start-1 sm:row-start-2'>
					<SwapItemThumb item={s.offered} />
				</div>
				{/* Senin toplam */}
				<div className='border-t border-neutral-200 pt-3 sm:col-start-1 sm:row-start-3'>
					<SwapItemTotal amount={s.offered.amount} />
				</div>
				{/* Repeat ikonu (mobilde ortalanmış ayraç, desktop'ta grid ortası) */}
				<div className='mx-auto grid size-10 place-items-center rounded-lg bg-primary-100 text-primary-600 sm:col-start-2 sm:row-start-2 sm:self-center'>
					<Repeat className='size-5' />
				</div>
				{/* Karşı Tarafın başlık */}
				<h4 className='text-sm font-bold text-secondary-900 sm:col-start-3 sm:row-start-1'>
					Karşı Tarafın Ürünleri
				</h4>
				{/* Karşı ürün */}
				<div className='sm:col-start-3 sm:row-start-2'>
					<SwapItemThumb item={s.received} />
				</div>
				{/* Karşı toplam */}
				<div className='border-t border-neutral-200 pt-3 sm:col-start-3 sm:row-start-3'>
					<SwapItemTotal amount={s.received.amount} />
				</div>
			</div>

			<div className='rounded-xl bg-primary-50 px-4 py-2.5 text-sm'>
				<span className='font-semibold text-secondary-900'>Fark Tutarı: </span>
				<span className='font-extrabold text-primary-600'>{s.diff} TL</span>
			</div>

			<div className='flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500'>
				<span>{s.date}</span>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						onSelect?.();
					}}
					className='font-semibold text-primary-600 hover:text-primary-700'>
					Detayları görmek için tıklayın →
				</a>
			</div>
		</article>
	);
}

function SwapsMain({
	onSelectSwap,
	onBack,
}: {
	onSelectSwap?: () => void;
	onBack?: () => void;
}) {
	const [filter, setFilter] = useState('Tümü');
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Takaslarım
					</h1>
				</div>
				<Select
					value={filter}
					onValueChange={setFilter}>
					<SelectTrigger className='h-10 w-full rounded-lg border-neutral-200 bg-background text-sm font-semibold sm:w-auto sm:min-w-[180px]'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='Tümü'>Tümü</SelectItem>
						<SelectItem value='Beklemede'>Beklemede</SelectItem>
						<SelectItem value='Kargoda'>Kargoda</SelectItem>
						<SelectItem value='Tamamlandı'>Tamamlandı</SelectItem>
						<SelectItem value='İptal Edildi'>İptal Edildi</SelectItem>
						<SelectItem value='Reddedildi'>Reddedildi</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className='space-y-6'>
				{swaps.map((s) => (
					<SwapCard
						key={s.id}
						s={s}
						onSelect={onSelectSwap}
					/>
				))}
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Swap detail main — takas detay sayfası                             */
/* ------------------------------------------------------------------ */
const detailSwap = {
	id: 'TRD-MMS3MMV4-PAZR',
	counterOffer: '#5',
	status: 'shipping_both' as SwapStatus,
	infoBanner: 'Her İki taraf da ürünlerini gönderdi',
	partner: 'Selin European',
	partnerItem: {
		title: 'Minichamps BMW M4 1:43',
		qty: '1x · 668,97 TL',
		total: '668,97',
		tone: 'from-secondary-300 to-secondary-100',
	},
	yourItem: {
		title: 'Honda Civic',
		qty: '1x · 1.234,00 TL',
		total: '1.234,00',
		tone: 'from-primary-300 to-primary-100',
	},
	cashDiff: '300,00',
	cashDiffWithCommission: '315,00',
	cashPayer: 'Ahmet Koleksiyoncu',
	cashPaid: true,
	messages: [
		{ from: 'Selin European', text: 'NAAAAABERRRRRR MÜDÜR!!!!!!!!' },
		{ from: 'Ahmet Koleksiyoncu', text: 'Takas teklifini kabul ediyorum' },
	],
	shipments: [
		{ from: 'Selin European', carrier: 'aras', track: 'TRKMMS3UU169R2R' },
		{
			from: 'Ahmet Koleksiyoncu',
			carrier: 'yurtici',
			track: 'TRKMMS3V8FHKEAD',
		},
	],
};

function SwapDetailItemCard({
	title,
	item,
}: {
	title: string;
	item: { title: string; qty: string; total: string; tone: string };
}) {
	return (
		<div className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
			<h3 className='text-base font-bold text-secondary-900'>{title}</h3>
			<div className='flex items-center gap-3 rounded-xl bg-background p-3'>
				<div
					className={`relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br ${item.tone}`}>
					<img
						src={placeholderImg(`swap-detail-${item.title}`, 160)}
						alt={item.title}
						loading='lazy'
						className='absolute inset-0 size-full object-cover'
					/>
				</div>
				<div className='min-w-0 flex-1'>
					<div className='truncate text-sm font-semibold text-secondary-900'>
						{item.title}
					</div>
					<div className='truncate text-xs text-neutral-500'>{item.qty}</div>
				</div>
			</div>
			<div className='border-t border-neutral-200 pt-3'>
				<div className='text-xs font-medium text-neutral-500'>Toplam Değer</div>
				<div className='mt-0.5 text-xl font-extrabold text-secondary-900'>
					{item.total} TL
				</div>
			</div>
		</div>
	);
}

function SwapDetailMain({ onSwaps }: { onSwaps?: () => void }) {
	return (
		<main className='mx-auto max-w-[1280px] space-y-6 px-4 py-6 sm:px-6 sm:py-10'>
			<div className='flex flex-wrap items-start justify-between gap-3'>
				<div className='flex min-w-0 items-start gap-3'>
					<button
						type='button'
						onClick={onSwaps}
						aria-label='Takaslara dön'
						className='mt-1 grid size-10 shrink-0 place-items-center rounded-lg text-neutral-500 transition hover:bg-neutral-100 hover:text-primary-600'>
						<ChevronLeft className='size-5' />
					</button>
					<div className='min-w-0'>
						<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
							Takas Detayı
						</h1>
						<div className='mt-2 flex flex-wrap items-center gap-2 text-sm text-neutral-500'>
							<span>Takas No:</span>
							<span className='font-semibold text-secondary-900'>
								{detailSwap.id}
							</span>
							<Badge variant='primarySoft'>
								Karşı Teklif {detailSwap.counterOffer}
							</Badge>
						</div>
					</div>
				</div>
				<Badge
					variant={swapStatusMeta[detailSwap.status].variant}
					className='h-8 px-3 text-sm'>
					{swapStatusMeta[detailSwap.status].label}
				</Badge>
			</div>

			{/* Bilgi banner */}
			<div className='flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-4 py-3 text-sm text-primary-700'>
				<Info className='size-4 shrink-0' />
				{detailSwap.infoBanner}
			</div>

			{/* Ürün kartları + Repeat ikon */}
			<div className='grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]'>
				<SwapDetailItemCard
					title={`${detailSwap.partner}'in Ürünü`}
					item={detailSwap.partnerItem}
				/>
				<div className='mx-auto self-center grid size-12 place-items-center rounded-lg bg-primary-100 text-primary-600'>
					<Repeat className='size-5' />
				</div>
				<SwapDetailItemCard
					title='Sizin Teklifiniz'
					item={detailSwap.yourItem}
				/>
			</div>

			{/* Nakit Fark */}
			<div className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-success-200 bg-success-50 p-5'>
				<div>
					<div className='text-xs font-medium text-success-700'>Nakit Fark</div>
					<div className='mt-0.5 text-2xl font-extrabold text-success-700'>
						{detailSwap.cashDiff} TL
					</div>
					<div className='mt-1 text-xs text-success-600'>
						Komisyon dahil toplam: {detailSwap.cashDiffWithCommission} TL
					</div>
				</div>
				<div className='flex items-center gap-3 text-xs text-neutral-600'>
					<span>{detailSwap.cashPayer} ödeyecek</span>
					{detailSwap.cashPaid ? (
						<Badge variant='successSoft'>
							<Check
								className='size-3'
								strokeWidth={3}
							/>{' '}
							Ödendi
						</Badge>
					) : null}
				</div>
			</div>

			{/* Mesajlar */}
			<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Mesajlar
				</h2>
				<div className='space-y-3'>
					{detailSwap.messages.map((m, i) => (
						<div
							key={i}
							className='space-y-1'>
							<div className='text-xs font-bold text-secondary-900'>
								{m.from}:
							</div>
							<div className='rounded-xl bg-background p-3 text-sm text-secondary-900'>
								{m.text}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Kargo Bilgileri */}
			<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Kargo Bilgileri
				</h2>
				<div className='space-y-2'>
					{detailSwap.shipments.map((sh, i) => (
						<div
							key={i}
							className='flex flex-col gap-1 rounded-xl bg-background p-3 sm:flex-row sm:items-center sm:gap-3'>
							<span className='text-xs font-bold text-secondary-900 sm:min-w-[180px]'>
								{sh.from}:
							</span>
							<span className='text-sm text-neutral-600'>
								<span className='font-semibold text-secondary-900'>
									{sh.carrier}
								</span>{' '}
								— {sh.track}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Süre uyarısı (örnek warning) */}
			<div className='flex items-start gap-2 rounded-xl border border-warning-200 bg-warning-50 p-4 text-sm text-warning-700'>
				<Clock className='mt-0.5 size-4 shrink-0' />
				<div>
					<div className='font-semibold'>Yanıt Süresi</div>
					<div className='mt-0.5 text-xs text-warning-600'>
						Takas tamamlandığı için süre takibi sona erdi.
					</div>
				</div>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Create swap main — takas teklifi oluşturma                          */
/* ------------------------------------------------------------------ */
type SwapCandidate = {
	title: string;
	price: string;
	tone: string;
};

const swapCandidates: SwapCandidate[] = [
	{
		title: 'Honda Civic Type R FK8',
		price: '1.234,00',
		tone: 'from-primary-100 to-primary-50',
	},
	{
		title: 'Corvette C7 Stingray',
		price: '1.000,00',
		tone: 'from-secondary-100 to-secondary-50',
	},
	{
		title: 'F1 Car McLaren MP4',
		price: '1.000,00',
		tone: 'from-primary-50 to-primary-100',
	},
	{
		title: 'Supermarine Spitfire',
		price: '533,55',
		tone: 'from-neutral-100 to-secondary-100',
	},
];

function CreateSwapMain({ onBack }: { onBack?: () => void }) {
	const [selected, setSelected] = useState<number[]>([0, 1, 2, 3]);
	const [diff, setDiff] = useState('');
	const [message, setMessage] = useState('');
	const requestedPrice = 668.97;
	const totalSelected = selected.reduce(
		(sum, i) =>
			sum +
			parseFloat(swapCandidates[i].price.replace('.', '').replace(',', '.')),
		0,
	);
	const diffValue = parseFloat(diff || '0') || 0;
	const totalOffer = totalSelected + diffValue;
	const formatTL = (n: number) =>
		n
			.toLocaleString('tr-TR', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
			.replace(/ /g, '');
	const removeFromSelection = (i: number) =>
		setSelected((prev) => prev.filter((x) => x !== i));
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex items-center gap-3 sm:gap-4'>
				<button
					type='button'
					onClick={onBack}
					aria-label='Geri'
					className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
					<ChevronLeft className='size-5' />
				</button>
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Takas Teklifi Oluştur
				</h1>
			</div>

			<div className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch'>
				{/* Sol: istenen ürün */}
				<section className='rounded-2xl border border-neutral-200 bg-background p-5'>
					<h2 className='font-display text-sm font-bold text-secondary-900'>
						İstediğin Ürün
					</h2>
					<div className='mt-4 flex flex-col items-center gap-3'>
						<div className='relative w-full max-w-[260px] aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-primary-50'>
							<img
								src={placeholderImg('Minichamps BMW M4 1:43', 600)}
								alt='Minichamps BMW M4 1:43'
								className='absolute inset-0 size-full object-cover'
							/>
						</div>
						<div className='text-center'>
							<div className='text-sm font-semibold text-secondary-900'>
								Minichamps BMW M4 1:43
							</div>
							<div className='mt-1 text-lg font-extrabold text-primary-600'>
								₺{formatTL(requestedPrice)}
							</div>
						</div>
					</div>
				</section>

				{/* Orta: Repeat ikon */}
				<div className='hidden lg:flex lg:items-center lg:justify-center'>
					<div className='grid size-12 place-items-center rounded-full bg-primary-100 text-primary-600'>
						<Repeat className='size-6' />
					</div>
				</div>

				{/* Sağ: teklif edilen ürünler */}
				<section className='rounded-2xl border border-neutral-200 bg-background p-5'>
					<div className='flex items-center justify-between gap-3'>
						<h2 className='font-display text-sm font-bold text-secondary-900'>
							Teklif Edeceğin Ürünler
						</h2>
						<span className='text-xs font-semibold text-neutral-500'>
							{selected.length} / 4
						</span>
					</div>
					<div className='mt-4 grid grid-cols-2 gap-3'>
						{[0, 1, 2, 3].map((slot) => {
							const candidateIndex = selected[slot];
							if (candidateIndex === undefined) {
								return (
									<button
										key={`empty-${slot}`}
										type='button'
										className='flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-neutral-200 text-neutral-400 transition hover:border-primary-300 hover:text-primary-600'>
										<Plus className='size-6' />
										<span className='text-xs font-semibold'>Ürün Ekle</span>
									</button>
								);
							}
							const c = swapCandidates[candidateIndex];
							return (
								<div
									key={candidateIndex}
									className='group relative flex flex-col gap-2'>
									<div
										className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${c.tone}`}>
										<img
											src={placeholderImg(`swap-candidate-${c.title}`, 400)}
											alt={c.title}
											loading='lazy'
											className='absolute inset-0 size-full object-cover'
										/>
										<button
											type='button'
											aria-label='Kaldır'
											onClick={() => removeFromSelection(candidateIndex)}
											className='absolute right-2 top-2 grid size-7 place-items-center rounded-lg bg-background/90 text-secondary-900 shadow-sm transition hover:bg-danger-500 hover:text-primary-foreground'>
											<X className='size-3.5' />
										</button>
									</div>
									<div className='px-1'>
										<div className='line-clamp-1 text-xs font-semibold text-secondary-900'>
											{c.title}
										</div>
										<div className='text-sm font-extrabold text-primary-600'>
											₺{c.price}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>

			{/* Fark tutarı */}
			<section className='mt-6 rounded-2xl border border-neutral-200 bg-background p-5'>
				<h2 className='font-display text-sm font-bold text-secondary-900'>
					Fark Tutarı{' '}
					<span className='font-medium text-neutral-500'>(İsteğe bağlı)</span>
				</h2>
				<p className='mt-1 text-xs text-neutral-500'>
					Takas değerini dengelemek için nakit fark ekleyebilirsin.
				</p>
				<div className='relative mt-3 max-w-xs'>
					<span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-neutral-500'>
						₺
					</span>
					<Input
						value={diff}
						onChange={(e) => setDiff(e.target.value)}
						placeholder='0,00'
						className='h-12 rounded-lg border-neutral-200 bg-background pl-8'
					/>
				</div>
			</section>

			{/* Mesaj */}
			<section className='mt-6 rounded-2xl border border-neutral-200 bg-background p-5'>
				<h2 className='font-display text-sm font-bold text-secondary-900'>
					Mesaj{' '}
					<span className='font-medium text-neutral-500'>(İsteğe bağlı)</span>
				</h2>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value.slice(0, 500))}
					rows={4}
					placeholder='Satıcıya mesajını yaz…'
					className='mt-3 w-full rounded-lg border border-neutral-200 bg-background px-3 py-2 text-sm text-secondary-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
				/>
				<div className='mt-1 text-right text-xs text-neutral-400'>
					{message.length} / 500
				</div>
			</section>

			{/* Teklif özeti */}
			<section className='mt-6 rounded-2xl border border-primary-200 bg-primary-50 p-5'>
				<h2 className='font-display text-sm font-bold text-secondary-900'>Teklif Özeti</h2>
				<dl className='mt-3 space-y-2 text-sm'>
					<div className='flex items-center justify-between'>
						<dt className='text-neutral-600'>Seçilen Ürünler</dt>
						<dd className='font-semibold text-secondary-900'>
							{selected.length} adet
						</dd>
					</div>
					<div className='flex items-center justify-between'>
						<dt className='text-neutral-600'>Ürün Toplam Değeri</dt>
						<dd className='font-semibold text-secondary-900'>
							₺{formatTL(totalSelected)}
						</dd>
					</div>
					<div className='flex items-center justify-between border-t border-primary-200 pt-2'>
						<dt className='font-bold text-secondary-900'>Toplam Teklif</dt>
						<dd className='text-lg font-extrabold text-primary-600'>
							₺{formatTL(totalOffer)}
						</dd>
					</div>
					<div className='flex items-center justify-between'>
						<dt className='text-neutral-600'>İstenen Ürün</dt>
						<dd className='font-semibold text-secondary-900'>
							₺{formatTL(requestedPrice)}
						</dd>
					</div>
				</dl>
			</section>

			{/* Aksiyonlar */}
			<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
				<Button
					type='button'
					variant='outline'
					onClick={onBack}
					className='h-11 flex-1'>
					İptal
				</Button>
				<Button
					type='button'
					className='h-11 flex-1 gap-2'>
					<Repeat className='size-4' />
					Takas Teklifi Gönder
				</Button>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Notifications main — bildirim listesi                               */
/* ------------------------------------------------------------------ */
type NotificationKind =
	| 'payment-failed'
	| 'payment-pending'
	| 'payment-success'
	| 'review'
	| 'order'
	| 'swap-counter'
	| 'swap-new'
	| 'swap-accepted';

type NotificationCategory =
	| 'all'
	| 'unread'
	| 'orders'
	| 'offers'
	| 'swaps'
	| 'messages'
	| 'other';

type NotificationItem = {
	kind: NotificationKind;
	title: string;
	description: string;
	date: string;
	unread?: boolean;
};

function notificationCategory(n: NotificationItem): NotificationCategory {
	if (
		n.kind === 'payment-failed' ||
		n.kind === 'payment-pending' ||
		n.kind === 'payment-success' ||
		n.kind === 'order'
	)
		return 'orders';
	if (n.kind === 'swap-new' && n.title.startsWith('Yeni Teklif'))
		return 'offers';
	if (
		n.kind === 'swap-counter' ||
		n.kind === 'swap-accepted' ||
		n.kind === 'swap-new'
	)
		return 'swaps';
	return 'other';
}

const notifications: NotificationItem[] = [
	{
		kind: 'payment-failed',
		title: 'Ödeme Başarısız',
		description: 'Sipariş ORD-2026-000054 için ödeme başarısız oldu.',
		date: '1 sa önce',
		unread: true,
	},
	{
		kind: 'payment-pending',
		title: 'Ödeme Onayda',
		description: 'Ford Ranger siparişin için ödeme alındı.',
		date: '15.01.2026',
		unread: true,
	},
	{
		kind: 'payment-failed',
		title: 'Ödeme Başarısız',
		description: 'Sipariş ORD-2026-000049 için ödeme başarısız oldu.',
		date: '15.01.2026',
		unread: true,
	},
	{
		kind: 'payment-success',
		title: 'Ödeme Alındı',
		description: 'İz arabası siparişi için ödeme alındı. Kargoya hazırlanıyor.',
		date: '15.01.2026',
	},
	{
		kind: 'payment-success',
		title: 'Ödeme Alındı',
		description: 'İz arabası siparişi için ödeme alındı. Kargoya hazırlanıyor.',
		date: '15.01.2026',
	},
	{
		kind: 'review',
		title: 'Yeni Değerlendirme',
		description: 'oğuz isimli kullanıcı 5 yıldız verdi.',
		date: '15.01.2026',
	},
	{
		kind: 'payment-success',
		title: 'Ödeme Alındı',
		description:
			'Supermarine Spitfire Mk.II 1:72 siparişi için ödeme alındı. Kargoya hazırlanıyor.',
		date: '15.01.2026',
	},
	{
		kind: 'order',
		title: 'Yeni Sipariş',
		description:
			'Supermarine Spitfire Mk.II 1:72 ürününüz için sipariş alındı.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-counter',
		title: 'Karşı Takas Teklifi Aldınız',
		description: 'Selin Eryalmaz takas teklifinize karşı teklif yaptı.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Takas Teklifi',
		description: 'Ürünlerinizden biri için takas teklifi aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'payment-success',
		title: 'Ödeme Alındı',
		description: 'Önceki siparişiniz için ödeme alındı. Kargoya hazırlanıyor.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Teklif',
		description: 'Ürününüz için 510,00 TL teklif aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Teklif',
		description: 'Ürününüz için 500,00 TL teklif aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'payment-success',
		title: 'Ödeme Alındı',
		description:
			'Supermarine Spitfire Mk.II 1:72 siparişi için ödeme alındı. Kargoya hazırlanıyor.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Teklif',
		description:
			'Supermarine Spitfire Mk.II 1:72 için 500,00 TL teklif aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-accepted',
		title: 'Takas Kabul Edildi',
		description: 'Takas teklifiniz kabul edildi. Lütfen kargoya verin.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Takas Teklifi',
		description: 'Ürünleriniz için takas teklifi aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Teklif',
		description: 'Ürünleriniz için 510,00 TL teklif aldınız.',
		date: '15.01.2026',
	},
	{
		kind: 'swap-new',
		title: 'Yeni Teklif',
		description: 'avadasdadi için 300,00 TL teklif aldınız.',
		date: '15.01.2026',
	},
];

function NotificationIcon({ kind }: { kind: NotificationKind }) {
	const config: Record<
		NotificationKind,
		{ icon: React.ReactNode; bg: string; fg: string }
	> = {
		'payment-failed': {
			icon: <Info className='size-4' />,
			bg: 'bg-danger-100',
			fg: 'text-danger-600',
		},
		'payment-pending': {
			icon: <Clock className='size-4' />,
			bg: 'bg-warning-100',
			fg: 'text-warning-700',
		},
		'payment-success': {
			icon: <CheckCircle2 className='size-4' />,
			bg: 'bg-success-100',
			fg: 'text-success-700',
		},
		review: {
			icon: <Star className='size-4' />,
			bg: 'bg-warning-100',
			fg: 'text-warning-700',
		},
		order: {
			icon: <Package className='size-4' />,
			bg: 'bg-primary-100',
			fg: 'text-primary-700',
		},
		'swap-counter': {
			icon: <Repeat className='size-4' />,
			bg: 'bg-primary-100',
			fg: 'text-primary-700',
		},
		'swap-new': {
			icon: <Tag className='size-4' />,
			bg: 'bg-neutral-100',
			fg: 'text-neutral-700',
		},
		'swap-accepted': {
			icon: <Check className='size-4' />,
			bg: 'bg-success-500',
			fg: 'text-primary-foreground',
		},
	};
	const c = config[kind];
	return (
		<div
			className={`grid size-9 shrink-0 place-items-center rounded-lg ${c.bg} ${c.fg}`}>
			{c.icon}
		</div>
	);
}

function NotificationCard({ n }: { n: NotificationItem }) {
	const accent: Record<NotificationKind, string> = {
		'payment-failed': 'border-danger-300 bg-danger-50',
		'payment-pending': 'border-warning-300 bg-warning-50',
		'payment-success': 'border-neutral-200 bg-background',
		review: 'border-neutral-200 bg-background',
		order: 'border-neutral-200 bg-background',
		'swap-counter': 'border-neutral-200 bg-background',
		'swap-new': 'border-neutral-200 bg-background',
		'swap-accepted': 'border-success-300 bg-success-50',
	};
	return (
		<div
			className={`rounded-xl border ${
				n.unread ? accent[n.kind] : 'border-neutral-200 bg-background'
			} p-4`}>
			<div className='flex items-start gap-3'>
				<NotificationIcon kind={n.kind} />
				<div className='min-w-0 flex-1'>
					<div className='flex flex-wrap items-start justify-between gap-2'>
						<h3 className='text-sm font-bold text-secondary-900'>{n.title}</h3>
						<span className='text-xs text-neutral-500'>{n.date}</span>
					</div>
					<p className='mt-0.5 text-sm text-neutral-600'>{n.description}</p>
					<button
						type='button'
						className='mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary-600 transition hover:text-primary-700'>
						Detayları gör <ChevronRight className='size-3' />
					</button>
				</div>
			</div>
		</div>
	);
}

function NotificationsMain({ onBack }: { onBack?: () => void }) {
	const [filter, setFilter] = useState<NotificationCategory>('all');
	const unreadCount = notifications.filter((n) => n.unread).length;
	const filtered = notifications.filter((n) => {
		if (filter === 'all') return true;
		if (filter === 'unread') return n.unread;
		return notificationCategory(n) === filter;
	});
	const filterOptions: { value: NotificationCategory; label: string }[] = [
		{ value: 'all', label: 'Tümü' },
		{ value: 'unread', label: `Okunmamış (${unreadCount})` },
		{ value: 'orders', label: 'Siparişler' },
		{ value: 'offers', label: 'Teklifler' },
		{ value: 'swaps', label: 'Takaslar' },
		{ value: 'messages', label: 'Mesajlar' },
		{ value: 'other', label: 'Diğer' },
	];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Bildirimler
					</h1>
				</div>
				<div className='flex flex-wrap items-center gap-2'>
					<Select
						value={filter}
						onValueChange={(v) => setFilter(v as NotificationCategory)}>
						<SelectTrigger className='h-10 min-w-[180px] rounded-lg border-neutral-200 bg-background text-sm font-semibold'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{filterOptions.map((o) => (
								<SelectItem
									key={o.value}
									value={o.value}>
									{o.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Button
						variant='outline'
						className='h-10 gap-2 border-neutral-200'>
						<Check className='size-4' />
						Tümünü oku
					</Button>
				</div>
			</div>

			{filtered.length === 0 ? (
				<div className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-6 py-16 text-center'>
					<div className='grid size-14 place-items-center rounded-full bg-background text-neutral-400'>
						<Bell className='size-7' />
					</div>
					<h2 className='font-display text-lg font-bold text-secondary-900'>
						Bu kategoride bildirim yok
					</h2>
					<p className='max-w-md text-sm text-neutral-500'>
						Seçtiğin filtreye uygun bir bildirim bulunamadı.
					</p>
				</div>
			) : (
				<div className='space-y-2'>
					{filtered.map((n, i) => (
						<NotificationCard
							key={i}
							n={n}
						/>
					))}
				</div>
			)}
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Profile menu — User ikonu popover                                  */
/* ------------------------------------------------------------------ */
function ProfileMenu({
	trigger,
	onSwaps,
	onProfile,
	onFavorites,
	onMyListings,
	onNotifications,
	onOffers,
	onMembership,
	onSettings,
	onOrders,
	onCart,
	onMessages,
}: {
	trigger: React.ReactNode;
	onSwaps?: () => void;
	onProfile?: () => void;
	onFavorites?: () => void;
	onMyListings?: () => void;
	onNotifications?: () => void;
	onOffers?: () => void;
	onMembership?: () => void;
	onSettings?: () => void;
	onOrders?: () => void;
	onCart?: () => void;
	onMessages?: () => void;
}) {
	const items: {
		icon: React.ReactNode;
		label: string;
		badge?: string;
		onClick?: () => void;
		danger?: boolean;
	}[] = [
		{
			icon: <User className='size-4' />,
			label: 'Profilim',
			onClick: onProfile,
		},
		{
			icon: <Sparkles className='size-4' />,
			label: 'Üyelik',
			onClick: onMembership,
		},
		{
			icon: <Store className='size-4' />,
			label: 'İlanlarım',
			onClick: onMyListings,
		},
		{
			icon: <ShoppingCart className='size-4' />,
			label: 'Siparişlerim',
			onClick: onOrders,
		},
		{
			icon: <FileText className='size-4' />,
			label: 'Teklifler',
			onClick: onOffers,
		},
		{
			icon: <Repeat className='size-4' />,
			label: 'Takaslarım',
			onClick: onSwaps,
		},
		{
			icon: <MessageSquare className='size-4' />,
			label: 'Mesajlar',
			badge: '4',
			onClick: onMessages,
		},
		{
			icon: <Heart className='size-4' />,
			label: 'Favoriler',
			badge: '12',
			onClick: onFavorites,
		},
		{
			icon: <Bell className='size-4' />,
			label: 'Bildirimler',
			badge: '3',
			onClick: onNotifications,
		},
		{
			icon: <ShoppingCart className='size-4' />,
			label: 'Sepetim',
			onClick: onCart,
		},
		{
			icon: <Settings className='size-4' />,
			label: 'Ayarlar',
			onClick: onSettings,
		},
		{
			icon: <LogOut className='size-4' />,
			label: 'Çıkış Yap',
			danger: true,
		},
	];
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent
				align='end'
				sideOffset={8}
				className='w-72 p-0'>
				<div className='flex items-center gap-3 border-b border-neutral-200 p-4'>
					<div className='grid size-11 shrink-0 place-items-center rounded-xl bg-primary-500 text-base font-extrabold text-primary-foreground'>
						AK
					</div>
					<div className='min-w-0 flex-1'>
						<div className='truncate text-sm font-bold text-secondary-900'>
							Ahmet Koleksiyoncu
						</div>
						<div className='truncate text-xs text-neutral-500'>
							ahmet@demo.com
						</div>
						<Badge
							variant='primarySoft'
							className='mt-1 text-[10px]'>
							PREMIUM
						</Badge>
					</div>
				</div>
				<nav className='py-2'>
					{items.map((it, i) => (
						<button
							key={i}
							type='button'
							onClick={it.onClick}
							className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-neutral-50 ${
								it.danger
									? 'font-semibold text-primary-600 hover:text-primary-700'
									: 'text-secondary-900 hover:text-primary-600'
							}`}>
							<span className='shrink-0 text-neutral-500'>{it.icon}</span>
							<span className='flex-1 text-left'>{it.label}</span>
							{it.badge ? (
								<Badge
									variant='outline'
									className='text-foreground'>
									{it.badge}
								</Badge>
							) : null}
						</button>
					))}
				</nav>
			</PopoverContent>
		</Popover>
	);
}

/* ------------------------------------------------------------------ */
/*  Profile main — kullanıcı profil sayfası                            */
/* ------------------------------------------------------------------ */
type ProfileMenuItem = {
	icon: React.ReactNode;
	label: string;
	caption: string;
	onClick?: () => void;
};

function ProfileSection({
	title,
	items,
}: {
	title: string;
	items: ProfileMenuItem[];
}) {
	return (
		<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
			<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
				<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
				{title}
			</h2>
			<div className='overflow-hidden rounded-xl border border-neutral-200 bg-background'>
				{items.map((it, i) => (
					<button
						key={it.label}
						type='button'
						onClick={it.onClick}
						className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-neutral-50 ${
							i > 0 ? 'border-t border-neutral-200' : ''
						}`}>
						<span className='flex min-w-0 items-center gap-3'>
							<span className='grid size-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-500'>
								{it.icon}
							</span>
							<span className='min-w-0'>
								<span className='block truncate text-sm font-semibold text-secondary-900'>
									{it.label}
								</span>
								<span className='block truncate text-xs text-neutral-500'>
									{it.caption}
								</span>
							</span>
						</span>
						<ChevronRight className='size-4 shrink-0 text-neutral-400' />
					</button>
				))}
			</div>
		</section>
	);
}

function ProfileMain({
	onEdit,
	onSwaps,
	onCollections,
	onMyListings,
	onFavorites,
	onOffers,
	onMembership,
	onOrders,
}: {
	onEdit?: () => void;
	onSwaps?: () => void;
	onCollections?: () => void;
	onMyListings?: () => void;
	onFavorites?: () => void;
	onOffers?: () => void;
	onMembership?: () => void;
	onOrders?: () => void;
}) {
	const headerStats = [
		{
			icon: <Tag className='size-4' />,
			value: '5',
			label: 'İlanlarım',
			tone: 'bg-primary-100 text-primary-700',
		},
		{
			icon: <ShoppingCart className='size-4' />,
			value: '2',
			label: 'Siparişlerim',
			tone: 'bg-success-100 text-success-700',
		},
		{
			icon: <Heart className='size-4' />,
			value: '12',
			label: 'Favoriler',
			tone: 'bg-danger-100 text-danger-600',
		},
		{
			icon: <MessageSquare className='size-4' />,
			value: '—',
			label: 'Mesajlar',
			tone: 'bg-warning-100 text-warning-700',
		},
	];
	const premiumStats = [
		{ value: '200', label: 'İlan Hakkı' },
		{ value: '10', label: 'Fotoğraf / İlan' },
		{ value: '10', label: 'Öne Çıkan İlanlar' },
		{ value: '%1', label: 'Komisyon İndirimi' },
	];
	return (
		<main className='mx-auto max-w-[1280px] space-y-6 px-4 py-6 sm:px-6 sm:py-10'>
			{/* Üst hero */}
			<div>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					<div className='flex items-center gap-4'>
						<div className='grid size-16 shrink-0 place-items-center rounded-full bg-primary-500 text-xl font-extrabold text-primary-foreground sm:size-20 sm:text-2xl'>
							AK
						</div>
						<div className='min-w-0'>
							<div className='flex flex-wrap items-center gap-2'>
								<h1 className='font-display text-xl font-extrabold tracking-tight text-secondary-900 sm:text-2xl'>
									Ahmet Koleksiyoncu
								</h1>
								<Badge variant='primarySoft'>
									<Sparkles className='size-3' /> Premium Üyelik
								</Badge>
							</div>
							<div className='mt-1 text-sm text-neutral-600'>
								ahmet@demo.com
							</div>
							<div className='text-xs text-neutral-500'>
								Üyelik tarihi: 15.03.2026
							</div>
						</div>
					</div>
					<Button
						onClick={onEdit}
						variant='outline'
						className='h-10 gap-2 border-neutral-200 px-4 text-sm font-semibold sm:h-11'>
						<Settings className='size-4' /> Ayarlar
					</Button>
				</div>

				{/* Stats */}
				<div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{headerStats.map((s) => (
						<div
							key={s.label}
							className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background px-4 py-4'>
							<span
								className={`grid size-10 shrink-0 place-items-center rounded-lg ${s.tone}`}>
								{s.icon}
							</span>
							<div className='min-w-0'>
								<div className='text-2xl font-extrabold text-secondary-900'>
									{s.value}
								</div>
								<div className='text-xs font-medium text-neutral-500'>
									{s.label}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Premium kart */}
			<section className='space-y-4 rounded-2xl border border-primary-200 bg-primary-50 p-5'>
				<div className='flex flex-wrap items-center justify-between gap-3'>
					<div className='flex items-center gap-3'>
						<span className='inline-block h-10 w-1 rounded-full bg-primary-500' />
						<div>
							<h3 className='text-base font-bold text-secondary-900'>
								Premium Üyelik
							</h3>
							<p className='text-xs text-neutral-500'>
								Aktif üyeliğin koleksiyon yolculuğuna güç katıyor
							</p>
						</div>
					</div>
					<Badge variant='default'>Aktif</Badge>
				</div>
				<div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{premiumStats.map((s) => (
						<div
							key={s.label}
							className='rounded-xl bg-background px-3 py-3 text-center'>
							<div className='text-xl font-extrabold text-secondary-900 sm:text-2xl'>
								{s.value}
							</div>
							<div className='mt-0.5 text-[11px] font-medium text-neutral-500'>
								{s.label}
							</div>
						</div>
					))}
				</div>
				<div className='flex flex-wrap gap-2'>
					{['Takas', 'Koleksiyon', 'Reklamsız'].map((t) => (
						<span
							key={t}
							className='inline-flex items-center gap-1 rounded-md bg-background px-2.5 py-1 text-xs font-semibold text-primary-700'>
							<Check
								className='size-3'
								strokeWidth={3}
							/>
							{t}
						</span>
					))}
				</div>
			</section>

			{/* Satış Özeti */}
			<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Satış Özeti
				</h2>
				<div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
					{[
						{
							icon: <Wallet className='size-4' />,
							value: '0 TL',
							label: 'Toplam Gelir',
							tone: 'bg-success-100 text-success-700',
						},
						{
							icon: <Package className='size-4' />,
							value: '3',
							label: 'Aktif İlan',
							tone: 'bg-primary-100 text-primary-700',
						},
						{
							icon: <BarChart3 className='size-4' />,
							value: '0',
							label: 'Satılan Ürün',
							tone: 'bg-warning-100 text-warning-700',
						},
					].map((s) => (
						<div
							key={s.label}
							className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background px-4 py-4'>
							<span
								className={`grid size-10 shrink-0 place-items-center rounded-lg ${s.tone}`}>
								{s.icon}
							</span>
							<div className='min-w-0'>
								<div className='text-2xl font-extrabold text-secondary-900'>
									{s.value}
								</div>
								<div className='text-xs font-medium text-neutral-500'>
									{s.label}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Alışveriş */}
			<ProfileSection
				title='Alışveriş'
				items={[
					{
						icon: <Tag className='size-4' />,
						label: 'İlanlarım',
						caption: 'Satıştaki ilanlarım',
						onClick: onMyListings,
					},
					{
						icon: <Package className='size-4' />,
						label: 'Siparişlerim',
						caption: 'Geçmiş siparişlerim',
						onClick: onOrders,
					},
					{
						icon: <FileText className='size-4' />,
						label: 'Teklifler',
						caption: 'Gelen teklifler',
						onClick: onOffers,
					},
					{
						icon: <Repeat className='size-4' />,
						label: 'Takaslar',
						caption: 'Tüm takaslarım',
						onClick: onSwaps,
					},
				]}
			/>

			{/* Koleksiyonlar */}
			<ProfileSection
				title='Koleksiyonlar'
				items={[
					{
						icon: <HeartHandshake className='size-4' />,
						label: 'Koleksiyonlarım',
						caption: 'Kendi koleksiyonlarım',
						onClick: onCollections,
					},
					{
						icon: <Heart className='size-4' />,
						label: 'Favorilerim',
						caption: 'Favori ürünlerim',
						onClick: onFavorites,
					},
				]}
			/>

			{/* Genel */}
			<ProfileSection
				title='Genel'
				items={[
					{
						icon: <Settings className='size-4' />,
						label: 'Ayarlar',
						caption: 'Profil ve uygulama ayarları',
						onClick: onEdit,
					},
					{
						icon: <CreditCard className='size-4' />,
						label: 'Ödeme',
						caption: 'Ödeme yöntemleri ve geçmişi',
					},
					{
						icon: <BadgeCheck className='size-4' />,
						label: 'Üyelik',
						caption: 'Premium üyelik planı',
						onClick: onMembership,
					},
				]}
			/>

			{/* Daha Fazla */}
			<ProfileSection
				title='Daha Fazla'
				items={[
					{
						icon: <BarChart3 className='size-4' />,
						label: 'Analitikler',
						caption: 'Satış ve görüntülenme istatistikleri',
					},
					{
						icon: <LifeBuoy className='size-4' />,
						label: 'Destek',
						caption: 'Yardım ve destek',
					},
				]}
			/>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Profile edit main — profil düzenleme                                */
/* ------------------------------------------------------------------ */
type Address = {
	id: string;
	label: string;
	name: string;
	phone: string;
	full: string;
	default?: boolean;
};

const userAddresses: Address[] = [
	{
		id: 'a1',
		label: 'Ev',
		name: 'Ahmet Koleksiyoncu',
		phone: '+905550000100',
		full: 'Ahmet Koleksiyoncu Mahallesi, Koleksiyon Sokak No: 3, Nilüfer, Bursa 34300',
		default: true,
	},
];

function NotificationToggle({
	icon,
	title,
	description,
	defaultOn,
	tone,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	defaultOn?: boolean;
	tone: string;
}) {
	const [on, setOn] = useState(!!defaultOn);
	return (
		<div className='flex items-center gap-3'>
			<span
				className={`grid size-9 shrink-0 place-items-center rounded-lg ${tone}`}>
				{icon}
			</span>
			<div className='min-w-0 flex-1'>
				<div className='text-sm font-semibold text-secondary-900'>{title}</div>
				<div className='text-xs text-neutral-500'>{description}</div>
			</div>
			<button
				type='button'
				role='switch'
				aria-checked={on}
				onClick={() => setOn((v) => !v)}
				className={`relative h-6 w-11 shrink-0 rounded-full transition ${
					on ? 'bg-primary-500' : 'bg-neutral-200'
				}`}>
				<span
					className={`absolute top-0.5 size-5 rounded-full bg-background shadow-sm transition ${
						on ? 'left-[22px]' : 'left-0.5'
					}`}
				/>
			</button>
		</div>
	);
}

function ProfileEditMain({ onBack }: { onBack?: () => void }) {
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex items-center gap-3 sm:gap-4'>
				{onBack ? (
					<button
						type='button'
						onClick={onBack}
						aria-label='Geri'
						className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
						<ChevronLeft className='size-5' />
					</button>
				) : null}
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Ayarlar
				</h1>
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className='space-y-6'>
				<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
						<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
						Kişisel Bilgiler
					</h2>
					<div className='flex flex-col items-center gap-4 rounded-xl border border-neutral-200 bg-background p-5 sm:flex-row sm:items-center sm:gap-5'>
						<div className='relative'>
							<div className='grid size-20 shrink-0 place-items-center rounded-full bg-primary-500 text-2xl font-extrabold text-primary-foreground sm:size-24 sm:text-3xl'>
								AK
							</div>
							<button
								type='button'
								aria-label='Profil fotoğrafını değiştir'
								className='absolute -bottom-1 -right-1 grid size-8 place-items-center rounded-full border-2 border-background bg-primary-500 text-primary-foreground shadow-sm transition hover:bg-primary-600'>
								<ImagePlus className='size-4' />
							</button>
						</div>
						<div className='min-w-0 flex-1 text-center sm:text-left'>
							<div className='text-base font-bold text-secondary-900'>
								Profil Fotoğrafı
							</div>
							<p className='mt-0.5 text-xs text-neutral-500'>
								JPG, PNG veya SVG, en fazla 2MB. Kare format önerilir.
							</p>
							<div className='mt-3 flex flex-wrap justify-center gap-2 sm:justify-start'>
								<Button
									type='button'
									size='sm'
									variant='outline'
									className='gap-1.5 border-neutral-200'>
									<ImagePlus className='size-3.5' />
									Yükle
								</Button>
								<Button
									type='button'
									size='sm'
									variant='ghost'
									className='gap-1.5 text-danger-600 hover:bg-danger-50 hover:text-danger-700'>
									<Trash2 className='size-3.5' />
									Kaldır
								</Button>
							</div>
						</div>
					</div>
					<div className='grid gap-4 sm:grid-cols-2'>
						<FormField
							label='Görünen İsim'
							required>
							<div className='relative'>
								<User className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									defaultValue='Ahmet Koleksiyoncu'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10'
								/>
							</div>
						</FormField>
						<FormField
							label='E-posta Adresi'
							hint='E-posta değişikliği için ayarlardan başvurun yapmanız gerekiyor'>
							<div className='relative'>
								<HelpCircle className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									disabled
									defaultValue='ahmet@demo.com'
									className='h-10 rounded-lg border-neutral-200 bg-neutral-100 pl-10 text-neutral-500'
								/>
							</div>
						</FormField>
						<FormField label='Telefon Numarası'>
							<div className='relative'>
								<Phone className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									defaultValue='+905550000100'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10'
								/>
							</div>
						</FormField>
						<FormField label='Doğum Tarihi'>
							<div className='relative'>
								<Calendar className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									placeholder='gg.aa.yyyy'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10'
								/>
							</div>
						</FormField>
					</div>
					<FormField label='Hakkımda'>
						<textarea
							rows={4}
							defaultValue='Hot Wheels tutkunu, 15 yıllık koleksiyoncu.'
							className='w-full rounded-lg border border-neutral-200 bg-background px-3 py-2 text-sm text-secondary-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
						/>
						<div className='mt-1 text-right text-xs text-neutral-400'>
							42 / 500
						</div>
					</FormField>
					<div className='flex justify-end'>
						<Button
							type='submit'
							className='h-10 w-full sm:w-auto'>
							Değişiklikleri Kaydet
						</Button>
					</div>
				</section>

				{/* Adresler */}
				<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
					<div className='flex flex-wrap items-center justify-between gap-3'>
						<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
							<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
							Adreslerim
						</h2>
						<Button
							type='button'
							className='h-9 gap-2'>
							<Plus className='size-4' />
							Yeni Adres
							<span className='ml-1 rounded-md bg-background/20 px-1.5 text-[10px] font-bold text-primary-foreground'>
								{userAddresses.length}/3
							</span>
						</Button>
					</div>
					<div className='space-y-3'>
						{userAddresses.map((a) => (
							<div
								key={a.id}
								className='rounded-xl border border-neutral-200 bg-background p-4'>
								<div className='flex items-start justify-between gap-3'>
									<div className='min-w-0 space-y-1'>
										{a.default ? (
											<Badge variant='primarySoft'>Varsayılan</Badge>
										) : null}
										<div className='text-sm font-bold text-secondary-900'>
											{a.label}
										</div>
										<div className='text-sm font-semibold text-secondary-900'>
											{a.name}
										</div>
										<div className='text-xs text-neutral-500'>{a.phone}</div>
										<div className='text-sm text-neutral-600'>{a.full}</div>
									</div>
									<div className='flex shrink-0 items-center gap-1'>
										<button
											type='button'
											aria-label='Düzenle'
											className='grid size-8 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100 hover:text-primary-600'>
											<Pencil className='size-4' />
										</button>
										<button
											type='button'
											aria-label='Sil'
											className='grid size-8 place-items-center rounded-lg text-secondary-900 transition hover:bg-danger-50 hover:text-danger-600'>
											<Trash2 className='size-4' />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Şifre Değiştir */}
				<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
						<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
						Şifre Değiştir
					</h2>
					<div className='grid gap-4 sm:grid-cols-2'>
						<FormField label='Mevcut Şifre'>
							<div className='relative'>
								<Lock className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									type='password'
									placeholder='••••••••'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10 pr-10'
								/>
								<button
									type='button'
									aria-label='Şifreyi göster'
									className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-secondary-900'>
									<Eye className='size-4' />
								</button>
							</div>
						</FormField>
						<FormField label='Yeni Şifre'>
							<div className='relative'>
								<Lock className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									type='password'
									placeholder='••••••••'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10 pr-10'
								/>
								<button
									type='button'
									aria-label='Şifreyi göster'
									className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-secondary-900'>
									<Eye className='size-4' />
								</button>
							</div>
						</FormField>
						<FormField
							label='Yeni Şifre Tekrar'
							className='sm:col-span-2'>
							<div className='relative'>
								<Lock className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400' />
								<Input
									type='password'
									placeholder='••••••••'
									className='h-10 rounded-lg border-neutral-200 bg-background pl-10 pr-10'
								/>
								<button
									type='button'
									aria-label='Şifreyi göster'
									className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-secondary-900'>
									<Eye className='size-4' />
								</button>
							</div>
						</FormField>
					</div>
					<div className='rounded-xl border border-neutral-200 bg-background p-3 text-xs text-neutral-600'>
						<div className='font-semibold text-secondary-900'>
							Yeni şifre gereksinimleri:
						</div>
						<div className='mt-1 grid gap-1 sm:grid-cols-2'>
							<span className='flex items-center gap-1.5'>
								<Check className='size-3 text-success-600' /> En az 8 karakter
							</span>
							<span className='flex items-center gap-1.5'>
								<Check className='size-3 text-success-600' /> Büyük harf (A-Z)
							</span>
							<span className='flex items-center gap-1.5'>
								<Check className='size-3 text-success-600' /> Küçük harf (a-z)
							</span>
							<span className='flex items-center gap-1.5'>
								<Check className='size-3 text-success-600' /> Rakam (0-9)
							</span>
						</div>
					</div>
					<div className='flex justify-end'>
						<Button
							type='button'
							className='h-10 w-full sm:w-auto'>
							Şifreyi Güncelle
						</Button>
					</div>
				</section>

				{/* Bildirim Tercihleri */}
				<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
						<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
						Bildirim Tercihleri
					</h2>
					<div className='space-y-3 rounded-xl border border-neutral-200 bg-background p-4'>
						<NotificationToggle
							icon={<MessageSquare className='size-4' />}
							title='E-posta Bildirimleri'
							description='Önemli güncellemeler için e-posta al'
							defaultOn
							tone='bg-primary-100 text-primary-700'
						/>
						<NotificationToggle
							icon={<Bell className='size-4' />}
							title='Anlık Bildirimler'
							description='Tarayıcı bildirimlerini al'
							defaultOn
							tone='bg-primary-100 text-primary-700'
						/>
						<NotificationToggle
							icon={<Package className='size-4' />}
							title='Sipariş Güncellemeleri'
							description='Sipariş durumu değişikliklerinde bildirim al'
							defaultOn
							tone='bg-success-100 text-success-700'
						/>
						<NotificationToggle
							icon={<MessageSquare className='size-4' />}
							title='Mesaj Uyarıları'
							description='Yeni mesaj geldiğinde bildirim al'
							defaultOn
							tone='bg-success-100 text-success-700'
						/>
						<NotificationToggle
							icon={<Tag className='size-4' />}
							title='Fiyat Düşüşü Uyarıları'
							description='Favori ürünlerin fiyat düşüşünde haber ver'
							defaultOn
							tone='bg-danger-100 text-danger-600'
						/>
						<NotificationToggle
							icon={<Sparkles className='size-4' />}
							title='Pazarlama E-postaları'
							description='Kampanya ve fırsatlardan haberdar ol'
							tone='bg-warning-100 text-warning-700'
						/>
					</div>
				</section>

				{/* Güvenlik */}
				<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
						<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
						Güvenlik
					</h2>
					<div className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background p-4'>
						<span className='grid size-9 shrink-0 place-items-center rounded-lg bg-neutral-100 text-secondary-900'>
							<ShieldCheck className='size-4' />
						</span>
						<div className='min-w-0 flex-1'>
							<div className='text-sm font-semibold text-secondary-900'>
								İki Faktörlü Doğrulama
							</div>
							<div className='text-xs text-neutral-500'>
								Ekstra güvenlik katmanı ekleyin
							</div>
						</div>
						<Button
							type='button'
							variant='outline'
							className='h-9 border-neutral-200'>
							Etkinleştir
						</Button>
					</div>
				</section>

				{/* Tehlikeli Bölge */}
				<section className='space-y-4 rounded-2xl border border-danger-200 bg-danger-50 p-5'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-danger-700'>
						<span className='inline-block h-5 w-1 rounded-full bg-danger-500' />
						Tehlikeli Bölge
					</h2>
					<div className='flex flex-col gap-3 rounded-xl border border-danger-200 bg-background p-4 sm:flex-row sm:items-center'>
						<div className='min-w-0 flex-1'>
							<div className='text-sm font-bold text-secondary-900'>
								Hesabı Sil
							</div>
							<div className='text-xs text-neutral-600'>
								Hesabınız ve tüm verileriniz kalıcı olarak silinir.
							</div>
						</div>
						<Button
							type='button'
							variant='destructive'
							className='h-10 gap-2'>
							<Trash2 className='size-4' />
							Hesabı Sil
						</Button>
					</div>
				</section>
			</form>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Favorites main — favori ilanlar listesi                             */
/* ------------------------------------------------------------------ */
function FavoritesMain({
	onSelectProduct,
	onBack,
}: {
	onSelectProduct?: () => void;
	onBack?: () => void;
}) {
	const allFavorites = [...popular, ...discounted, ...popular.slice(0, 2)];
	const [favorites, setFavorites] = useState<number[]>(
		allFavorites.map((_, i) => i),
	);
	const visible = favorites.map((i) => allFavorites[i]);
	const toggle = (originalIndex: number) =>
		setFavorites((prev) => prev.filter((i) => i !== originalIndex));
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Favorilerim
					</h1>
				</div>
				<Button
					variant='outline'
					className='h-10 gap-2 border-neutral-200'>
					<Share2 className='size-4' />
					Listeyi paylaş
				</Button>
			</div>

			{visible.length === 0 ? (
				<div className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-6 py-16 text-center'>
					<div className='grid size-14 place-items-center rounded-full bg-background text-neutral-400'>
						<Heart className='size-7' />
					</div>
					<h2 className='font-display text-lg font-bold text-secondary-900'>
						Favori listen boş
					</h2>
					<p className='max-w-md text-sm text-neutral-500'>
						Beğendiğin ilanları kalp ikonuyla favorilere ekleyebilirsin.
					</p>
				</div>
			) : (
				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{favorites.map((idx) => (
						<ProductCard
							key={idx}
							p={allFavorites[idx]}
							favorited
							onToggleFavorite={() => toggle(idx)}
							onSelect={onSelectProduct}
						/>
					))}
				</div>
			)}
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  My Listings main — kullanıcının kendi ilanları                      */
/* ------------------------------------------------------------------ */
type ListingStatus = 'published' | 'sold' | 'passive' | 'pending';

type MyListing = {
	title: string;
	price: string;
	views: string;
	likes: string;
	scale: string;
	tone: string;
	status: ListingStatus;
};

const myListings: MyListing[] = [
	{
		title: 'Honda Civic Type R FK8 Championship White',
		price: '1.249',
		views: '482',
		likes: '64',
		scale: '1:18',
		tone: 'from-primary-100 to-primary-50',
		status: 'published',
	},
	{
		title: 'Corvette C7 Stingray Z51 Torch Red',
		price: '1.890',
		views: '256',
		likes: '38',
		scale: '1:24',
		tone: 'from-secondary-100 to-secondary-50',
		status: 'sold',
	},
	{
		title: 'F1 Car McLaren MP4 Limited Edition',
		price: '3.250',
		views: '1.2K',
		likes: '142',
		scale: '1:18',
		tone: 'from-primary-50 to-primary-100',
		status: 'published',
	},
	{
		title: 'Mercedes McLaren P1 Pearl Yellow Detail',
		price: '2.490',
		views: '584',
		likes: '88',
		scale: '1:18',
		tone: 'from-warning-100 to-warning-50',
		status: 'passive',
	},
	{
		title: 'Supermarine Spitfire Mk.II 1:32',
		price: '720',
		views: '186',
		likes: '24',
		scale: '1:32',
		tone: 'from-secondary-100 to-neutral-100',
		status: 'published',
	},
	{
		title: 'Matchbox 007 Aston Martin DB5',
		price: '129',
		views: '894',
		likes: '102',
		scale: '1:64',
		tone: 'from-neutral-100 to-neutral-50',
		status: 'published',
	},
	{
		title: 'Toyota Tundra HiLux Off-Road',
		price: '548',
		views: '312',
		likes: '46',
		scale: '1:24',
		tone: 'from-primary-100 to-primary-200',
		status: 'published',
	},
	{
		title: 'Matchbox Custom Rat Rod Patina',
		price: '79',
		views: '124',
		likes: '18',
		scale: '1:64',
		tone: 'from-neutral-100 to-secondary-100',
		status: 'published',
	},
	{
		title: 'Greenlight Pontiac GTO Judge 1969',
		price: '922',
		views: '402',
		likes: '54',
		scale: '1:18',
		tone: 'from-primary-200 to-primary-100',
		status: 'published',
	},
	{
		title: 'Klasik İngiliz Buharlı Lokomotif 1:160',
		price: '410',
		views: '218',
		likes: '32',
		scale: '1:160',
		tone: 'from-secondary-50 to-neutral-100',
		status: 'published',
	},
];

const listingFilters: { key: 'all' | ListingStatus; label: string }[] = [
	{ key: 'all', label: 'Tümü' },
	{ key: 'published', label: 'Yayında' },
	{ key: 'passive', label: 'Pasif' },
	{ key: 'pending', label: 'Onayda' },
	{ key: 'sold', label: 'Tükendi' },
];

function ListingStatusBadge({ status }: { status: ListingStatus }) {
	if (status === 'published') return <Badge variant='success'>Yayında</Badge>;
	if (status === 'sold') return <Badge variant='danger'>Tükendi</Badge>;
	if (status === 'passive') return <Badge variant='dark'>Pasif</Badge>;
	return <Badge variant='warning'>Onayda</Badge>;
}

function MyListingCard({
	l,
	onEdit,
	onToggleStatus,
}: {
	l: MyListing;
	onEdit?: () => void;
	onToggleStatus?: () => void;
}) {
	const isPassive = l.status === 'passive' || l.status === 'sold';
	return (
		<div className='group flex flex-col gap-3 rounded-2xl bg-neutral-50 p-3 transition hover:bg-neutral-100'>
			<div
				className={`relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${l.tone}`}>
				<img
					src={placeholderImg(`listing-${l.title}`, 600)}
					alt={l.title}
					loading='lazy'
					className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.04]'
				/>
				<div className='absolute left-2 top-2 sm:left-3 sm:top-3'>
					<ListingStatusBadge status={l.status} />
				</div>
				<Badge
					variant='surface'
					className='absolute bottom-2 left-2 sm:bottom-3 sm:left-3'>
					{l.scale}
				</Badge>
			</div>

			<div className='space-y-1.5 px-1 pb-1'>
				<div className='flex items-center gap-3 text-[11px] font-semibold text-neutral-500 sm:text-xs'>
					<span className='flex items-center gap-1'>
						<Heart className='size-3 text-primary-500 sm:size-3.5' />
						{l.likes}
					</span>
					<span className='flex items-center gap-1'>
						<Eye className='size-3 text-secondary-900 sm:size-3.5' />
						{l.views}
					</span>
				</div>
				<h3 className='line-clamp-2 min-h-[2.6em] text-sm font-semibold leading-snug text-secondary-900 group-hover:text-primary-600 sm:text-base'>
					{l.title}
				</h3>
				<div className='flex items-baseline gap-1 pt-1'>
					<span className='text-xl font-extrabold text-secondary-900 sm:text-2xl'>
						₺{l.price}
					</span>
				</div>
				<div className='flex gap-1.5 pt-2'>
					<button
						type='button'
						onClick={onEdit}
						className='inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-background text-xs font-semibold text-secondary-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 sm:text-sm'>
						{isPassive ? (
							<>
								<Repeat className='size-3.5' />
								Yenile
							</>
						) : (
							<>
								<Pencil className='size-3.5' />
								Düzenle
							</>
						)}
					</button>
					<button
						type='button'
						onClick={onToggleStatus}
						className='inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary-500 text-xs font-semibold text-primary-foreground transition hover:bg-primary-600 sm:text-sm'>
						{isPassive ? (
							<>
								<Zap
									className='size-3.5'
									strokeWidth={2.4}
								/>
								Yayınla
							</>
						) : (
							<>
								<Eye className='size-3.5' />
								Pasifte
							</>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

function MyListingsMain({
	onCreateListing,
	onBack,
}: {
	onCreateListing?: () => void;
	onBack?: () => void;
}) {
	const [filter, setFilter] = useState<'all' | ListingStatus>('all');
	const filtered =
		filter === 'all'
			? myListings
			: myListings.filter((l) => l.status === filter);
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						İlanlarım
					</h1>
				</div>
				<Button
					onClick={onCreateListing}
					className='h-10 gap-2'>
					<Plus className='size-4' />
					Yeni İlan
				</Button>
			</div>

			<div className='mb-6 flex items-start gap-3 rounded-xl border border-warning-200 bg-warning-50 p-4 text-sm'>
				<Star className='mt-0.5 size-5 shrink-0 fill-warning-500 text-warning-500' />
				<div className='min-w-0'>
					<div className='font-bold text-warning-900'>
						Yıldızlı yetki bekleniyor
					</div>
					<p className='mt-0.5 text-warning-800'>
						Hesabını yıldızlı satıcı yaparak ilanlarını öne çıkarabilir, daha
						hızlı satabilirsin.
					</p>
				</div>
			</div>

			<div className='mb-6 -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1'>
				{listingFilters.map((f) => {
					const count =
						f.key === 'all'
							? myListings.length
							: myListings.filter((l) => l.status === f.key).length;
					const active = filter === f.key;
					return (
						<button
							key={f.key}
							type='button'
							onClick={() => setFilter(f.key)}
							className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
								active
									? 'bg-primary-500 text-primary-foreground'
									: 'bg-neutral-100 text-secondary-900 hover:bg-neutral-200'
							}`}>
							{f.label}
							<span
								className={`rounded-md px-1.5 text-[10px] font-bold ${
									active
										? 'bg-background/20 text-primary-foreground'
										: 'bg-background text-neutral-600'
								}`}>
								{count}
							</span>
						</button>
					);
				})}
			</div>

			{filtered.length === 0 ? (
				<div className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-6 py-16 text-center'>
					<div className='grid size-14 place-items-center rounded-full bg-background text-neutral-400'>
						<Store className='size-7' />
					</div>
					<h2 className='font-display text-lg font-bold text-secondary-900'>
						Bu durumda ilan yok
					</h2>
					<p className='max-w-md text-sm text-neutral-500'>
						Seçili filtrede gösterilecek ilan bulunamadı.
					</p>
				</div>
			) : (
				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
					{filtered.map((l, i) => (
						<MyListingCard
							key={i}
							l={l}
						/>
					))}
				</div>
			)}
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Offers main — tekliflerim                                          */
/* ------------------------------------------------------------------ */
type OfferStatus = 'pending' | 'accepted' | 'rejected' | 'countered';

type OfferItem = {
	productTitle: string;
	productMeta: string;
	productTone: string;
	offerPrice: string;
	listPrice: string;
	from: string;
	status: OfferStatus;
};

const offers: OfferItem[] = [
	{
		productTitle: 'Corolla',
		productMeta: '1:24 · İdent Premium',
		productTone: 'from-secondary-100 to-secondary-50',
		offerPrice: '670',
		listPrice: '850',
		from: 'AD Premium',
		status: 'countered',
	},
	{
		productTitle: 'Corolla',
		productMeta: '1:24 · İdent Premium',
		productTone: 'from-primary-100 to-primary-50',
		offerPrice: '699',
		listPrice: '850',
		from: 'AD Premium',
		status: 'pending',
	},
	{
		productTitle: 'Supermarine Spitfire Mk.II 1:72',
		productMeta: '1:72 · İdent Premium',
		productTone: 'from-neutral-100 to-secondary-100',
		offerPrice: '500',
		listPrice: '720',
		from: 'AD Premium',
		status: 'rejected',
	},
	{
		productTitle: 'Supermarine Spitfire Mk.II 1:72',
		productMeta: '1:72 · İdent Premium',
		productTone: 'from-secondary-50 to-primary-50',
		offerPrice: '530',
		listPrice: '720',
		from: 'AD Premium',
		status: 'pending',
	},
	{
		productTitle: 'F1 Car',
		productMeta: '1:18 · İdent Premium',
		productTone: 'from-primary-50 to-primary-100',
		offerPrice: '900',
		listPrice: '1.249',
		from: 'AD Premium',
		status: 'pending',
	},
	{
		productTitle: 'Toyota Tundra Hilux',
		productMeta: '1:24 · Mert Demirci',
		productTone: 'from-warning-100 to-warning-50',
		offerPrice: '127,59',
		listPrice: '548',
		from: 'Mert Demirci',
		status: 'rejected',
	},
	{
		productTitle: 'Greenlight Pontiac GTO Judge',
		productMeta: '1:18 · KK Premium',
		productTone: 'from-warning-100 to-primary-100',
		offerPrice: '358,72',
		listPrice: '922',
		from: 'KK Premium',
		status: 'rejected',
	},
	{
		productTitle: 'Matchbox 007 Aston Martin DB5',
		productMeta: '1:64 · AD Premium',
		productTone: 'from-secondary-100 to-neutral-100',
		offerPrice: '472,76',
		listPrice: '129',
		from: 'AD Premium',
		status: 'accepted',
	},
];

function OfferStatusBadge({ status }: { status: OfferStatus }) {
	if (status === 'pending') return <Badge variant='warning'>Beklemede</Badge>;
	if (status === 'accepted') return <Badge variant='success'>Kabul</Badge>;
	if (status === 'rejected') return <Badge variant='danger'>Reddedildi</Badge>;
	return <Badge variant='default'>Karşı Teklif</Badge>;
}

function OfferRow({ o }: { o: OfferItem }) {
	const isPending = o.status === 'pending' || o.status === 'countered';
	return (
		<article className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
			{/* Header — bar+title (sol) + badge (sağ üst) */}
			<header className='flex flex-wrap items-start justify-between gap-3'>
				<div className='min-w-0'>
					<h2 className='font-display flex items-start gap-2 text-sm font-bold text-secondary-900 sm:text-base'>
						<span className='mt-0.5 inline-block h-5 w-1 shrink-0 rounded-full bg-primary-500' />
						<span className='line-clamp-2 break-words'>{o.productTitle}</span>
					</h2>
					<div className='mt-1 pl-3 text-xs text-neutral-500'>
						{o.productMeta}
					</div>
				</div>
				<OfferStatusBadge status={o.status} />
			</header>

			{/* Body — görsel + detay yazıları, kart-içi bg-background bloğu */}
			<div className='flex items-start gap-3 rounded-xl bg-background p-3 sm:gap-4'>
				<div
					className={`relative grid aspect-square size-20 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br ${o.productTone} sm:size-24`}>
					<img
						src={placeholderImg(`offer-${o.productTitle}`, 240)}
						alt={o.productTitle}
						loading='lazy'
						className='absolute inset-0 size-full object-cover'
					/>
				</div>
				<div className='min-w-0 flex-1 space-y-2'>
					<div className='flex flex-wrap items-baseline gap-x-5 gap-y-2'>
						<div>
							<div className='text-[11px] font-medium text-neutral-500'>
								Verilen Teklif
							</div>
							<div className='mt-0.5 text-lg font-extrabold text-primary-600 sm:text-xl'>
								₺{o.offerPrice}
							</div>
						</div>
						<div>
							<div className='text-[11px] font-medium text-neutral-500'>
								Liste Fiyatı
							</div>
							<div className='mt-0.5 text-sm font-semibold text-secondary-900 sm:text-base'>
								₺{o.listPrice}
							</div>
						</div>
					</div>
					<div className='flex min-w-0 items-center gap-1.5 text-xs text-neutral-500'>
						<User className='size-3.5 shrink-0' />
						<span className='truncate'>{o.from}</span>
					</div>
				</div>
			</div>

			{/* Aksiyonlar — altta yan yana, mobilde de yan yana */}
			<div className='flex flex-wrap items-center gap-2'>
				<Button
					type='button'
					size='sm'
					className='flex-1 gap-1.5 sm:flex-none'
					disabled={!isPending}>
					<Repeat className='size-3.5' />
					Karşı Teklif
				</Button>
				<Button
					type='button'
					size='sm'
					variant='outline'
					className='flex-1 border-neutral-200 bg-background sm:flex-none'>
					Detay
				</Button>
			</div>
		</article>
	);
}

function OffersMain({ onBack }: { onBack?: () => void }) {
	const [tab, setTab] = useState<'received' | 'sent'>('received');
	const stats = [
		{
			icon: <FileText className='size-4' />,
			value: offers
				.filter((o) => o.status === 'pending' || o.status === 'countered')
				.length.toString(),
			label: 'Aktif Teklif',
			tone: 'bg-primary-100 text-primary-700',
		},
		{
			icon: <CheckCircle2 className='size-4' />,
			value: offers.length.toString(),
			label: 'Toplam Teklif',
			tone: 'bg-success-100 text-success-700',
		},
		{
			icon: <Wallet className='size-4' />,
			value: '₺44.491,46',
			label: 'Toplam Değer',
			tone: 'bg-warning-100 text-warning-700',
		},
	];
	const tabs: { key: 'received' | 'sent'; label: string; count: number }[] = [
		{ key: 'received', label: 'Aldıklarım', count: offers.length },
		{ key: 'sent', label: 'Gönderdiklerim', count: 0 },
	];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Tekliflerim
					</h1>
				</div>
				<Button
					variant='outline'
					className='h-10 gap-2 border-neutral-200'>
					<SlidersHorizontal className='size-4' />
					Filtrele
				</Button>
			</div>

			<div className='mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3'>
				{stats.map((s) => (
					<div
						key={s.label}
						className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background px-4 py-4'>
						<span
							className={`grid size-10 shrink-0 place-items-center rounded-lg ${s.tone}`}>
							{s.icon}
						</span>
						<div className='min-w-0'>
							<div className='text-2xl font-extrabold text-secondary-900'>
								{s.value}
							</div>
							<div className='text-xs font-medium text-neutral-500'>
								{s.label}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='mb-6 -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1'>
				{tabs.map((t) => {
					const active = tab === t.key;
					return (
						<button
							key={t.key}
							type='button'
							onClick={() => setTab(t.key)}
							className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
								active
									? 'bg-primary-500 text-primary-foreground'
									: 'bg-neutral-100 text-secondary-900 hover:bg-neutral-200'
							}`}>
							{t.label}
							<span
								className={`rounded-md px-1.5 text-[10px] font-bold ${
									active
										? 'bg-background/20 text-primary-foreground'
										: 'bg-background text-neutral-600'
								}`}>
								{t.count}
							</span>
						</button>
					);
				})}
			</div>

			{tab === 'received' ? (
				<div className='space-y-6'>
					{offers.map((o, i) => (
						<OfferRow
							key={i}
							o={o}
						/>
					))}
				</div>
			) : (
				<div className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-6 py-16 text-center'>
					<div className='grid size-14 place-items-center rounded-full bg-background text-neutral-400'>
						<FileText className='size-7' />
					</div>
					<h2 className='font-display text-lg font-bold text-secondary-900'>
						Henüz teklif göndermedin
					</h2>
					<p className='max-w-md text-sm text-neutral-500'>
						Beğendiğin ürünlere teklif vererek pazarlık yapabilirsin.
					</p>
				</div>
			)}
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Messages main — mesajlar                                           */
/* ------------------------------------------------------------------ */
type ChatPreview = {
	id: string;
	name: string;
	initials: string;
	productTitle: string;
	preview: string;
	time: string;
	unread?: boolean;
};

const chatPreviews: ChatPreview[] = [
	{
		id: 'c1',
		name: 'Zeynep Hobici',
		initials: 'ZH',
		productTitle: 'Hot Wheels MX-5 1:64',
		preview: 'Tabii, teklif yapabilirsiniz. Fotoğrafları da hemen gönderirim.',
		time: '15:08',
	},
	{
		id: 'c2',
		name: 'Burak American',
		initials: 'BA',
		productTitle: 'Minichamps Porsche 917K Gulf 1:43',
		preview: 'Tabii, teklif yapabilirsiniz. Fotoğrafları da hemen gönderirim.',
		time: '15:08',
		unread: true,
	},
	{
		id: 'c3',
		name: 'Mert Demirci',
		initials: 'MD',
		productTitle: 'Tomica Toyota Supra 1:64',
		preview: 'Tabii, teklif yapabilirsiniz. Fotoğrafları da hemen gönderirim.',
		time: '14:30',
	},
];

type ChatMessage = {
	from: 'self' | 'other';
	text: string;
	time: string;
};

const conversation: ChatMessage[] = [
	{
		from: 'other',
		text: 'Merhaba, Minichamps Porsche 917K Gulf 1:43 hala satılık mı?',
		time: '12:08',
	},
	{
		from: 'self',
		text: 'Evet, hala satılık. İlgileniyorsanız detaylı fotoğraf gönderebilirim.',
		time: '13:08',
	},
	{
		from: 'other',
		text: 'Evet lütfen, bir de fiyatta pazarlık payı var mı?',
		time: '14:08',
	},
	{
		from: 'self',
		text: 'Tabii, teklif yapabilirsiniz. Fotoğrafları da hemen gönderiyorum.',
		time: '15:08',
	},
];

function MessagesMain({ onBack }: { onBack?: () => void }) {
	const [selected, setSelected] = useState('c2');
	const [draft, setDraft] = useState('');
	const active = chatPreviews.find((c) => c.id === selected);
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Mesajlar
					</h1>
				</div>
			</div>

			<div className='grid h-[calc(100vh-220px)] min-h-[500px] gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-background lg:grid-cols-[320px_1fr]'>
				{/* Sohbet listesi */}
				<aside className='flex min-h-0 flex-col border-b border-neutral-200 lg:border-b-0 lg:border-r'>
					<div className='border-b border-neutral-200 p-4'>
						<div className='text-base font-bold text-secondary-900'>
							Mesajlar
						</div>
						<div className='text-xs text-neutral-500'>
							{chatPreviews.length} sohbet
						</div>
					</div>
					<div className='min-h-0 flex-1 overflow-y-auto'>
						{chatPreviews.map((c) => {
							const isActive = c.id === selected;
							return (
								<button
									key={c.id}
									type='button'
									onClick={() => setSelected(c.id)}
									className={`flex w-full items-start gap-3 border-b border-neutral-200 p-4 text-left transition ${
										isActive ? 'bg-primary-50' : 'hover:bg-neutral-50'
									}`}>
									<span className='grid size-9 shrink-0 place-items-center rounded-full bg-primary-500 text-xs font-extrabold text-primary-foreground'>
										{c.initials}
									</span>
									<div className='min-w-0 flex-1'>
										<div className='flex items-center justify-between gap-2'>
											<span className='truncate text-sm font-bold text-secondary-900'>
												{c.name}
											</span>
											<span className='shrink-0 text-[10px] font-medium text-neutral-500'>
												{c.time}
											</span>
										</div>
										<div className='mt-0.5 truncate text-[11px] font-semibold text-primary-600'>
											{c.productTitle}
										</div>
										<p
											className={`mt-1 line-clamp-2 text-xs ${
												c.unread
													? 'font-semibold text-secondary-900'
													: 'text-neutral-500'
											}`}>
											{c.preview}
										</p>
									</div>
								</button>
							);
						})}
					</div>
				</aside>

				{/* Sohbet paneli */}
				<section className='flex min-h-0 flex-col'>
					{active ? (
						<>
							<div className='flex items-center gap-3 border-b border-neutral-200 p-4'>
								<span className='grid size-10 shrink-0 place-items-center rounded-full bg-primary-500 text-xs font-extrabold text-primary-foreground'>
									{active.initials}
								</span>
								<div className='min-w-0'>
									<div className='truncate text-sm font-bold text-secondary-900'>
										{active.name}
									</div>
									<div className='flex items-center gap-1 truncate text-xs text-primary-600'>
										<Tag className='size-3' />
										{active.productTitle}
									</div>
								</div>
							</div>
							<div className='min-h-0 flex-1 space-y-3 overflow-y-auto bg-neutral-50 p-4'>
								{conversation.map((m, i) => (
									<div
										key={i}
										className={`flex ${
											m.from === 'self' ? 'justify-end' : 'justify-start'
										}`}>
										<div
											className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
												m.from === 'self'
													? 'bg-primary-500 text-primary-foreground'
													: 'bg-background text-secondary-900 shadow-sm'
											}`}>
											<div>{m.text}</div>
											<div
												className={`mt-1 text-right text-[10px] font-medium ${
													m.from === 'self'
														? 'text-primary-foreground/80'
														: 'text-neutral-500'
												}`}>
												{m.time}
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='border-t border-neutral-200 p-4'>
								<div className='flex items-end gap-2'>
									<div className='relative flex-1'>
										<textarea
											value={draft}
											onChange={(e) => setDraft(e.target.value.slice(0, 1000))}
											rows={1}
											placeholder='Mesajınızı yazın…'
											className='w-full resize-none rounded-lg border border-neutral-200 bg-background px-3 py-2.5 text-sm text-secondary-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30'
										/>
										<div className='mt-1 text-right text-[10px] text-neutral-400'>
											{draft.length}/1000
										</div>
									</div>
									<Button
										type='button'
										className='h-10 shrink-0 px-5'
										disabled={!draft.trim()}>
										Gönder
									</Button>
								</div>
							</div>
						</>
					) : (
						<div className='flex flex-1 items-center justify-center p-6 text-center'>
							<div>
								<div className='mx-auto grid size-14 place-items-center rounded-full bg-neutral-100 text-neutral-400'>
									<MessageSquare className='size-7' />
								</div>
								<div className='mt-3 text-base font-bold text-secondary-900'>
									Bir sohbet seçin
								</div>
								<p className='mt-0.5 text-sm text-neutral-500'>
									Soldaki listeden bir sohbete tıklayarak mesajları
									görüntüleyebilirsiniz.
								</p>
							</div>
						</div>
					)}
				</section>
			</div>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Orders main — siparişlerim                                         */
/* ------------------------------------------------------------------ */
type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

type OrderItem = {
	id: string;
	date: string;
	productTitle: string;
	productScale: string;
	productTone: string;
	qty: number;
	unitPrice: string;
	total: string;
	seller: string;
	cargo?: { firm: string; tracking: string };
	status: OrderStatus;
	type: 'buy' | 'sell';
};

const orders: OrderItem[] = [
	{
		id: 'ORD-MOIN6L9H-YFVX',
		date: '21.04.2026',
		productTitle: 'AUTOart Mercedes 300SL Gullwing 1:18',
		productScale: '1:18',
		productTone: 'from-secondary-100 to-secondary-50',
		qty: 1,
		unitPrice: '3.932,48',
		total: '3.932,48',
		seller: 'Ayşe Vintage',
		cargo: {
			firm: 'aras',
			tracking: 'ARAS507245893248',
		},
		status: 'shipped',
		type: 'buy',
	},
	{
		id: 'ORD-MOIN6LBL-5J46',
		date: '30.03.2026',
		productTitle: 'Maisto 1969 Camaro SS 1:24',
		productScale: '1:24',
		productTone: 'from-primary-100 to-primary-50',
		qty: 1,
		unitPrice: '392,19',
		total: '392,19',
		seller: 'Ayşe Vintage',
		status: 'processing',
		type: 'buy',
	},
];

function OrderStatusBadge({ status }: { status: OrderStatus }) {
	if (status === 'processing')
		return <Badge variant='warningSoft'>İşleniyor</Badge>;
	if (status === 'shipped')
		return <Badge variant='primarySoft'>Kargoya Verildi</Badge>;
	if (status === 'delivered')
		return <Badge variant='successSoft'>Teslim Edildi</Badge>;
	return <Badge variant='dangerSoft'>İptal Edildi</Badge>;
}

function OrderCard({ o }: { o: OrderItem }) {
	const isShipped = o.status === 'shipped' || o.status === 'delivered';
	return (
		<article className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
			{/* Header — bar+title + status */}
			<header className='flex flex-wrap items-start justify-between gap-3'>
				<div className='min-w-0'>
					<h2 className='font-display flex items-center gap-2 text-sm font-bold text-secondary-900 sm:text-base'>
						<span className='inline-block h-5 w-1 shrink-0 rounded-full bg-primary-500' />
						<span className='truncate'>Sipariş #{o.id}</span>
					</h2>
					<div className='mt-1 pl-3 text-xs text-neutral-500'>{o.date}</div>
				</div>
				<OrderStatusBadge status={o.status} />
			</header>

			{/* Ürün + toplam */}
			<div className='grid gap-3 rounded-xl bg-background p-3 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4'>
				<div className='flex min-w-0 items-center gap-3'>
					<div
						className={`relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br ${o.productTone} sm:size-16`}>
						<img
							src={placeholderImg(`order-${o.productTitle}`, 160)}
							alt={o.productTitle}
							loading='lazy'
							className='absolute inset-0 size-full object-cover'
						/>
					</div>
					<div className='min-w-0 flex-1'>
						<div className='line-clamp-2 text-sm font-bold text-secondary-900 sm:text-base'>
							{o.productTitle}
						</div>
						<div className='mt-0.5 text-xs text-neutral-500'>
							{o.qty} adet × {o.unitPrice} TL
						</div>
					</div>
				</div>
				<div className='border-t border-neutral-200 pt-3 sm:border-t-0 sm:pt-0 sm:text-right'>
					<div className='text-xs font-medium text-neutral-500'>Toplam</div>
					<div className='text-lg font-extrabold text-secondary-900 sm:text-xl'>
						{o.total} TL
					</div>
				</div>
			</div>

			{/* Satıcı + kargo bilgisi */}
			<div className='grid gap-2 sm:grid-cols-2'>
				<div className='rounded-xl bg-background px-3 py-2.5 text-xs'>
					<span className='text-neutral-500'>Satıcı: </span>
					<span className='font-semibold text-secondary-900'>{o.seller}</span>
				</div>
				{isShipped && o.cargo ? (
					<div className='space-y-0.5 rounded-xl bg-background px-3 py-2.5 text-xs'>
						<div>
							<span className='text-neutral-500'>Kargo Firması: </span>
							<span className='font-semibold text-secondary-900'>
								{o.cargo.firm}
							</span>
						</div>
						<div>
							<span className='text-neutral-500'>Takip No: </span>
							<span className='font-semibold text-secondary-900'>
								{o.cargo.tracking}
							</span>
						</div>
					</div>
				) : null}
			</div>

			{/* Aksiyonlar — mobilde grid, sm+ wrap */}
			<div className='grid grid-cols-2 gap-2 sm:flex sm:flex-wrap'>
				<Button
					type='button'
					size='sm'
					variant='outline'
					className='w-full border-neutral-200 bg-background sm:w-auto'>
					Detaylar
				</Button>
				{isShipped ? (
					<Button
						type='button'
						size='sm'
						className='w-full sm:w-auto'>
						Siparişi Takip Et
					</Button>
				) : null}
				<Button
					type='button'
					size='sm'
					variant='outline'
					className='w-full border-neutral-200 bg-background sm:w-auto'>
					Fatura İndir
				</Button>
				<Button
					type='button'
					size='sm'
					className='w-full sm:w-auto'>
					Tekrar Sipariş Ver
				</Button>
			</div>
		</article>
	);
}

function OrdersMain({ onBack }: { onBack?: () => void }) {
	const [view, setView] = useState<'buy' | 'sell'>('buy');
	const [filter, setFilter] = useState<'all' | 'active' | 'cancelled'>(
		'active',
	);
	const filtered = orders.filter((o) => {
		if (o.type !== view) return false;
		if (filter === 'all') return true;
		if (filter === 'active')
			return (
				o.status === 'processing' ||
				o.status === 'shipped' ||
				o.status === 'delivered'
			);
		return o.status === 'cancelled';
	});
	const viewTabs: { key: 'buy' | 'sell'; label: string }[] = [
		{ key: 'buy', label: 'Toplam Alış' },
		{ key: 'sell', label: 'Toplam Satış' },
	];
	const statusTabs: { key: 'all' | 'active' | 'cancelled'; label: string }[] = [
		{ key: 'all', label: 'Tümü' },
		{ key: 'active', label: 'Aktif' },
		{ key: 'cancelled', label: 'İptal Edilenler' },
	];
	return (
		<main className='mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10'>
			<div className='mb-6 space-y-4 lg:flex lg:items-center lg:justify-between lg:gap-3 lg:space-y-0'>
				<div className='flex items-center gap-3 sm:gap-4'>
					{onBack ? (
						<button
							type='button'
							onClick={onBack}
							aria-label='Geri'
							className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
							<ChevronLeft className='size-5' />
						</button>
					) : null}
					<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
						Siparişlerim
					</h1>
				</div>
				<div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center'>
					<div className='inline-flex w-full items-center gap-1 rounded-lg bg-neutral-100 p-1 sm:w-auto'>
						{viewTabs.map((t) => (
							<button
								key={t.key}
								type='button'
								onClick={() => setView(t.key)}
								className={`flex-1 rounded-md px-3 py-1.5 text-sm font-semibold transition sm:flex-none ${
									view === t.key
										? 'bg-primary-500 text-primary-foreground'
										: 'text-secondary-900 hover:text-primary-600'
								}`}>
								{t.label}
							</button>
						))}
					</div>
					<div className='inline-flex w-full items-center gap-1 rounded-lg bg-neutral-100 p-1 sm:w-auto'>
						{statusTabs.map((t) => (
							<button
								key={t.key}
								type='button'
								onClick={() => setFilter(t.key)}
								className={`flex-1 rounded-md px-3 py-1.5 text-sm font-semibold transition sm:flex-none ${
									filter === t.key
										? 'bg-secondary-900 text-primary-foreground'
										: 'text-secondary-900 hover:text-primary-600'
								}`}>
								{t.label}
							</button>
						))}
					</div>
				</div>
			</div>

			{filtered.length === 0 ? (
				<div className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-50 px-6 py-16 text-center'>
					<div className='grid size-14 place-items-center rounded-full bg-background text-neutral-400'>
						<Package className='size-7' />
					</div>
					<h2 className='font-display text-lg font-bold text-secondary-900'>
						Sipariş bulunamadı
					</h2>
					<p className='max-w-md text-sm text-neutral-500'>
						Seçtiğin filtreye uygun bir sipariş yok.
					</p>
				</div>
			) : (
				<div className='space-y-6'>
					{filtered.map((o) => (
						<OrderCard
							key={o.id}
							o={o}
						/>
					))}
				</div>
			)}
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  Membership main — üyelik planları                                  */
/* ------------------------------------------------------------------ */
type MembershipPlan = {
	key: 'free' | 'basic' | 'premium';
	title: string;
	subtitle: string;
	priceMonthly: string;
	priceYearly: string;
	features: { label: string; included: boolean }[];
	current?: boolean;
	popular?: boolean;
};

const membershipPlans: MembershipPlan[] = [
	{
		key: 'free',
		title: 'Ücretsiz',
		subtitle: 'İhtiyaçlarına uygun plan seçin',
		priceMonthly: 'Ücretsiz',
		priceYearly: 'Ücretsiz',
		features: [
			{ label: '10 İlan Limit', included: true },
			{ label: 'Ara', included: true },
			{ label: 'Mesajlar', included: true },
			{ label: 'Takaslar', included: false },
			{ label: 'Koleksiyonlar', included: false },
			{ label: 'Reklamsız', included: false },
		],
	},
	{
		key: 'basic',
		title: 'Temel',
		subtitle: 'Koleksiyoncular için başlangıç',
		priceMonthly: '49,00',
		priceYearly: '470,00',
		features: [
			{ label: '50 İlan Limit', included: true },
			{ label: '6 resim/ilan', included: true },
			{ label: 'Takaslar', included: true },
			{ label: 'Koleksiyonlar', included: true },
			{ label: 'Reklamsız', included: true },
			{ label: '2 öne çıkan ilan', included: true },
		],
	},
	{
		key: 'premium',
		title: 'Premium',
		subtitle: 'En Popüler',
		priceMonthly: '99,00',
		priceYearly: '950,00',
		current: true,
		popular: true,
		features: [
			{ label: '100 İlan Limit', included: true },
			{ label: '10 resim/ilan', included: true },
			{ label: 'Takaslar', included: true },
			{ label: 'Sınırsız Koleksiyonlar', included: true },
			{ label: 'Reklamsız', included: true },
			{ label: '10 öne çıkan ilan', included: true },
		],
	},
];

const membershipFaq = [
	{
		q: 'Yükselt?',
		a: 'İhtiyaçlarına uygun plan seçin',
	},
	{
		q: 'İlan Limiti?',
		a: 'Özellikler',
	},
	{
		q: 'Takaslar?',
		a: 'Takas tekliflerini görüntülemek ve teklif göndermek için giriş yapmanız gerekiyor.',
	},
];

function MembershipMain({ onBack }: { onBack?: () => void }) {
	const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
	return (
		<main className='mx-auto max-w-[1280px] space-y-6 px-4 py-6 sm:px-6 sm:py-10'>
			<div className='flex items-center gap-3 sm:gap-4'>
				{onBack ? (
					<button
						type='button'
						onClick={onBack}
						aria-label='Geri'
						className='grid size-10 shrink-0 place-items-center rounded-lg text-secondary-900 transition hover:bg-neutral-100'>
						<ChevronLeft className='size-5' />
					</button>
				) : null}
				<h1 className='font-display text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl'>
					Üyelik Planları
				</h1>
			</div>

			{/* Mevcut Üyelik Bilgileri */}
			<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<div className='flex flex-wrap items-center justify-between gap-3'>
					<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
						<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
						Mevcut Üyelik Bilgileri
					</h2>
					<Badge variant='primarySoft'>
						<Sparkles className='size-3' /> Mevcut Planın: Premium
					</Badge>
				</div>
				<div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
					<div className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background px-4 py-4'>
						<span className='grid size-10 shrink-0 place-items-center rounded-lg bg-primary-100 text-primary-700'>
							<Calendar className='size-4' />
						</span>
						<div className='min-w-0'>
							<div className='text-xs font-medium text-neutral-500'>
								Üyelik Başlangıç Tarihi
							</div>
							<div className='text-sm font-bold text-secondary-900'>
								28 Nisan 2026
							</div>
						</div>
					</div>
					<div className='flex items-center gap-3 rounded-xl border border-neutral-200 bg-background px-4 py-4'>
						<span className='grid size-10 shrink-0 place-items-center rounded-lg bg-success-100 text-success-700'>
							<Calendar className='size-4' />
						</span>
						<div className='min-w-0'>
							<div className='text-xs font-medium text-neutral-500'>
								Yenilenme Tarihi
							</div>
							<div className='text-sm font-bold text-secondary-900'>
								28 Nisan 2027
							</div>
						</div>
					</div>
				</div>

				<div className='rounded-xl border border-neutral-200 bg-background p-4'>
					<div className='flex flex-wrap items-center justify-between gap-2'>
						<div className='flex items-center gap-2 text-sm font-bold text-secondary-900'>
							<CreditCard className='size-4 text-primary-500' />
							Kayıtlı Kartlar
						</div>
						<button
							type='button'
							className='text-xs font-semibold text-primary-600 transition hover:text-primary-700'>
							Kart Yönetimi
						</button>
					</div>
					<div className='mt-3 rounded-xl border border-warning-200 bg-warning-50 p-4 text-center'>
						<div className='text-sm font-bold text-warning-800'>
							Henüz kayıtlı kartınız yok
						</div>
						<p className='mt-0.5 text-xs text-warning-700'>
							Üyeliğinizin otomatik yenilenmesi için bir kart eklemeniz
							gerekmektedir.
						</p>
						<Button
							type='button'
							className='mt-3 h-9 gap-2'>
							<Plus className='size-4' />
							Kart Ekle
						</Button>
					</div>
				</div>
			</section>

			{/* Faturalandırma toggle */}
			<div className='flex justify-center'>
				<div className='inline-flex items-center gap-1 rounded-lg bg-neutral-100 p-1'>
					<button
						type='button'
						onClick={() => setBilling('monthly')}
						className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
							billing === 'monthly'
								? 'bg-primary-500 text-primary-foreground'
								: 'text-secondary-900 hover:text-primary-600'
						}`}>
						Aylık
					</button>
					<button
						type='button'
						onClick={() => setBilling('yearly')}
						className={`inline-flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-semibold transition ${
							billing === 'yearly'
								? 'bg-primary-500 text-primary-foreground'
								: 'text-secondary-900 hover:text-primary-600'
						}`}>
						Yıllık
						<span
							className={`rounded-md px-1.5 text-[10px] font-bold ${
								billing === 'yearly'
									? 'bg-background/20 text-primary-foreground'
									: 'bg-success-100 text-success-700'
							}`}>
							20% Tasarruf
						</span>
					</button>
				</div>
			</div>

			{/* Planlar */}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				{membershipPlans.map((p) => {
					const price = billing === 'monthly' ? p.priceMonthly : p.priceYearly;
					const period = billing === 'monthly' ? '/ay' : '/yıl';
					const isFree = p.key === 'free';
					return (
						<div
							key={p.key}
							className={`relative flex flex-col gap-4 rounded-2xl p-5 ${
								p.popular
									? 'border-2 border-primary-500 bg-primary-50'
									: 'border border-neutral-200 bg-background'
							}`}>
							{p.popular || p.current ? (
								<div className='flex flex-wrap gap-1.5'>
									{p.current ? (
										<Badge variant='default'>Mevcut Planın</Badge>
									) : null}
									{p.popular ? (
										<Badge variant='success'>En Popüler</Badge>
									) : null}
								</div>
							) : null}
							<div>
								<h3 className='text-lg font-extrabold text-secondary-900'>
									{p.title}
								</h3>
								<p className='mt-0.5 text-xs text-neutral-500'>{p.subtitle}</p>
							</div>
							<div className='flex items-baseline gap-1'>
								<span className='text-3xl font-extrabold text-secondary-900'>
									{isFree ? price : `${price} TL`}
								</span>
								{!isFree ? (
									<span className='text-sm font-semibold text-neutral-500'>
										{period}
									</span>
								) : null}
							</div>
							<ul className='space-y-2 text-sm'>
								{p.features.map((f) => (
									<li
										key={f.label}
										className={`flex items-center gap-2 ${
											f.included ? 'text-secondary-900' : 'text-neutral-400'
										}`}>
										<span
											className={`grid size-4 shrink-0 place-items-center rounded-md ${
												f.included
													? 'bg-success-500 text-primary-foreground'
													: 'bg-neutral-200 text-neutral-400'
											}`}>
											{f.included ? (
												<Check
													className='size-3'
													strokeWidth={3}
												/>
											) : (
												<X
													className='size-3'
													strokeWidth={3}
												/>
											)}
										</span>
										{f.label}
									</li>
								))}
							</ul>
							<Button
								type='button'
								disabled={p.current}
								variant={p.current ? 'outline' : 'default'}
								className='mt-auto h-10 w-full'>
								{p.current ? 'Mevcut Planın' : isFree ? 'Ücretsiz' : 'Seç'}
							</Button>
						</div>
					);
				})}
			</div>

			{/* S.S.S. */}
			<section className='space-y-4 rounded-2xl bg-neutral-50 p-5'>
				<h2 className='font-display flex items-center gap-2 text-base font-bold text-secondary-900'>
					<span className='inline-block h-5 w-1 rounded-full bg-primary-500' />
					Sıkça Sorulan Sorular
				</h2>
				<div className='divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-background'>
					{membershipFaq.map((f) => (
						<details
							key={f.q}
							className='group p-4'>
							<summary className='flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-secondary-900 marker:hidden [&::-webkit-details-marker]:hidden'>
								{f.q}
								<ChevronDown className='size-4 shrink-0 text-neutral-400 transition group-open:rotate-180' />
							</summary>
							<p className='mt-2 text-sm text-neutral-600'>{f.a}</p>
						</details>
					))}
				</div>
			</section>
		</main>
	);
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */
type Page =
	| 'home'
	| 'listing'
	| 'detail'
	| 'collections'
	| 'collectionDetail'
	| 'manufacturers'
	| 'cart'
	| 'createListing'
	| 'checkout'
	| 'swaps'
	| 'swapDetail'
	| 'createSwap'
	| 'profile'
	| 'profileEdit'
	| 'favorites'
	| 'myListings'
	| 'notifications'
	| 'offers'
	| 'membership'
	| 'orders'
	| 'messages';

export default function App() {
	const [page, setPage] = useState<Page>('home');
	const [fromProfile, setFromProfile] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navigate = (next: Page, from?: 'profile') => {
		setPage(next);
		setFromProfile(from === 'profile');
		setMobileMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'instant' });
	};
	const backToProfile = fromProfile ? () => navigate('profile') : undefined;
	return (
		<div className='min-h-svh bg-background'>
			<Header
				onHome={() => navigate('home')}
				onToggleMenu={() => setMobileMenuOpen((o) => !o)}
				mobileMenuOpen={mobileMenuOpen}
				onCart={() => navigate('cart')}
				onCreateListing={() => navigate('createListing')}
				onSwaps={() => navigate('swaps')}
				onProfile={() => navigate('profile')}
				onFavorites={() => navigate('favorites')}
				onMyListings={() => navigate('myListings')}
				onNotifications={() => navigate('notifications')}
				onOffers={() => navigate('offers')}
				onMembership={() => navigate('membership')}
				onSettings={() => navigate('profileEdit')}
				onOrders={() => navigate('orders')}
				onMessages={() => navigate('messages')}
			/>
			<SubNav
				onListing={() => navigate('listing')}
				onCollections={() => navigate('collections')}
				onManufacturers={() => navigate('manufacturers')}
				mobileOpen={mobileMenuOpen}
				onCloseMobile={() => setMobileMenuOpen(false)}
			/>
			{page === 'home' ? (
				<HomeMain
					onSelectProduct={() => navigate('detail')}
					onSelectCollection={() => navigate('collections')}
				/>
			) : page === 'listing' ? (
				<ListingMain onSelectProduct={() => navigate('detail')} />
			) : page === 'collections' ? (
				<CollectionsMain
					onSelectCollection={() => navigate('collectionDetail')}
					onBack={backToProfile}
				/>
			) : page === 'collectionDetail' ? (
				<CollectionDetailMain
					onHome={() => navigate('home')}
					onCollections={() => navigate('collections')}
					onSelectProduct={() => navigate('detail')}
				/>
			) : page === 'manufacturers' ? (
				<ManufacturersMain />
			) : page === 'cart' ? (
				<CartMain
					onListing={() => navigate('listing')}
					onCheckout={() => navigate('checkout')}
				/>
			) : page === 'createListing' ? (
				<CreateListingMain />
			) : page === 'checkout' ? (
				<CheckoutMain onCart={() => navigate('cart')} />
			) : page === 'swaps' ? (
				<SwapsMain
					onSelectSwap={() => navigate('swapDetail')}
					onBack={backToProfile}
				/>
			) : page === 'swapDetail' ? (
				<SwapDetailMain onSwaps={() => navigate('swaps')} />
			) : page === 'createSwap' ? (
				<CreateSwapMain onBack={() => navigate('detail')} />
			) : page === 'profile' ? (
				<ProfileMain
					onEdit={() => navigate('profileEdit', 'profile')}
					onSwaps={() => navigate('swaps', 'profile')}
					onCollections={() => navigate('collections', 'profile')}
					onMyListings={() => navigate('myListings', 'profile')}
					onFavorites={() => navigate('favorites', 'profile')}
					onOffers={() => navigate('offers', 'profile')}
					onMembership={() => navigate('membership', 'profile')}
					onOrders={() => navigate('orders', 'profile')}
				/>
			) : page === 'profileEdit' ? (
				<ProfileEditMain onBack={backToProfile} />
			) : page === 'favorites' ? (
				<FavoritesMain
					onSelectProduct={() => navigate('detail')}
					onBack={backToProfile}
				/>
			) : page === 'myListings' ? (
				<MyListingsMain
					onCreateListing={() => navigate('createListing')}
					onBack={backToProfile}
				/>
			) : page === 'notifications' ? (
				<NotificationsMain onBack={backToProfile} />
			) : page === 'offers' ? (
				<OffersMain onBack={backToProfile} />
			) : page === 'membership' ? (
				<MembershipMain onBack={backToProfile} />
			) : page === 'orders' ? (
				<OrdersMain onBack={backToProfile} />
			) : page === 'messages' ? (
				<MessagesMain onBack={backToProfile} />
			) : (
				<DetailMain
					onHome={() => navigate('home')}
					onListing={() => navigate('listing')}
					onSelectProduct={() => navigate('detail')}
					onSwapOffer={() => navigate('createSwap')}
					onCheckout={() => navigate('checkout')}
				/>
			)}
			<Footer />
		</div>
	);
}
