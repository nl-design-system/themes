'use strict';

const themes = [
  {
    className: 'dso-theme',
    name: 'DSO',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/dso-toolkit-design-tokens/dist/index.css',
  },
  {
    className: 'amsterdam-theme',
    name: 'Gemeente Amsterdam',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css',
  },
  {
    className: 'bodegraven-theme',
    name: 'Gemeente Bodegraven-Reeuwijk',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css',
  },
  {
    className: 'denhaag-theme',
    name: 'Gemeente Den Haag',
    cdn: 'https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css',
  },
  {
    className: 'drechterland-theme',
    name: 'Gemeente Drechterland',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css',
  },
  {
    className: 'duiven-theme',
    name: 'Gemeente Duiven',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/duiven-design-tokens/dist/index.css',
  },
  {
    className: 'enkhuizen-theme',
    name: 'Gemeente Enkhuizen',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css',
  },
  {
    className: 'groningen-theme',
    name: 'Gemeente Groningen',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/groningen-design-tokens/dist/index.css',
  },
  {
    className: 'haarlemmermeer-theme',
    name: 'Gemeente Haarlemmermeer',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css',
  },
  {
    className: 'horstaandemaas-theme',
    name: 'Gemeente Horst aan de Maas',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css',
  },
  {
    className: 'leidschendam-theme',
    name: 'Gemeente Leidschendam Voorburg',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css',
  },
  {
    className: 'noordoostpolder-theme',
    name: 'Gemeente Noordoostpolder',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css',
  },
  {
    className: 'rotterdam-theme',
    name: 'Gemeente Rotterdam',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css',
  },
  {
    className: 'stedebroec-theme',
    name: 'Gemeente Stede Broec',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css',
  },
  {
    className: 'tilburg-theme',
    name: 'Gemeente Tilburg',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/tilburg-design-tokens/dist/index.css',
  },
  {
    className: 'utrecht-theme',
    name: 'Gemeente Utrecht',
    cdn: 'https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css',
  },
  {
    className: 'venray-theme',
    name: 'Gemeente Venray',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/venray-design-tokens/dist/index.css',
  },
  {
    className: 'vught-theme',
    name: 'Gemeente Vught',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/vught-design-tokens/dist/index.css',
  },
  {
    className: 'westervoort-theme',
    name: 'Gemeente Westervoort',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css',
  },
  {
    className: 'zevenaar-theme',
    name: 'Gemeente Zevenaar',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css',
  },
  {
    className: 'zwolle-theme',
    name: 'Gemeente Zwolle',
    cdn: 'https://unpkg.com/@nl-design-system-unstable/zwolle-design-tokens/dist/index.css',
  },
];

const stylesheetExists = (href) =>
  Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some((link) => link.href === href);

const setTheme = ({ className, cdn }) => {
  const root = document.documentElement;
  const head = document.querySelector('head');
  if (root) {
    // One theme at a time, so disable other themes first
    themes.forEach((otherTheme) => {
      root.classList.remove(otherTheme.className);
    });

    // Enable selected theme
    root.classList.add(className);

    // Load stylesheet for selected theme, but only once
    if (head && !stylesheetExists(cdn)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = cdn;
      head.appendChild(link);
    }
  }
};

class NLThemeSwitcherElement extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    const renderRoot = this;

    // Remove any current contents (previous rendering)
    while (renderRoot.lastChild) {
      renderRoot.removeChild(renderRoot.lastChild);
    }

    // Render dropdown with theme options
    const select = document.createElement('select');
    select.className = 'utrecht-select';
    select.setAttribute('aria-label', 'NL Design System thema');
    themes
      .map((theme) => {
        const option = new Option(theme.name);
        option.value = theme.className;
        return option;
      })
      .forEach((option) => select.appendChild(option));
    renderRoot.appendChild(select);

    // Set the theme when another option is selected
    select.addEventListener('change', (evt) => {
      const option = evt.target.selectedOptions[0];
      if (option) {
        const theme = themes.find(({ className }) => className === option.value);
        if (theme) {
          setTheme(theme);
        }
      }
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('nl-theme-switcher', NLThemeSwitcherElement);
