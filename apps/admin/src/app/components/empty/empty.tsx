import React from 'react'
import { Center, Flex, Image, Text } from '@mantine/core'

interface EmptyDivProps {
  label?: string | boolean
}

function EmptyDiv(props: EmptyDivProps) {
  const label: string | boolean = props.label || 'No data'

  return (
    <Flex gap="md" align="center" direction="column">
      <Image
        style={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }}
        src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
        alt="empty"
      />
      {label && (
        <Text c="dimmed" size="xs">
          {label}
        </Text>
      )}
    </Flex>
  )
}

export default EmptyDiv
