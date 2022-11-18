import { Container } from '@mantine/core'
import RenderComponents, { BlockProps } from '../../container/render-components/render-components'
import { dataMockup } from './data'

import { useEffect, useState } from 'react'
// use the component in your app!

/* eslint-disable-next-line */
export interface RunningPageProps {}

export function RunningPage(props: RunningPageProps) {
  const [root, setRoot] = useState<any>([])
  useEffect(() => {
    setRoot(dataMockup.content.body)
  }, [])

  return (
    // <Container {...(data.payloads as any)}>

    <Container {...(dataMockup.payloads as any)}>
      {root && root[0] && root.map((block: BlockProps) => RenderComponents(block))}
    </Container>
  )
}

export default RunningPage
