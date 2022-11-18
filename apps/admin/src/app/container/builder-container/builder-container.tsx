import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import {
  AppShell,
  Aside,
  Button,
  Container,
  Flex,
  Header,
  Navbar,
  Image,
  ActionIcon,
  Divider,
} from '@mantine/core'

import {
  IconChevronLeft,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconHeading,
  IconLetterCase,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconSeparator,
  IconPlus,
  IconStack,
  IconDeviceAirpods,
  IconDeviceLaptop,
  IconDeviceTablet,
} from '@tabler/icons'
import {
  DndContext,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
  useSensors,
  KeyboardSensor,
  closestCenter,
  useSensor,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core'
import { SidebarPanel as SidebarPanelUI } from './components/SidebarPanel'
import MainAppBuilder from './main-app-builder'
import EmptyDiv from '../../components/empty/empty'

export interface BuiderContainerProps {
  data?: any
}

const heightHeader = 48
const styleShadow = {
  boxShadow: '0 1px 3px 0px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
}
const styleActionIcon = (theme: any) => ({
  padding: '5px',
  borderRadius: theme.radius.xl,
  '&:hover': { color: '#3899ec', background: '#edf4fb' },
})
const mockMenu = [
  {
    id: 'layout',
    title: 'Layout',
    child: [
      {
        id: 'autolayout',
        label: 'Auto Layout',
        icon: <IconLayout />,
      },
      {
        id: 'grid',
        label: 'Grid',
        icon: <IconLayoutGrid />,
      },
    ],
  },
  {
    id: 'display',
    title: 'Display',
    child: [
      {
        id: 'heading',
        label: 'Heading',
        icon: <IconHeading />,
      },
      {
        id: 'text',
        label: 'Text',
        icon: <IconLetterCase />,
      },
      {
        id: 'photo',
        label: 'Photo',
        icon: <IconPhoto />,
      },
      {
        id: 'divider',
        label: 'Divider',
        icon: <IconSeparator />,
      },
    ],
  },
]
const PLACEHOLDER_ID = 'placeholder'

export default function BuiderContainer(props: BuiderContainerProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  // const lastOverId = useRef<UniqueIdentifier | null>(null)
  // const recentlyMovedToNewContainer = useRef(false)
  // const isSortingContainer = activeId ? mockMenu.includes(id, activeId) : false
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event
    console.log('Start', active, event)
    setActiveId(active.id as string)
  }, [])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    // Logic tranform data
    console.log('End', event)
    setActiveId(null)
  }, [])

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
  }, [])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <AppShell
        padding="md"
        navbar={<NavbarBuider />}
        aside={<AsideBuider />}
        header={<HeaderBuider />}
        sx={(theme) => ({
          main: { backgroundColor: '#f1f5f9' },
        })}
      >
        {/* Your application here */}
        <ApplicationBuilder />
      </AppShell>
      <DragOverlay adjustScale={false}>
        {activeId ? <EmptyDiv label="Drop and drap a layout to start" /> : null}
      </DragOverlay>
    </DndContext>
  )
}

function ApplicationBuilder() {
  const [data, setData] = useState([])

  return (
    <Container h="100%" size="xl">
      {data && data[0] ? (
        <MainAppBuilder />
      ) : (
        <Flex justify="center" align="center" h="100%">
          <EmptyDiv label="Drop and drap a layout to start" />
        </Flex>
      )}
    </Container>
  )
}

function HeaderBuider() {
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
          <ActionIcon variant="light" color="blue" radius="xl">
            <IconPlus size={20} />
          </ActionIcon>
          <ActionIcon variant="light" radius="xl">
            <IconStack size={20} />
          </ActionIcon>
          <Divider my={6} orientation="vertical" />
          <ActionIcon variant="light" radius="xl">
            <IconDeviceLaptop size={20} />
          </ActionIcon>
          <ActionIcon variant="light" radius="xl">
            <IconDeviceTablet size={20} />
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

function NavbarBuider() {
  return (
    <Navbar
      width={{ base: 250 }}
      height={500}
      p="xs"
      h={`calc(100% - ${heightHeader}px)`}
      sx={{
        ...styleShadow,
      }}
    >
      {mockMenu && <SidebarPanelUI menus={mockMenu} />}
    </Navbar>
  )
}

function AsideBuider() {
  return (
    <Aside
      width={{ base: 250 }}
      height={500}
      p="xs"
      h={`calc(100% - ${heightHeader}px)`}
      sx={{
        ...styleShadow,
      }}
    >
      {/* Aside content */}
    </Aside>
  )
}
