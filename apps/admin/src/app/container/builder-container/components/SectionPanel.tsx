import { Container } from '@mantine/core'
import React from 'react'
type SectionPanelProps = {
  
  children?: React.ReactNode
}
const styleShadow = {
  filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
}
export default function SectionPanel({  children }: SectionPanelProps) {
  return (
    <Container
      p="md"
      size="xl"
      sx={{
        backgroundColor: '#fff',
        ...styleShadow,
      }}
    >
      {children}
    </Container>
  )
}
