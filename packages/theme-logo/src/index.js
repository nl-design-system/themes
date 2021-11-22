/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

'use strict';

class NLThemeLogoElement extends HTMLElement {
  constructor() {
    super();
  }

  render({ themes }) {
    // Remove any current contents (previous rendering)
    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }

    const selectors = themes.map((theme) => `.${theme.className} nl-theme-logo > .${theme.className}-logo`).join(',\n');

    const style = this.ownerDocument.createElement('style');
    style.textContent = `
    nl-theme-logo {
      display: inline;
    }
    nl-theme-logo > * { display: none }
    ${selectors} {
      display: block;
      max-height: var(--utrecht-logo-max-height, 192px);
      max-width: var(--utrecht-logo-max-width, 96px);
      min-height: var(--utrecht-logo-min-height, 192px);
      min-width: var(--utrecht-logo-min-width, 96px);
    }`;

    this.appendChild(style);

    // Render dropdown with theme options
    themes
      .map((theme) => {
        const logo = this.ownerDocument.createElement('div');
        logo.className = `${theme.className}-logo`;

        if (theme.src) {
          const img = this.ownerDocument.createElement('img');
          img.ownerDocument.createElement('img');
          img.setAttribute('alt', theme.alt || 'logo');
          img.src = theme.src;
          logo.appendChild(img);
        } else if (theme.customElement) {
          const el = this.ownerDocument.createElement(theme.customElement);
          logo.appendChild(el);
        }

        return logo;
      })
      .forEach((option) => this.appendChild(option));
  }

  connectedCallback() {
    const builtinThemes = [
      {
        className: 'denhaag-theme',
        alt: 'logo Gemeente Den Haag',
        src: 'denhaag-logo.svg',
      },
      {
        className: 'utrecht-theme',
        alt: 'logo Gemeente Utrecht',
        src: 'utrecht-logo.svg',
      },
    ];

    const themesJSON = this.getAttribute('themes');
    const themes = themesJSON ? JSON.parse(themesJSON) : builtinThemes;

    this.render({ themes });
  }
}

customElements.define('nl-theme-logo', NLThemeLogoElement);
