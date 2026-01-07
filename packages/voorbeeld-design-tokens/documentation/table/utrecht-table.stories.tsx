import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-table',
  title: 'Components/Table/Utrecht',
  component: Table,
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer data</TableCell>
            <TableCell>Footer data</TableCell>
            <TableCell>Footer data</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

export default meta;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
