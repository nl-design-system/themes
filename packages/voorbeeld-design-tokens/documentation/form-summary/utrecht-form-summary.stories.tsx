import { Meta, StoryObj } from '@storybook/react-vite';
import { ReactNode } from 'react';
import {
  DataList as FormSummary,
  DataListItem as FormSummaryItem,
  DataListKey as FormSummaryKey,
  DataListValue as FormSummaryValue,
} from '@utrecht/component-library-react/dist/css-module';

interface FormSummaryStoryProps {
  appearance?: string | '' | 'rows';
  items: {
    key: ReactNode;
    value: ReactNode;
    multiline?: boolean;
  }[];
}

const FormSummaryStory = ({ appearance, items }: FormSummaryStoryProps) => (
  <FormSummary appearance={appearance}>
    {items.map(({ key, value, multiline }) => (
      <FormSummaryItem key={key}>
        <FormSummaryKey id={key}>{key}</FormSummaryKey>
        <FormSummaryValue multiline={multiline}>{value}</FormSummaryValue>
      </FormSummaryItem>
    ))}
  </FormSummary>
);

const meta = {
  id: 'utrecht-form-summary',
  title: 'Components/Form Summary/Utrecht',
  component: FormSummaryStory,
  parameters: { actions: { disable: true } },
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'Voornaam',
        value: 'Mees',
      },
      {
        key: 'Achternaam',
        value: 'de Vos',
      },
      {
        key: 'Adres',
        value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
        multiline: true,
      },
    ],
  },
} satisfies Meta<typeof FormSummaryStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
};
