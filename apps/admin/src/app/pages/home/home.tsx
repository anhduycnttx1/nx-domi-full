import { Button, Text, Flex, Title, Grid, Image, Stack } from '@mantine/core'
import { Link } from 'react-router-dom'

/* eslint-disable-next-line */
export interface HomeProps {
  name?: string
  age?: number
}
const panelImage = 'https://w.ladicdn.com/ladiui/ladipage/banner-landingpage.svg'

export function Home(props: HomeProps) {
  return (
    <Grid className="home" align="center" columns={24} px="60px" mih={'calc(100vh - 150px)'}>
      <Grid.Col span={9}>
        <Stack spacing="xl">
          <Title order={2}> Bạn chưa tạo Trang Web nào!</Title>
          <Text>
            Bấm{' '}
            <Text fw={500} span>
              TẠO TRANG NGAY
            </Text>{' '}
            để bắt đầu thiết kế landing page đầu tiên của mình. Nếu bạn là người mới sử dụng lần
            đầu, hãy bấm vào{' '}
            <Text fw={500} span>
              Xem hướng dẫn
            </Text>{' '}
            để tìm hiểu cách sử dụng nhé.
          </Text>
          <Flex gap="md" w="100%" align="center">
            <Link to={'builder-page/11'}>
              <Button color="orange">Tạo trang ngay</Button>
            </Link>
            <Text fz="sm">Hoặc</Text>
            <Link to={'runner-page/11'}>
              <Button variant="subtle">Xem hướng dẫn</Button>
            </Link>
          </Flex>
        </Stack>
      </Grid.Col>
      <Grid.Col span={15}>
        <Flex w={'100%'} justify="end">
          <div style={{ width: 627 }}>
            <Image src={panelImage} alt="panel image" />
          </div>
        </Flex>
      </Grid.Col>
    </Grid>
  )
}

export default Home
