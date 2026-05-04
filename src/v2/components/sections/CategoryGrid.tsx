/** @format */

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/v2/data/mock';
import { SectionHeader } from '../ui/SectionHeader';

export function CategoryGrid() {
	const [primary, ...rest] = CATEGORIES;
	return (
		<section className='v2-container mt-32'>
			<SectionHeader
				eyebrow='Kategoriler'
				title='Tüm taşıtlar tek adreste'
				subtitle='Arabalardan motorsikletlere, trenlerden iş makinelerine — koleksiyonunuzun her parçası burada.'
			/>
			<div className='mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]'>
				<CategoryLargeCard category={primary} />
				<div className='grid gap-4 sm:grid-cols-2'>
					{rest.map((c) => (
						<CategorySmallCard
							key={c.slug}
							category={c}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function CategoryLargeCard({
	category,
}: {
	category: (typeof CATEGORIES)[number];
}) {
	return (
		<Link
			to={`/v2/ilanlar?kategori=${category.slug}`}
			className='group relative flex aspect-[4/3] overflow-hidden rounded-v2-card-lg bg-red-300 lg:aspect-auto'>
			<img
				src={category.image}
				alt=''
				className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
			/>
			<div className='relative z-10 mt-auto w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8'>
				<div className='flex items-end justify-between gap-4 text-white'>
					<div>
						<p className='text-[12px] font-medium uppercase tracking-[0.16em] opacity-80'>
							{category.itemCount.toLocaleString('tr-TR')} ürün
						</p>
						<h3 className='font-v2 mt-1 text-[36px] font-medium leading-tight tracking-tight sm:text-[44px]'>
							{category.title}
						</h3>
						<p className='mt-2 max-w-md text-[14px] opacity-85'>
							{category.description}
						</p>
					</div>
					<span className='grid h-12 w-12 shrink-0 place-items-center rounded-v2-pill bg-white text-v2-ink transition-transform group-hover:rotate-12'>
						<ArrowUpRight className='h-5 w-5' />
					</span>
				</div>
			</div>
		</Link>
	);
}

function CategorySmallCard({
	category,
}: {
	category: (typeof CATEGORIES)[number];
}) {
	return (
		<Link
			to={`/v2/ilanlar?kategori=${category.slug}`}
			className='group relative flex flex-col rounded-v2-card-lg bg-v2-surface p-6 transition-colors hover:bg-v2-surface-2'>
			<div className='mb-4 flex items-center justify-between'>
				<h3 className='font-v2 text-[20px] font-medium leading-tight tracking-tight text-v2-ink'>
					{category.title}
				</h3>
				<span className='grid h-9 w-9 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-transform group-hover:rotate-12'>
					<ArrowUpRight className='h-4 w-4' />
				</span>
			</div>
			<p className='text-[13px] leading-relaxed text-v2-muted'>
				{category.description}
			</p>
			<div className='relative mt-4 aspect-[4/3] overflow-hidden rounded-v2-card bg-v2-bg'>
				<img
					src={category.image}
					alt=''
					className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
				/>
			</div>
			<p className='mt-4 text-[12px] text-v2-faint'>
				{category.itemCount.toLocaleString('tr-TR')} ürün
			</p>
		</Link>
	);
}
