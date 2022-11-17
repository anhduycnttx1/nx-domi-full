import { Grid, Container } from '@mantine/core'
import RenderComponents, { BlockProps } from '../../container/render-components/render-components'
import { dataMockup } from './data'
import ReactJson from 'react-json-view'
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
    <Grid>
      <Grid.Col span={8}>
        <Container {...(dataMockup.payloads as any)}>
          {root && root[0] && root.map((block: BlockProps) => RenderComponents(block))}
        </Container>
      </Grid.Col>

      <Grid.Col span={4}>
        <ReactJson
          src={root}
          onEdit={(data: any) => setRoot(data.updated_src)}
          onAdd={(data: any) => setRoot(data.updated_src)}
          onDelete={(data: any) => setRoot(data.updated_src)}
        />
      </Grid.Col>
    </Grid>
  )
}

export default RunningPage
