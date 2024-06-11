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

export function MainSideBar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Title</h1>
      </SidebarHeader>

      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink active={isActive('/app')} href="/app">
              <GoHome className="size-3 mr-3" />
              Tarefas
            </SidebarNavLink>
            <SidebarNavLink
              active={isActive('/app/settings')}
              href="/app/settings"
            >
              <LuSettings2 className="size-3 mr-3" />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Central de Ajuda</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>

      <SidebarFooter>User</SidebarFooter>
    </Sidebar>
  )
}
