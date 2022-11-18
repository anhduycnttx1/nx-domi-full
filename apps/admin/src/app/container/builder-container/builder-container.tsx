import { useCallback, useState } from 'react'

import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { AppShell, Button, Container, Drawer, Flex } from '@mantine/core'

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

import MainAppBuilder from './main-app-builder'
import EmptyDiv from '../../components/empty/empty'
import HeaderBuiderPage from './components/layout/HeaderBuilderPage'
import { AsideBuider, NavbarBuider } from './components/layout/NavbarBuiderPage'

export interface BuiderContainerProps {
  data?: any
}

export default function BuiderContainer(props: BuiderContainerProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [opened, setOpened] = useState(false)
  const [data, setData] = useState<any[]>([])
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
        header={<HeaderBuiderPage onOpened={setOpened} />}
        sx={(theme) => ({
          main: { backgroundColor: '#f8fafc' },
        })}
      >
        {/* Your application here */}
        <ApplicationBuilder data={data} />
      </AppShell>
      <DragOverlay adjustScale={false}>
        {activeId ? <EmptyDiv label="Drop and drap a layout to start" /> : null}
      </DragOverlay>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
      </Drawer>
    </DndContext>
  )
}

interface ApplicationBuilderProps {
  data: any
}

function ApplicationBuilder({ data }: ApplicationBuilderProps) {
  return (
    <Container
      h="100%"
      size="md"
      sx={{
        borderRight: '0.5px dashed #3899ec',
        borderLeft: '0.5px dashed #3899ec',
      }}
    >
      {data && data[0] ? (
        <MainAppBuilder />
      ) : (
        <Flex justify="center" align="center" h="100%" direction="column" gap="md">
          <EmptyDiv label="Drop and drap a layout to start" />
          <Button variant="light">New a section</Button>
        </Flex>
      )}
    </Container>
  )
}
