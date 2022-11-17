import React, { useCallback, useRef, useState } from 'react'
import {
  AppShell,
  Aside,
  Button,
  Container,
  Flex,
  Header,
  Navbar,
  Image,
  Text,
  ActionIcon,
  Accordion,
  Stack,
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
  UniqueIdentifier,
  MouseSensor,
  TouchSensor,
  DropAnimation,
  defaultDropAnimation,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import MainAppBuilder from './main-app-builder'
import { SidebarPanel as SidebarPanelUI } from './components/SidebarPanel'
import EmptyDiv from '../../components/empty/empty'
import iLogo from '../../../assets/image/logo.png'

export interface BuiderContainerProps {
  data?: any
}
const heightHeader = 50
const styleShadow = {
  filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
}
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
  const lastOverId = useRef<UniqueIdentifier | null>(null)
  const recentlyMovedToNewContainer = useRef(false)
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
        styles={(theme) => ({
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
      <Flex justify="space-between" align="center" h="100%">
        <Flex align="center" gap="xl">
          <ActionIcon>
            <IconChevronLeft size={18} />
          </ActionIcon>
          <Image style={{ display: 'block', width: '60px' }} src={iLogo} alt="logo" />
        </Flex>
        <Flex gap="xs">
          <ActionIcon onClick={() => console.log('Back up')}>
            <IconArrowBackUp size={18} />
          </ActionIcon>
          <ActionIcon onClick={() => console.log('Forwar up')}>
            <IconArrowForwardUp size={18} />
          </ActionIcon>
          <Button size="xs" variant="outline" color="orange">
            Public
          </Button>
          <Button size="xs" color="orange">
            Save
          </Button>
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
