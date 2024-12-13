import css from '@utrecht/color-sample-css/dist/index.mjs';

const sheet = new CSSStyleSheet();
sheet.replaceSync(css);

const extrasheet = new CSSStyleSheet();
extrasheet.replaceSync(`:host {
  display: inline-block;
  block-size: var(--utrecht-color-sample-block-size, 2em);
  inline-size: var(--utrecht-color-sample-inline-size, 2em);
}
  svg {
  display: block;
  block-size: var(--utrecht-color-sample-block-size, 2em);
  inline-size: var(--utrecht-color-sample-inline-size, 2em);
}`);

export class ColorSampleElement extends HTMLElement {
  static define() {
    const name = 'nldesignsystem-color-sample';

    if (customElements.get(name)) {
      console.warn(`Custom element already registered: ${name}`);
    } else {
      customElements.define(name, ColorSampleElement);
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      return;
    }

    const color = this.getAttribute('color');
    const data = this.ownerDocument.createElement('data');
    data.value = color;
    data.className = 'utrecht-color-sample';

    // Create a hidden `span` HTML element for the label text,
    // that we will associate with the image using `aria-labelledby`.
    const labelId = crypto.randomUUID();
    const span = this.ownerDocument.createElement('span');
    span.id = labelId;
    span.hidden = true;
    span.textContent = this.hasAttribute('label') ? this.getAttribute('label') : color;

    // Create a `svg` element that will be an image completely filled with one color.
    const svg = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill', color || 'var(--utrecht-color-sample-color, currentColor)');
    svg.setAttribute('width', '1em');
    svg.setAttribute('height', '1em');
    svg.setAttribute('role', 'image');
    svg.setAttribute('viewBox', '0 0 1 1');
    svg.setAttribute('aria-labelledby', labelId);

    // TODO: Make sure if the SVG is stretched outside of the viewbox, there is a rect outside the viewbox to fill the entire SVG.
    const rect = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('height', '1');
    rect.setAttribute('width', '1');
    svg.appendChild(rect);

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sheet, extrasheet];
    shadow.appendChild(svg);
    shadow.appendChild(span);

    this.appendChild(data);
  }
}
