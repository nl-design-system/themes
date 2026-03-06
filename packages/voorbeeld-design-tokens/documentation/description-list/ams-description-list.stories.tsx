import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-description-list',
  title: 'Components/Description List/Amsterdam',
  component: DescriptionList,
  parameters: { actions: { disable: true } },
  args: {
    children: [
      <DescriptionList.Term key={1}>Het hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={2}>Het hbo en wo</DescriptionList.Description>,
      <DescriptionList.Term key={3}>Het mbo en hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={4}>Het vervolgonderwijs</DescriptionList.Description>,
      <DescriptionList.Term key={5}>Laagopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={6}>Praktisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={7}>Hoogopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={8}>Theoretisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={9}>Opleidingsniveau</DescriptionList.Term>,
      <DescriptionList.Description key={10}>Onderwijsrichting</DescriptionList.Description>,
    ],
  },
  argTypes: {},
} satisfies Meta<typeof DescriptionList>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
