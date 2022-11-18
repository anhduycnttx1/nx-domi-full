import { Aside, Center, Navbar } from '@mantine/core'
import { heightHeader, mockMenu, styleShadow } from '../../constant'
import { SidebarPanel as SidebarPanelUI } from '../SidebarPanel'
export function NavbarBuider() {
  return (
    <Navbar
      withBorder
      fixed
      hiddenBreakpoint="md"
      width={{ base: 57 }}
      height={500}
      p="xs"
      py={20}
      h={`calc(100% - ${heightHeader}px)`}
      sx={{
        ...styleShadow,
      }}
    >
      <Center>{mockMenu && <SidebarPanelUI menus={mockMenu} />}</Center>
    </Navbar>
  )
}

export function AsideBuider() {
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
