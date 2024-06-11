import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <aside
      className={cn(
        'border-r border-border flex flex-col space-y-6',
        className,
      )}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn('p-6', className)}>{children}</header>
}

export function SidebarHeaderTitle({
  className,
  children,
}: SidebarGenericProps) {
  return <h2 className={cn('', className)}>{children}</h2>
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
  return (
    <footer className={cn('p-6 mt-auto border-t border-border', className)}>
      {children}
    </footer>
  )
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return <main className={cn('pt-6 px-3', className)}>{children}</main>
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
  return <nav className={cn('', className)}>{children}</nav>
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
  return <main className={cn('flex flex-col', className)}>{children}</main>
}

type SidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function SidebarNavLink({
  className,
  children,
  href,
  active,
}: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        'text-xs px-3 py-2 rounded-md flex items-center',
        active && 'bg-secondary',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn('', className)}>{children}</header>
}

export function SidebarNavHeaderTitle({
  className,
  children,
}: SidebarGenericProps) {
  return (
    <h4
      className={cn('text-xs uppercase text-muted-foreground ml-3', className)}
    >
      {children}
    </h4>
  )
}
