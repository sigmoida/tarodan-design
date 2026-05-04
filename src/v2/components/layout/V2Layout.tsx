/** @format */

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { V2Header } from './V2Header';
import { V2Footer } from './V2Footer';

export function V2Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [pathname]);

	return (
		<div className='v2-root min-h-screen bg-v2-bg pb-10'>
			<div className='mx-auto max-w-[1440px] bg-v2-bg'>
				<V2Header />
				<main className='pb-2'>
					<Outlet />
				</main>
				<V2Footer />
			</div>
		</div>
	);
}
