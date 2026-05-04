/** @format */

import { Link } from 'react-router-dom';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from '../ui/SocialIcons';

const COLUMNS = [
	{
		title: 'Pazar',
		links: [
			{ label: 'İlanlar', to: '/v2/ilanlar' },
			{ label: 'Takaslar', to: '/v2/takaslar' },
			{ label: 'Koleksiyonlar', to: '/v2/koleksiyonlar' },
			{ label: 'Üyelik Planları', to: '/v2/uyelik' },
		],
	},
	{
		title: 'Destek',
		links: [
			{ label: 'Hakkımızda', to: '/v2' },
			{ label: 'Yardım Merkezi', to: '/v2' },
			{ label: 'İletişim', to: '/v2' },
			{ label: 'Sıkça Sorulan Sorular', to: '/v2' },
		],
	},
	{
		title: 'Yasal',
		links: [
			{ label: 'Kullanım Koşulları', to: '/v2' },
			{ label: 'Gizlilik Politikası', to: '/v2' },
			{ label: 'Çerez Politikası', to: '/v2' },
		],
	},
] as const;

export function V2Footer() {
	return (
		<footer className='mt-32'>
			<div className='v2-container'>
				<div className='rounded-v2-card-lg bg-v2-surface px-8 py-14 sm:px-12 sm:py-20'>
					<div className='grid gap-12 lg:grid-cols-[1.4fr_repeat(3,_1fr)_auto]'>
						<div>
							<Link
								to='/v2'
								className='font-v2 text-[28px] font-semibold tracking-tight text-v2-ink'>
								tarodan<span className='text-v2-accent'>.</span>
							</Link>
							<p className='mt-4 max-w-xs text-[14px] leading-relaxed text-v2-muted'>
								Türkiye'nin en büyük diecast model araba pazarı.
								Koleksiyonerleri ve satıcıları aynı çatı altında buluşturuyoruz.
							</p>
							<div className='mt-6 flex items-center gap-2'>
								{[FacebookIcon, XIcon, InstagramIcon, LinkedInIcon].map(
									(Icon, i) => (
										<a
											key={i}
											href='#'
											className='grid h-10 w-10 place-items-center rounded-v2-pill bg-v2-bg text-v2-ink transition-colors hover:bg-v2-ink hover:text-v2-on-ink'>
											<Icon className='h-[15px] w-[15px]' />
										</a>
									),
								)}
							</div>
						</div>

						{COLUMNS.map((col) => (
							<div key={col.title}>
								<h4 className='text-[12px] font-semibold uppercase tracking-[0.12em] text-v2-ink'>
									{col.title}
								</h4>
								<ul className='mt-5 space-y-3'>
									{col.links.map((link) => (
										<li key={link.label}>
											<Link
												to={link.to}
												className='text-[14px] text-v2-muted transition-colors hover:text-v2-ink'>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}

						<div className='lg:min-w-[180px]'>
							<h4 className='text-[12px] font-semibold uppercase tracking-[0.12em] text-v2-ink'>
								Dil
							</h4>
							<button className='mt-5 inline-flex items-center gap-2 rounded-v2-pill bg-v2-bg px-4 py-2.5 text-[14px] font-medium text-v2-ink transition-colors hover:bg-v2-surface-2'>
								Türkçe
							</button>
						</div>
					</div>

					<div className='mt-14 flex flex-col items-start gap-3 border-t border-v2 pt-6 text-[13px] text-v2-faint sm:flex-row sm:items-center sm:justify-between'>
						<span>
							© {new Date().getFullYear()} Tarodan. Tüm hakları saklıdır.
						</span>
						<span>Designed with care · v2</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
