import { Meta, StoryObj } from '@storybook/react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'unordered-list',
  component: UnorderedList,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  args: {
    children: [
      'raam',
      'roos',
      'neef',
      'fik',
      'gat',
      'wiel',
      'zes',
      'juk',
      'schop',
      'voet',
      'neus',
      'muur',
      'bijl',
      'hok',
      'duif',
      'ei',
    ].map((text) => <UnorderedListItem key={text}>{text}</UnorderedListItem>),
  },
} satisfies Meta<typeof UnorderedList>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
