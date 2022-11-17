import { ActionIcon, Flex, Text } from '@mantine/core'
import { ReactNode } from 'react'

type SidebarElementPanelProps = {
  icon: ReactNode
  label: string
}

export function SidebarElementPanel({ icon, label }: SidebarElementPanelProps) {
  const listColor: string[] = [
    'grape',
    'red',
    'pink',
    'cyan',
    'indigo',
    'teal',
    'yellow',
    'orange',
    'blue',
  ]

  return (
    <Flex
      gap="xs"
      style={{ cursor: 'move' }}
      p="sm"
      sx={{
        '&:hover': {
          backgroundColor: '#eee',
        },
      }}
    >
      <ActionIcon color={listColor[label.length % 9]} variant="light">
        {icon}
      </ActionIcon>
      <Text>{label}</Text>
    </Flex>
  )
}
