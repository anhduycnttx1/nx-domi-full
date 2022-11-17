import { useEffect, useState } from 'react'
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
  Button,
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
} from '@tabler/icons'
import { Outlet, Link } from 'react-router-dom'
import logoApp from '../../../assets/image/logo-white.png'
import Loaders from '../loading/loaders'

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
  link: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[5],

    '&:hover': {
      backgroundColor: theme.colors.gray[7],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: '#F4694D',
      color: theme.colors.gray[2],
    },
  },
}))

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

function NavbarApp() {
  const [active, setActive] = useState(0)

  const theme = useMantineTheme()
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      width={{ base: 80 }}
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
            <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
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
//HeaderApp
function HeaderApp() {
  return (
    <Flex
      px="lg"
      gap="lg"
      h={60}
      style={{ background: 'white', position: 'fixed', right: 0, top: 0, width: 'calc(100% - 80px)' }}
      align="center"
      justify="end"
    >
      <Input placeholder="Search ..." icon={<IconSearch size={18} />} />
      <Button color="orange">Settings</Button>
      <Avatar color="blue" radius="md" src={null} alt="avt">
        AD
      </Avatar>
    </Flex>
  )
}
// main function
function LayoutDashboard(props: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])
  return (
    <div>
      {!isLoading ? (
        <AppShell navbar={<NavbarApp />} navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" padding={0}>
          <HeaderApp />
          <Container my={80}>
            <Outlet />
          </Container>
        </AppShell>
      ) : (
        <Loaders />
      )}
    </div>
  )
}

export default LayoutDashboard
