/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { DesignTokensTable } from './DesignTokensTable';
import { createDesignToken } from '@nl-design-system-unstable/tokens-lib/dist/util';

describe('Tokens table', () => {
  it('renders a table with a row for each design token that matches the prefix', () => {
    const tokens = [
      createDesignToken({ name: 'example.button.color' }),
      createDesignToken({ name: 'example.button.background-color' }),
      createDesignToken({ name: 'example.link.color' }),
    ];

    const { container } = render(<DesignTokensTable tokens={tokens} />);

    const table = container.querySelector('table');
    const tableBodyRows = container.querySelectorAll('tbody > tr');

    expect(table).toBeInTheDocument();
    expect(tableBodyRows?.length).toBe(tokens.length);
  });

  it('renders a column with the a design token reference', () => {
    const tokens = [createDesignToken({ name: 'example.button.color', value: 'cornflowerblue' })];

    render(<DesignTokensTable tokens={tokens} />);

    const tableDataCell = screen.getByText('example.button.color', { selector: 'td, td > *' });
    expect(tableDataCell).toBeInTheDocument();
  });

  it('renders a column with the design token value', () => {
    const tokens = [createDesignToken({ name: 'example.button.color', value: 'cornflowerblue' })];

    render(<DesignTokensTable tokens={tokens} />);

    const tableDataCell = screen.getByText('cornflowerblue', { selector: 'td, td > *' });
    expect(tableDataCell).toBeInTheDocument();
  });

  it('renders a column with color sample', () => {
    const tokens = [createDesignToken({ name: 'example.button.color', value: 'cornflowerblue' })];

    render(<DesignTokensTable tokens={tokens} />);

    const tableDataCell = screen.getByText('cornflowerblue', { selector: 'td, td > *' });
    expect(tableDataCell).toBeInTheDocument();
  });
});
