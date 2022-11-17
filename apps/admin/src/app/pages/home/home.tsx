import { Button, Flex } from '@mantine/core'
import { Link, useRouteLoaderData } from 'react-router-dom'

/* eslint-disable-next-line */
export interface HomeProps {
  name?: string
  age?: number
}

export function Home(props: HomeProps) {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <Flex gap="md">
        <Link to={'runner-page/11'}>
          <Button color="orange">Runner Screen</Button>
        </Link>
        <Link to={'builder-page/11'}>
          <Button color="indigo" variant="light">
            Builder Screen
          </Button>
        </Link>
      </Flex>
    </div>
  )
}

export default Home
