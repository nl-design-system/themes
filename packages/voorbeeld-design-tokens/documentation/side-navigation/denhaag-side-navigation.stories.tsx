import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import { SideNavigation } from '@gemeente-denhaag/side-navigation';
import '@gemeente-denhaag/side-navigation/index.css';

const meta = {
  id: 'denhaag-side-navigation',
  title: 'Components/Side Navigation/Den Haag',
  component: SideNavigation,
  parameters: { actions: { disable: true } },
  args: {
    items: [
      [
        {
          href: '#',
          label: 'Overzicht',
          icon: <GridIcon />,
          current: true,
        },
      ],
      [
        {
          href: '#',
          label: 'Mijn taken',
          icon: <CheckCircleIcon />,
        },
        {
          href: '#',
          label: 'Mijn berichten',
          icon: <InboxIcon />,
          counter: 2,
        },
        {
          href: '#',
          label: 'Mijn zaken',
          icon: <ArchiveIcon />,
        },
      ],
      [
        {
          href: '#',
          label: 'Mijn gegevens',
          icon: <UserIcon />,
        },
      ],
    ],
  },
} satisfies Meta<typeof SideNavigation>;

type Story = StoryObj<typeof meta>;

export default meta;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const DenHaagNaamTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
