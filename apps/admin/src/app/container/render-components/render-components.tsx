import { Button, Title, Text, Flex, Input, Checkbox } from '@mantine/core'
import React from 'react'

type GanerateProps = {
  block: BlockProps
}
export type BlockProps = {
  uid: string
  component: string
  payloads: any
  content?: string
  childs?: BlockProps[] | undefined
}

const RenderButtonCore = ({ block }: GanerateProps) => {
  return <Button {...(block?.['payloads'] as any)}>{block?.['content']}</Button>
}
const RenderTextCore = ({ block }: GanerateProps) => {
  return <Text {...(block?.['payloads'] as any)}>{block?.['content']}</Text>
}
const RenderTitleCore = ({ block }: GanerateProps) => {
  return <Title {...(block?.['payloads'] as any)}>{block?.['content']}</Title>
}
const RenderFlexLayout = ({ block }: GanerateProps) => {
  return (
    <Flex {...(block?.['payloads'] as any)}>
      {block?.['childs'] &&
        block?.['childs']?.[0] &&
        block?.['childs'].map((block: BlockProps) => RenderComponents(block))}
    </Flex>
  )
}
const RenderCheckboxCore = ({ block }: GanerateProps) => {
  return <Checkbox {...(block?.['payloads'] as any)} />
}
const RenderInputCore = ({ block }: GanerateProps) => {
  return (
    <Input.Wrapper label={block.content} id={block.uid}>
      <Input {...(block?.['payloads'] as any)} />
    </Input.Wrapper>
  )
}
const Components: any = {
  BUTTON: RenderButtonCore,
  TEXT: RenderTextCore,
  TITLE: RenderTitleCore,
  FLEX: RenderFlexLayout,
  INPUT: RenderInputCore,
  CHECKBOX: RenderCheckboxCore,
}

export default function RenderComponents(block: BlockProps) {
  // component does exist
  if (typeof Components[block.component] !== 'undefined') {
    return React.createElement(Components[block.component], {
      key: block.uid,
      block: block,
    })
  }
  // component doesn't exist yet
  return React.createElement(() => <div>The component {block.component} has not been created yet.</div>, {
    key: block.uid,
  })
}
