/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { DesignTokensTable } from './DesignTokensTable';
import { createDesignToken } from '@nl-design-system-unstable/tokens-lib/dist/util';
import { addPath, treeToMap } from '@nl-design-system-unstable/tokens-lib/dist/ExampleTokensCSS';
import { isDesignTokenDefinition, StyleDictionaryTree } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';

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

  it('renders just the font-family when no fallback fonts are specified', () => {
    const tokens = [createDesignToken({ name: 'example.button.font-family', value: '"Fira Sans"' })];

    const { container } = render(<DesignTokensTable tokens={tokens} />);

    const details = container.querySelector('details');
    expect(details).not.toBeInTheDocument();
  });

  it('renders a column with the a list of font families when fallback fonts are specified', () => {
    const tokens = [createDesignToken({ name: 'example.button.font-family', value: '"Fira Sans", sans-serif' })];

    render(<DesignTokensTable tokens={tokens} />);

    const summary = screen.getByText('Fira Sans', { selector: 'td > details > summary > bdi' });

    expect(summary).toBeInTheDocument();

    const listItem = screen.getByText('Fira Sans', { selector: 'td > details > ol > li > bdi' });
    expect(listItem).toBeInTheDocument();

    const secondListItem = screen.getByText('sans-serif', { selector: 'td > details > ol > li > bdi' });
    expect(secondListItem).toBeInTheDocument();
  });

  it('renders a column with a verified icon', () => {
    const tokens = [createDesignToken({ name: 'utrecht.button.font-family', value: '"Fira Sans", sans-serif' })];
    const vendorTree = {
      utrecht: {
        button: {
          'font-family': {
            $extensions: {
              'com.example.this-token-exists': true,
            },
          },
        },
      },
    };
    const tokensMap = treeToMap(
      addPath(vendorTree as any, isDesignTokenDefinition) as any as StyleDictionaryTree,
      isDesignTokenDefinition,
    );

    render(<DesignTokensTable tokens={tokens} tokensMap={tokensMap as any} />);

    const verifiedIcon = screen.getByRole('image', { name: 'status: verified token' });

    expect(verifiedIcon).toBeInTheDocument();
  });
});
