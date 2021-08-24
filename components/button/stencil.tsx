import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-button',
  styleUrl: 'bem.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="example-button" type="button">
        <span class="example-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
