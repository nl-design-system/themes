import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@amsterdam/design-system-react';
import { Tabs } from '@amsterdam/design-system-react/src';

const meta = {
  id: 'ams-tabs',
  title: 'Components/Tabs/Amsterdam',
  component: Tabs,
  parameters: { actions: { disable: true } },
  args: {
    children: (
      <>
        <Tabs.List key="list">
          <Tabs.Button aria-controls="west">West</Tabs.Button>
          <Tabs.Button aria-controls="centrum">Centrum</Tabs.Button>
          <Tabs.Button aria-controls="oost">Oost</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="west" key="west">
          <Paragraph>
            Bos en Lommerplein 250
            <br />
            1055 EK Amsterdam
          </Paragraph>
        </Tabs.Panel>
        <Tabs.Panel id="centrum" key="centrum">
          <Paragraph>
            Amstel 1
            <br />
            1011 PN Amsterdam
          </Paragraph>
        </Tabs.Panel>
        <Tabs.Panel id="oost" key="oost">
          <Paragraph>
            Oranje-Vrijstaatplein 2<br />
            1093 NG Amsterdam
          </Paragraph>
        </Tabs.Panel>
      </>
    ),
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
