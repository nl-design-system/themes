/* eslint-env jest */
import { describe, expect, beforeEach, afterEach, it, jest } from '@jest/globals';
import { CopyCode } from './CopyCode';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Copy code button', () => {
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
    render(<CopyCode code="Hello, world"></CopyCode>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders a code HTML element', () => {
    const code = "var subject = 'Hello, world';";
    render(<CopyCode code={code}></CopyCode>);

    const element = screen.getByText(code);

    expect(element).toBeInTheDocument();
    expect(element.matches('code')).toBe(true);
  });

  it('copies the value when clicking the button', () => {
    const copySpy = jest.spyOn(navigator.clipboard, 'writeText');
    const value = 'Hello, world';

    render(<CopyCode code={value}></CopyCode>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    if (button) {
      button.click();
      expect(copySpy).toHaveBeenCalledWith(value);
    }
  });
});
