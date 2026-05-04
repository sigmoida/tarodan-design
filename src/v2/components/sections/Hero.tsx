/** @format */

import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { IMG } from '@/v2/data/mock';

export function Hero() {
	return (
		<section className='v2-container pt-6'>
			<div className='grid gap-4 lg:grid-cols-[1.05fr_1fr]'>
				{/* Sol — başlık + arama + featured product */}
				<Card
					variant='surface'
					radius='lg'
					padding='none'
					className='overflow-hidden'>
					<div className='flex h-full flex-col p-8 sm:p-12'>
						<h1 className='font-v2 mt-6 max-w-xl text-[44px] font-medium leading-[1.05] tracking-tight text-v2-ink sm:text-[60px]'>
							Koleksiyonunu büyüt,
							<br />
							<span className='text-v2-muted'>hayalindeki modeli bul.</span>
						</h1>
						<p className='mt-5 max-w-md text-[15px] leading-relaxed text-v2-muted'>
							Diecast modelleri satın al, sat ve takas et. Dijital garajını
							oluştur, koleksiyonunu sergile.
						</p>

						{/* Arama */}
						<form
							onSubmit={(e) => e.preventDefault()}
							className='mt-7 flex items-center gap-2 rounded-v2-pill bg-v2-bg p-1.5 pl-5'>
							<Search className='h-[18px] w-[18px] shrink-0 text-v2-faint' />
							<input
								type='search'
								placeholder='Marka, model veya anahtar kelime ara...'
								className='font-v2 h-11 flex-1 bg-transparent text-[14px] text-v2-ink placeholder:text-v2-faint outline-none'
							/>
							<button
								type='submit'
								className='font-v2 inline-flex h-11 items-center gap-1.5 rounded-v2-pill bg-v2-ink px-5 text-[14px] font-medium text-v2-on-ink transition-colors hover:bg-v2-ink-soft'>
								Ara
								<ArrowUpRight className='h-4 w-4' />
							</button>
						</form>

						{/* Featured small product */}
						<div className='mt-auto pt-10'>
							<Link
								to='/v2/ilan/p1'
								className='group block overflow-hidden rounded-v2-card bg-v2-bg'>
								<div className='grid grid-cols-[1.1fr_1fr] items-center'>
									<div className='p-6'>
										<Badge
											variant='surface'
											size='sm'>
											Öne çıkan
										</Badge>
										<h3 className='font-v2 mt-3 text-[18px] font-medium leading-tight tracking-tight text-v2-ink'>
											McLaren MCL60
										</h3>
										<p className='mt-1 text-[13px] leading-relaxed text-v2-muted'>
											F1 2023 sezonu Lando Norris #4
										</p>
										<p className='font-v2 mt-3 text-[18px] font-semibold tracking-tight text-v2-ink'>
											₺1.249
											<span className='text-[12px] text-v2-muted'>,90</span>
										</p>
									</div>
									<div className='relative aspect-[4/3] overflow-hidden'>
										<img
											src={IMG.featuredMclaren}
											alt=''
											className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
										/>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</Card>

				{/* Sağ — büyük featured */}
				<Card
					variant='surface'
					radius='lg'
					padding='none'
					className='relative overflow-hidden'>
					<Badge
						variant='default'
						className='absolute left-6 top-6 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'>
						Haftanın seçimi
					</Badge>
					<div className='relative aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[640px]'>
						<img
							src={IMG.featuredMclaren}
							alt=''
							className='absolute inset-0 h-full w-full object-cover'
						/>
						<div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 sm:p-10'>
							<div className='text-white'>
								<p className='text-[12px] font-medium uppercase tracking-[0.16em] opacity-80'>
									1:18 Premium
								</p>
								<h2 className='font-v2 mt-2 text-[32px] font-medium leading-tight tracking-tight sm:text-[40px]'>
									McLaren MCL60
									<br />
									Lando Norris
								</h2>
								<div className='mt-5 flex items-end justify-between gap-4'>
									<div>
										<span className='text-[12px] uppercase tracking-[0.16em] opacity-70'>
											Başlangıç
										</span>
										<p className='font-v2 mt-1 text-[28px] font-semibold tracking-tight'>
											₺1.249,00
										</p>
									</div>
									<Link
										to='/v2/ilan/p1'
										className='font-v2 inline-flex h-12 items-center gap-2 rounded-v2-pill bg-white pl-5 pr-2 text-[14px] font-medium text-v2-ink transition-transform hover:translate-x-1'>
										İncele
										<span className='grid h-9 w-9 place-items-center rounded-v2-pill bg-v2-ink text-white'>
											<ArrowUpRight className='h-[16px] w-[16px]' />
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
}
