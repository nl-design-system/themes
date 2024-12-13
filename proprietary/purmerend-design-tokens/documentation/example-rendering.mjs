const sheet = new CSSStyleSheet();
sheet.replaceSync(`.nldesignsystem-example-rendering {
  -webkit-user-select: none;
  cursor: default;
  user-select: none;
  forced-color-adjust: none;
}`);

export class ColorContrastCanvasElement extends HTMLElement {
  static define() {
    const name = 'nldesignsystem-example-rendering';

    if (customElements.get(name)) {
      console.warn(`Custom element already registered: ${name}`);
    } else {
      customElements.define(name, ColorContrastCanvasElement);
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      return;
    }

    const div = this.ownerDocument.createElement('div');
    div.role = 'img';
    div.inert = true;
    div.className = 'nldesignsystem-example-rendering';
    div.setAttribute('aria-label', this.getAttribute('label'));
    div.appendChild(this.ownerDocument.createElement('slot'));

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [sheet];
    shadow.appendChild(div);
  }
}
