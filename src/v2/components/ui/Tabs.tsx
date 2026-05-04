import * as React from 'react'
import { cn } from '@/lib/utils'

type TabsContextType = {
  value: string
  setValue: (v: string) => void
}
const TabsContext = React.createContext<TabsContextType | null>(null)

function useTabsCtx() {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('Tabs components must be used within <Tabs>')
  return ctx
}

type TabsProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: TabsProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const current = isControlled ? value : internal
  const setValue = (v: string) => {
    if (!isControlled) setInternal(v)
    onValueChange?.(v)
  }
  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div className={cn('font-v2', className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="tablist"
      className={cn('flex items-center gap-1 border-b border-v2', className)}
      {...props}
    />
  )
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: React.ComponentProps<'button'> & { value: string }) {
  const ctx = useTabsCtx()
  const active = ctx.value === value
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.setValue(value)}
      className={cn(
        'relative -mb-px px-4 py-3 text-[14px] font-medium transition-colors',
        active ? 'text-v2-ink' : 'text-v2-muted hover:text-v2-ink',
        className,
      )}
      {...props}
    >
      {children}
      {active && (
        <span className="absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-v2-ink" />
      )}
    </button>
  )
}

export function TabsContent({
  value,
  className,
  children,
}: {
  value: string
  className?: string
  children: React.ReactNode
}) {
  const ctx = useTabsCtx()
  if (ctx.value !== value) return null
  return <div className={cn('pt-6', className)}>{children}</div>
}
