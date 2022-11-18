import { ActionIcon, Popover, Tooltip, Text } from '@mantine/core'
import { ReactNode } from 'react'

type SidebarElementPanelProps = {
  icon: ReactNode
  label: string
  isPlus: boolean
}

export function SidebarElementPanel({ icon, label, isPlus }: SidebarElementPanelProps) {
  return (
    <Tooltip label={label} color="gray" position="right" withArrow>
      {!isPlus ? (
        <ActionIcon color="gray" variant="subtle">
          {icon}
        </ActionIcon>
      ) : (
        <Popover width={200} position="right-end" shadow="md" offset={16}>
          <Popover.Target>
            <ActionIcon color="gray" variant="subtle">
              {icon}
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
          </Popover.Dropdown>
        </Popover>
      )}
    </Tooltip>
  )
}
