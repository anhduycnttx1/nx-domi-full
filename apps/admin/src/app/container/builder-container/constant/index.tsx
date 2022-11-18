import { Popover, Text } from '@mantine/core'
import {
  IconAlignJustified,
  IconBrandYoutube,
  IconHeading,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconSlideshow,
  IconSquarePlus,
} from '@tabler/icons'

export const styleActionIcon = (theme: any) => ({
  padding: '5px',
  borderRadius: theme.radius.xl,
  '&:hover': { color: '#3899ec', background: '#edf4fb' },
})

export const heightHeader = 48

export const styleShadow = {
  boxShadow: '0 1px 3px 0px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
}

export const mockMenu = [
  {
    id: 'photo',
    label: 'Photo',
    icon: <IconPhoto size={18} />,
    isPlus: false,
  },
  {
    id: 'heading',
    label: 'Heading',
    icon: <IconHeading size={18} />,
    isPlus: false,
  },
  {
    id: 'video',
    label: 'Video',
    isPlus: false,
    icon: <IconBrandYoutube size={18} />,
  },
  {
    id: 'text',
    label: 'Text',
    icon: <IconAlignJustified size={18} />,
    isPlus: false,
  },
  {
    id: 'slideshow',
    label: 'Slide show',
    icon: <IconSlideshow size={18} />,
    isPlus: false,
  },
  {
    id: 'autolayout',
    label: 'Auto Layout',
    icon: <IconLayout size={18} />,
    isPlus: false,
  },
  {
    id: 'grid',
    label: 'Grid',
    icon: <IconLayoutGrid size={18} />,
    isPlus: false,
  },
  {
    id: 'plus',
    label: 'Plus',
    icon: <IconSquarePlus size={18} />,
    isPlus: true,
  },
]

const PLACEHOLDER_ID = 'placeholder'
