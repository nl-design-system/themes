import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from '@gemeente-denhaag/process-steps';
import '@gemeente-denhaag/process-steps/index.css';
import { DENHAAG_PROGRESS_LIST_STEPS } from '@nl-design-system-unstable/theme-toolkit/src/component-stories-denhaag';

const meta = {
  id: 'denhaag-progress-list',
  title: 'Components/Progress List/Den Haag',
  component: Status,
  args: {
    steps: DENHAAG_PROGRESS_LIST_STEPS,
  },
} satisfies Meta<typeof Status>;

type Story = StoryObj<typeof meta>;
export default meta;

export const DenHaagTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
