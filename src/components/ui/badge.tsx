/** @format */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-2 py-0.5 text-sm font-bold whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3',
	{
		variants: {
			variant: {
				// shadcn defaults
				default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
				secondary:
					'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
				destructive:
					'bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
				outline:
					'border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
				ghost: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 [a&]:hover:underline',

				// solid status variants
				success: 'bg-success-500 text-primary-foreground',
				warning: 'bg-warning-500 text-primary-foreground',
				danger: 'bg-danger-500 text-primary-foreground',
				dark: 'bg-secondary-900 text-primary-foreground',

				// soft variants (light bg + tone-700 text)
				primarySoft: 'bg-primary-100 text-primary-700',
				successSoft: 'bg-success-100 text-success-700',
				warningSoft: 'bg-warning-100 text-warning-700',
				dangerSoft: 'bg-danger-100 text-danger-700',
				neutralSoft: 'bg-neutral-200 text-neutral-700',

				// surface — görsel üzerinde yarı saydam beyaz overlay
				surface: 'bg-background/90 text-secondary-900',

				// discount — yeşil ince çerçeveli + soft yeşil arka plan
				discount: 'border-success-200 bg-success-50 text-success-700',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export type BadgeVariant = NonNullable<
	VariantProps<typeof badgeVariants>['variant']
>;

function Badge({
	className,
	variant = 'default',
	asChild = false,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : 'span';

	return (
		<Comp
			data-slot='badge'
			data-variant={variant}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
