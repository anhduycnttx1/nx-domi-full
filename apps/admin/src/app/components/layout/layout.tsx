import { useState } from 'react'
import {
  AppShell,
  Navbar,
  Image,
  Flex,
  useMantineTheme,
  Avatar,
  Container,
  Center,
  Stack,
  createStyles,
  UnstyledButton,
  Tooltip,
  Input,
  Text,
  Divider,
  Popover,
  ActionIcon,
  Space,
  Box,
} from '@mantine/core'
import {
  IconSearch,
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconBell,
  IconMessageCircle2,
} from '@tabler/icons'
import { Outlet, Link } from 'react-router-dom'
import logoApp from '../../../assets/image/logo-white.png'

export interface LayoutProps {
  test?: string
}

interface NavbarLinkProps {
  icon: TablerIcon
  label: string
  active?: boolean
  href: string
  onClick?: () => void
}

const routerMockup = [
  { icon: IconHome2, label: 'Home', href: '/' },
  { icon: IconGauge, label: 'Dashboard', href: '/dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', href: '/analytics' },
  { icon: IconCalendarStats, label: 'Releases', href: '/release' },
  { icon: IconUser, label: 'Account', href: '/account' },
  { icon: IconFingerprint, label: 'Security', href: '/security' },
  { icon: IconSettings, label: 'Settings', href: '/setting' },
]

const useStyles = createStyles((theme) => ({
  popoverUser: {
    padding: '6px',
    cursor: 'pointer',
    borderRadius: theme.radius.xl,
    '&:hover': { color: '#3899ec', backgroundColor: theme.colors.gray[2] },
  },

  actionIconHeader: {
    padding: '6px',
    borderRadius: theme.radius.xl,
    '&:hover': { color: '#3899ec', backgroundColor: theme.colors.gray[2] },
  },

  link: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[5],

    '&:hover': { backgroundColor: theme.colors.gray[7] },
  },

  active: {
    '&, &:hover': { backgroundColor: '#3899ec', color: theme.colors.gray[2] },
  },
}))
const mockAvt =
  'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/313978958_104437485817910_438906232065156099_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fQXgNcFb5hAAX9-0zC2&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCF5P59x9UKSy-Q7jo2RV8hm72dfGKV5SImTTeMxY5kLA&oe=637BCF9E'
const styleShadow = {
  boxShadow: '0 1px 3px 0px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
}
function NavbarLink({ icon: Icon, label, active, href }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <Link to={href}>
        <UnstyledButton className={cx(classes.link, { [classes.active]: active })}>
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  )
}
const widthNavbar = 80
function NavbarApp() {
  const [active, setActive] = useState(0)

  const theme = useMantineTheme()
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      width={{ base: widthNavbar }}
      style={{ background: '#1a212f', color: theme.colors.gray[2] }}
    >
      {/* Logo App */}
      <Navbar.Section>
        <Center>
          <Image src={logoApp} alt="Random unsplash image" />
        </Center>
      </Navbar.Section>
      {/* Links sections */}
      <Navbar.Section grow mt={60}>
        <Stack justify="center" spacing="md">
          {routerMockup.map((link, index) => (
            <NavbarLink
              {...link}
              key={link.label}
              active={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </Stack>
      </Navbar.Section>
      {/* Footer with user */}
      {/* <Navbar.Section>
        <Center>
          <Avatar color="red" radius="md" src={avtMockup} alt="avt" />
        </Center>
      </Navbar.Section> */}
    </Navbar>
  )
}
const heightHeader = 48
//HeaderApp
function HeaderApp() {
  const { classes } = useStyles()
  return (
    <Flex
      gap="md"
      h={heightHeader}
      p="md"
      sx={{
        background: 'white',
        position: 'fixed',
        right: 0,
        top: 0,
        width: `calc(100% - ${widthNavbar}px)`,
        ...styleShadow,
      }}
      align="center"
      justify="end"
    >
      <Input radius="xl" size="xs" placeholder="Search ..." icon={<IconSearch size={18} />} />
      <Divider orientation="vertical" />
      <Flex gap="sm">
        <ActionIcon className={classes.actionIconHeader}>
          <IconMessageCircle2 size={18} />
        </ActionIcon>
        <ActionIcon className={classes.actionIconHeader}>
          <IconBell size={18} />
        </ActionIcon>
        <ActionIcon className={classes.actionIconHeader}>
          <IconSettings size={18} />
        </ActionIcon>
      </Flex>

      <Divider orientation="vertical" />
      <Popover width={200} position="bottom-end" withArrow shadow="md">
        <Popover.Target>
          <Flex gap="xs" align="center" className={classes.popoverUser}>
            <Avatar color="blue" radius="xl" src={mockAvt} alt="avt" size={28}>
              AD
            </Avatar>
            <Flex
              gap="xs"
              sx={{
                lineHeight: '24px',
                '@media (max-width: 1024px)': {
                  display: 'none',
                },
              }}
            >
              <Text>Đỗ Mì</Text>
              <Space />
            </Flex>
          </Flex>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  )
}
// main function
function LayoutDashboard(props: LayoutProps) {
  return (
    <AppShell
      navbar={<NavbarApp />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      sx={{
        main: { backgroundColor: '#fff' },
      }}
    >
      <HeaderApp />
      <Container fluid mih={`calc(100vh - ${heightHeader * 2}px)`} p="md" mt={heightHeader}>
        <Outlet />
      </Container>
    </AppShell>
  )
}

export default LayoutDashboard
