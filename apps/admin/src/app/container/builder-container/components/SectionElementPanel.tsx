import { Container } from '@mantine/core'
import { forwardRef, ReactNode, Ref } from 'react'

type SectionElementPanelProps = {
  children?: ReactNode
  type: 'submit' | 'button'
}
// const styleShadow = {
//   filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
// }

export const SectionElementPanel = forwardRef(
  (props: SectionElementPanelProps, ref: Ref<HTMLDivElement>) => {
    const { children, ...rest } = props
    return (
      <Container p="xs" ref={ref} {...rest}>
        {props.children}
      </Container>
    )
  }
)

