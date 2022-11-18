import { ActionIcon, Button, Divider, Flex, Header, Space } from '@mantine/core'
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconChevronLeft,
  IconDeviceLaptop,
  IconDeviceTablet,
  IconPlus,
  IconStack,
} from '@tabler/icons'
import { Link } from 'react-router-dom'
import { heightHeader, styleActionIcon, styleShadow } from '../../constant'

interface HeadersBuiderPageProps {
  onOpened: React.Dispatch<React.SetStateAction<boolean>>
}
export default function HeaderBuiderPage({ onOpened }: HeadersBuiderPageProps) {
  return (
    <Header
      height={heightHeader}
      p="sm"
      sx={{
        ...styleShadow,
      }}
    >
      <Flex mr={16} justify="space-between" align="center" h="100%">
        <Flex align="center" gap="md">
          <Link to="/">
            <ActionIcon>
              <IconChevronLeft size={20} />
            </ActionIcon>
          </Link>
          <Divider my={6} orientation="vertical" />

          <Button
            onClick={() => onOpened(true)}
            size="xs"
            variant="light"
            leftIcon={<IconPlus size={20} />}
          >
            Thêm Mới
          </Button>
          <ActionIcon variant="light" radius="xl">
            <IconStack size={20} />
          </ActionIcon>
        </Flex>
        <Flex gap="sm">
          <ActionIcon variant="light" radius="xl">
            <IconDeviceLaptop size={18} />
          </ActionIcon>
          <ActionIcon variant="light" radius="xl">
            <IconDeviceTablet size={18} />
          </ActionIcon>
        </Flex>
        <Flex gap="xs">
          <ActionIcon sx={styleActionIcon} onClick={() => console.log('Back up')}>
            <IconArrowBackUp size={18} />
          </ActionIcon>
          <ActionIcon sx={styleActionIcon} onClick={() => console.log('Forwar up')}>
            <IconArrowForwardUp size={18} />
          </ActionIcon>
          <Divider my={6} orientation="vertical" />
          <Button size="xs" variant="subtle" color="orange">
            Preview
          </Button>
          <Button size="xs" variant="subtle">
            Public
          </Button>
          <Button size="xs">Save</Button>
        </Flex>
      </Flex>
    </Header>
  )
}
