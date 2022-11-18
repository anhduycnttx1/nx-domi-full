import React from 'react'

import { Stack } from '@mantine/core'

import { SidebarElementPanel as SidebarElementPanelUI } from './SidebarElementPanel'

type SidebarPanelProps = {
  children?: React.ReactNode
  menus?: any
}

export function SidebarPanel({ children, menus }: SidebarPanelProps) {
  return (
    <Stack spacing="md">
      {menus[0] &&
        menus.map((item: any) => (
          <React.Fragment key={item.id}>
            <SidebarElementPanelUI isPlus={item.isPlus} icon={item.icon} label={item.label} />
          </React.Fragment>
        ))}
    </Stack>
  )
}
