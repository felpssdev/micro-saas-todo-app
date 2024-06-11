'use client'

import {
  Sidebar,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LuSettings2 } from 'react-icons/lu'
import { GoHome } from 'react-icons/go'
import { UserDropdown } from './user-dropdown'
import Logo from '@/components/logo'

export function MainSideBar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink active={isActive('/app')} href="/app">
              <GoHome className="size-3 mr-3" />
              Tasks
            </SidebarNavLink>
            <SidebarNavLink
              active={isActive('/app/settings')}
              href="/app/settings"
            >
              <LuSettings2 className="size-3 mr-3" />
              Settings
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Help center</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Need help?</SidebarNavLink>
            <SidebarNavLink href="/">Follow us</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>

      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  )
}
