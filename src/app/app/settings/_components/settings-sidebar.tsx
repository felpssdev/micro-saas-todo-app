'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            active={isActive('/app/settings')}
            href="/app/settings"
          >
            My profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            active={isActive('/app/settings/theme')}
            href="/app/settings/theme"
          >
            Theme
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            active={isActive('/app/settings/billing')}
            href="/app/settings/billing"
          >
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  )
}
