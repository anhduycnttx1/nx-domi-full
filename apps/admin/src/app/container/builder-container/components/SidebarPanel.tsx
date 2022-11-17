import React from 'react'

import { Accordion } from '@mantine/core'
import Draggable from './Draggable'
import { SidebarElementPanel as SidebarElementPanelUI } from './SidebarElementPanel'

type SidebarPanelProps = {
  children?: React.ReactNode
  menus?: any
}

export function SidebarPanel({ children, menus }: SidebarPanelProps) {
  return (
    <Accordion defaultValue={['layout', 'display']} multiple>
      {menus.map((item: any) => {
        return (
          <React.Fragment key={item.id}>
            <Accordion.Item value={item.id}>
              <Accordion.Control
                sx={{
                  '&:hover': {
                    backgroundColor: '#eee',
                  },
                }}
              >
                {item.title}
              </Accordion.Control>
              <Accordion.Panel>
                {item.child[0] &&
                  item.child.map((item: any) => (
                    <React.Fragment key={item.id}>
                      <Draggable id={item.id}>
                        <SidebarElementPanelUI icon={item.icon} label={item.label} />
                      </Draggable>
                    </React.Fragment>
                  ))}
              </Accordion.Panel>
            </Accordion.Item>
          </React.Fragment>
        )
      })}
    </Accordion>
  )
}
