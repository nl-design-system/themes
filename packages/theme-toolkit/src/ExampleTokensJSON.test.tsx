/* eslint-env jest */

import { describe, expect, beforeEach, afterEach, it, jest } from '@jest/globals';
import { ExampleTokensJSON } from './ExampleTokensJSON';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ExampleTokensJSON', () => {
  let mockClipboard = {
    writeText: () => {},
  };

  beforeEach(() => {
    if (!navigator.clipboard) {
      Object.assign(navigator, {
        clipboard: mockClipboard,
      });
    }
  });

  afterEach(() => {
    if ((navigator.clipboard as unknown) === mockClipboard) {
      // Use object.assign
      Object.assign(navigator, {
        clipboard: null,
      });
    }
  });

  const emptyTree = {
    example: {
      button: {},
    },
  };

  it('has a copy button', () => {
    render(<ExampleTokensJSON definition={emptyTree}></ExampleTokensJSON>);

    const button = screen.getByRole('button', { name: 'Copy JSON' });

    expect(button).toBeInTheDocument();
  });

  it('copies the JSON when clicking the button', () => {
    const copySpy = jest.spyOn(navigator.clipboard, 'writeText');

    render(<ExampleTokensJSON definition={emptyTree}></ExampleTokensJSON>);

    const button = screen.getByRole('button', { name: 'Copy JSON' });

    expect(button).toBeInTheDocument();

    if (button) {
      button.click();
      expect(copySpy).toHaveBeenCalled();
    }
  });
});
