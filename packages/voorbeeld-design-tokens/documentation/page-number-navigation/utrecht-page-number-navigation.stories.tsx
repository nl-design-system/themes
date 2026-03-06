// packages/voorbeeld-design-tokens/documentation/{naam-component}/{prefix-organisatie}-{naam-component}.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import '@utrecht/components/pagination/dist/index.css';

const meta = {
  id: 'utrecht-page-number-navigation',
  title: 'Components/Page Number Navigation/Utrecht',
  parameters: { actions: { disable: true } },
  args: {
    // ...default arguments for the story
  },
  render: () => (
    <nav className="utrecht-pagination utrecht-pagination--distanced">
      <span className="utrecht-pagination__before">
        <span
          className="utrecht-pagination__relative-link utrecht-pagination__relative-link--disabled utrecht-pagination__relative-link--prev"
          rel="prev"
        >
          Vorige
        </span>
      </span>
      <span role="group" className="utrecht-pagination__pages">
        <a className="utrecht-pagination__page-link" href="./1">
          1
        </a>
        <a className="utrecht-pagination__page-link" href="./2" rel="prev">
          2
        </a>
        <a
          className="utrecht-pagination__page-link utrecht-pagination__page-link--current"
          href="./3"
          aria-current="true"
        >
          3
        </a>
        <a className="utrecht-pagination__page-link" href="./4" rel="next">
          4
        </a>
        <a className="utrecht-pagination__page-link" href="./5">
          5
        </a>
      </span>
      <span className="utrecht-pagination__before">
        <a href="./2" className="utrecht-pagination__relative-link utrecht-pagination__relative-link--next" rel="next">
          Volgende
        </a>
      </span>
    </nav>
  ),
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export default meta;

// Een story met het voorbeeld thema
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

// Een story met het thema van de organisatie die de component bijdraagt
export const OrganisatieNaamTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
