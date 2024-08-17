/* eslint-env jest */

import { describe, expect, beforeEach, afterEach, it, jest } from '@jest/globals';
import { CopyButton } from './CopyButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Copy button', () => {
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

  it('renders a button role element', () => {
    render(<CopyButton value="Hello, world" textContent="Copy"></CopyButton>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('copies the value when clicking the button', () => {
    const copySpy = jest.spyOn(navigator.clipboard, 'writeText');
    const value = 'Hello, world';

    render(<CopyButton value={value} textContent="Copy"></CopyButton>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    if (button) {
      button.click();
      expect(copySpy).toHaveBeenCalledWith(value);
    }
  });
});
