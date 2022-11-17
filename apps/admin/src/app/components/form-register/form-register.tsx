import { Container, Flex, Grid } from '@mantine/core'

/* eslint-disable-next-line */
export interface FormRegisterProps {}

export function FormRegisterContainer(props: FormRegisterProps) {
  return (
    <Container size="xl">
      <Grid justify="space-between">
        <Grid.Col span={8} style={{ height: '100vh', background: 'red' }}>
          A
        </Grid.Col>
        <Grid.Col span={4} style={{ minHeight: 200, background: 'blue' }}>
          <FormInput />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default FormRegisterContainer

function FormInput() {
  return <div> abc</div>
}
