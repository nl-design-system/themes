/* eslint-env jest */

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import { ComponentTokensTable } from './ComponentTokensTable';
import { createDesignToken } from '@nl-design-system-unstable/tokens-lib/src/util';

describe('Tokens table', () => {
  it('renders a simple text message when no tokens are found, instead of a table', () => {
    const { container } = render(<ComponentTokensTable component="example.button" tokens={[]} />);

    const message = screen.getByText('no documented design tokens');
    const messageElement = container.querySelector('p:only-child');
    const table = container.querySelector('table');

    expect(message).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(table).not.toBeInTheDocument();
  });

  it('renders a table with a row for each design token that matches the prefix', () => {
    const tokens = [
      createDesignToken({ name: 'example.button.color' }),
      createDesignToken({ name: 'example.button.background-color' }),
      createDesignToken({ name: 'example.link.color' }),
    ];

    const { container } = render(<ComponentTokensTable component="example.button" tokens={tokens} />);

    const table = container.querySelector('table');
    const tableBodyRows = container.querySelectorAll('tbody > tr');

    expect(table).toBeInTheDocument();
    expect(tableBodyRows?.length).toBe(2);
  });

  ['denhaag', 'example', 'utrecht'].forEach((prefix) => {
    it(`can find tokens prefixed with "${prefix}-" (legacy behavior)`, () => {
      const tokens = [createDesignToken({ name: `${prefix}.button.color` })];

      const { container } = render(<ComponentTokensTable component={`${prefix}-button`} tokens={tokens} />);

      const table = container.querySelector('table');

      expect(table).toBeInTheDocument();
    });
  });
});
