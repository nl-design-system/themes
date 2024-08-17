/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { CustomStory } from './CustomStory';
import { render, screen } from '@testing-library/react';

describe('Custom story container', () => {
  it('can render contents as children', () => {
    render(
      <CustomStory>
        <h1>Hello, world!</h1>
      </CustomStory>,
    );

    const richText = screen.getByRole('heading', { name: 'Hello, world!' });

    expect(richText).toBeInTheDocument();
  });

  it('renders a div HTML element', () => {
    const { container } = render(<CustomStory />);

    const element = container.querySelector('div:only-child');

    expect(element).toBeInTheDocument();
  });
});
