import * as React from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Select as SelectPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

export const Select = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value

type TriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'md'
}

export function SelectTrigger({
  className,
  children,
  size = 'md',
  ...props
}: TriggerProps) {
  const sizeClass = size === 'sm' ? 'h-9 px-3.5 text-[13px]' : 'h-11 px-4 text-[14px]'
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'font-v2 inline-flex w-full items-center justify-between gap-2 rounded-v2-input border border-v2 bg-v2-bg text-v2-ink outline-none transition-colors',
        'focus-visible:border-v2-strong focus-visible:ring-v2',
        'data-[placeholder]:text-v2-faint',
        sizeClass,
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-60" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        className={cn(
          'v2-root z-50 min-w-[10rem] overflow-hidden rounded-v2-input border border-v2 bg-v2-bg text-v2-ink',
          position === 'popper' && 'data-[side=bottom]:translate-y-1.5',
          className,
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1.5">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'font-v2 relative flex cursor-pointer items-center gap-2 rounded-v2-sm px-3 py-2 pr-8 text-[14px] text-v2-ink outline-none transition-colors select-none',
        'data-[highlighted]:bg-v2-surface data-[disabled]:opacity-40',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-3">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-v2-border', className)}
      {...props}
    />
  )
}
