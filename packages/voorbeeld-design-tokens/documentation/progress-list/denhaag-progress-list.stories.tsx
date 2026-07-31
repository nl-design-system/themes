import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from '@gemeente-denhaag/process-steps';
import '@gemeente-denhaag/process-steps/index.css';

const meta = {
  id: 'denhaag-progress-list',
  title: 'Components/Progress List/Den Haag',
  component: Status,
  args: {
    steps: [
      {
        id: 'deelname',
        marker: 1,
        status: 'checked',
        steps: [
          {
            id: '04aabddd-5234-44d1-a6aa-753c5bd6f7c5',
            status: 'checked',
            title: 'Aanmelding ontvangen',
          },
        ],
        title: 'Deelname aan geluidsonderzoek',
      },
      {
        id: 'onderzoek',
        marker: 2,
        status: 'current',
        steps: [
          {
            id: '09c4568b-828c-4656-aae2-c14ba6d51a2d',
            status: 'checked',
            title: 'Afspraak meten geluidsoverlast gemaakt',
          },
          {
            id: 'd73a140a-64c4-4414-b003-5bc4f6d3ee8c',
            title: 'Geluidsoverlast gemeten',
          },
          {
            id: 'f8444469-0b19-43fe-bb97-4e50764119c1',
            title: 'Onderzoek resultaten verwerkt',
          },
        ],
        title: 'Onderzoek naar geluidsoverlast',
      },
      {
        id: 'uitvoeren',
        marker: 3,
        title: 'Uitvoeren van maatregelen',
      },
      {
        id: 'klaar',
        marker: 4,
        title: 'Maatregelen zijn uitgevoerd',
      },
    ],
  },
} satisfies Meta<typeof Status>;

type Story = StoryObj<typeof meta>;
export default meta;

export const DenHaagTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
