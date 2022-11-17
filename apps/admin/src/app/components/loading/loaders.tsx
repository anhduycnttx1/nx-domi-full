import { Flex } from '@mantine/core'
import './loaders.css'
/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loaders(props: LoadingProps) {
  return (
    <Flex style={{ height: '100vh', width: '100vw' }} align="center" justify="center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Flex>
  )
}

export default Loaders
