/** @format */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva('font-v2', {
	variants: {
		variant: {
			surface: 'bg-v2-surface',
			bg: 'bg-v2-bg border border-v2',
			ink: 'bg-v2-ink text-v2-on-ink',
		},
		radius: {
			md: 'rounded-v2-card',
			lg: 'rounded-v2-card-lg',
			sm: 'rounded-v2-sm',
		},
		padding: {
			none: '',
			sm: 'p-4',
			md: 'p-6',
			lg: 'p-8',
			xl: 'p-10',
		},
	},
	defaultVariants: { variant: 'surface', radius: 'md', padding: 'md' },
});

type CardProps = React.ComponentProps<'div'> &
	VariantProps<typeof cardVariants>;

export function Card({
	className,
	variant,
	radius,
	padding,
	...props
}: CardProps) {
	return (
		<div
			className={cn(cardVariants({ variant, radius, padding, className }))}
			{...props}
		/>
	);
}

export function CardEyebrow({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'inline-block rounded-v2-pill bg-v2-bg px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-v2-muted',
				className,
			)}
			{...props}
		/>
	);
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
	return (
		<h3
			className={cn(
				'font-v2 text-[20px] font-medium leading-tight tracking-tight text-v2-ink',
				className,
			)}
			{...props}
		/>
	);
}

export function CardDescription({
	className,
	...props
}: React.ComponentProps<'p'>) {
	return (
		<p
			className={cn('text-[14px] leading-relaxed text-v2-muted', className)}
			{...props}
		/>
	);
}
