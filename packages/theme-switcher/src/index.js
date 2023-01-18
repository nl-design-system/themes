'use strict';

const builtinThemes = [
  {
    className: 'amsterdam-theme',
    title: 'Gemeente Amsterdam',
    href: 'https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/amsterdam-design-tokens',
  },
  {
    className: 'bodegraven-theme',
    title: 'Gemeente Bodegraven-Reeuwijk',
    href: 'https://unpkg.com/@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens',
  },
  {
    className: 'buren-theme',
    title: 'Gemeente Buren',
    href: 'https://unpkg.com/@nl-design-system-unstable/buren-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/buren-design-tokens',
  },
  {
    className: 'denhaag-theme',
    title: 'Gemeente Den Haag',
    href: 'https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css',
    package: '@gemeente-denhaag/design-tokens-components',
  },
  {
    className: 'drechterland-theme',
    title: 'Gemeente Drechterland',
    href: 'https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/drechterland-design-tokens',
  },
  {
    className: 'duiven-theme',
    title: 'Gemeente Duiven',
    href: 'https://unpkg.com/@nl-design-system-unstable/duiven-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/duiven-design-tokens',
  },
  {
    className: 'enkhuizen-theme',
    title: 'Gemeente Enkhuizen',
    href: 'https://unpkg.com/@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/enkhuizen-design-tokens',
  },
  {
    className: 'groningen-theme',
    title: 'Gemeente Groningen',
    href: 'https://unpkg.com/@nl-design-system-unstable/groningen-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/groningen-design-tokens',
  },
  {
    className: 'haarlem-theme',
    title: 'Gemeente Haarlem',
    href: 'https://unpkg.com/@nl-design-system-unstable/haarlem-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/haarlem-design-tokens',
  },
  {
    className: 'haarlemmermeer-theme',
    title: 'Gemeente Haarlemmermeer',
    href: 'https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/haarlemmermeer-design-tokens',
  },
  {
    className: 'hoorn-theme',
    title: 'Gemeente Hoorn',
    href: 'https://unpkg.com/@nl-design-system-unstable/hoorn-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/hoorn-design-tokens',
  },
  {
    className: 'horstaandemaas-theme',
    title: 'Gemeente Horst aan de Maas',
    href: 'https://unpkg.com/@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/horstaandemaas-design-tokens',
  },
  {
    className: 'leidschendam-theme',
    title: 'Gemeente Leidschendam Voorburg',
    href: 'https://unpkg.com/@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/leidschendam-voorburg-design-tokens',
  },
  {
    className: 'noordoostpolder-theme',
    title: 'Gemeente Noordoostpolder',
    href: 'https://unpkg.com/@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/noordoostpolder-design-tokens',
  },
  {
    className: 'of-theme',
    title: 'Open Formulieren',
    href: 'https://unpkg.com/@open-formulieren/design-tokens/dist/index.css',
    package: '@open-formulieren/design-tokens',
  },
  {
    className: 'rotterdam-theme',
    title: 'Gemeente Rotterdam',
    href: 'https://unpkg.com/@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/rotterdam-design-tokens',
  },
  {
    className: 'stedebroec-theme',
    title: 'Gemeente Stede Broec',
    href: 'https://unpkg.com/@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/stedebroec-design-tokens',
  },
  {
    className: 'tilburg-theme',
    title: 'Gemeente Tilburg',
    href: 'https://unpkg.com/@nl-design-system-unstable/tilburg-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/tilburg-design-tokens',
  },
  {
    className: 'utrecht-theme',
    title: 'Gemeente Utrecht',
    href: 'https://unpkg.com/@utrecht/design-tokens/dist/index.css',
    package: '@utrecht/design-tokens',
  },
  {
    className: 'venray-theme',
    title: 'Gemeente Venray',
    href: 'https://unpkg.com/@nl-design-system-unstable/venray-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/venray-design-tokens',
  },
  {
    className: 'vught-theme',
    title: 'Gemeente Vught',
    href: 'https://unpkg.com/@nl-design-system-unstable/vught-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/vught-design-tokens',
  },
  {
    className: 'westervoort-theme',
    title: 'Gemeente Westervoort',
    href: 'https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/westervoort-design-tokens',
  },
  {
    className: 'zevenaar-theme',
    title: 'Gemeente Zevenaar',
    href: 'https://unpkg.com/@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/zevenaar-design-tokens',
  },
  {
    className: 'zwolle-theme',
    title: 'Gemeente Zwolle',
    href: 'https://unpkg.com/@nl-design-system-unstable/zwolle-design-tokens/dist/index.css',
    package: '@nl-design-system-unstable/zwolle-design-tokens',
  },
];

const stylesheetExists = (href) =>
  Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some((link) => link.href === href);

const setTheme = ({ target, className, href, themes = [] }) => {
  const head = document.querySelector('head');
  if (target) {
    // One theme at a time, so disable other themes first
    themes.forEach((otherTheme) => {
      target.classList.remove(otherTheme.className);
    });

    // Enable selected theme
    target.classList.add(className);

    // Load stylesheet for selected theme, but only once
    if (head && !stylesheetExists(href)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      head.appendChild(link);
    }
  }
};

const prefetchThemes = (themes = []) => {
  const head = document.querySelector('head');

  // Only prefetch themes once
  if (head && !head.querySelector('link[rel~="alternate"][rel~="prefetch"][rel~="stylesheet"]')) {
    themes.forEach(({ href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate prefetch stylesheet';
      link.type = 'text/css';
      link.href = href;
      head.appendChild(link);
    });
  }
};

const getCurrentTheme = ({ target, themes }) => {
  return (
    (target &&
      Array.from(target.classList)
        .map((className) => themes.find((theme) => theme.className === className))
        .filter(Boolean)[0]) ||
    null
  );
};

class NLThemeSwitcherElement extends HTMLElement {
  constructor() {
    super();
  }

  render({ target, themes }) {
    const renderRoot = this;

    // Remove any current contents (previous rendering)
    while (renderRoot.lastChild) {
      renderRoot.removeChild(renderRoot.lastChild);
    }

    // Render dropdown with theme options
    const select = document.createElement('select');
    select.className = 'utrecht-select';
    select.setAttribute('aria-label', 'NL Design System thema');

    prefetchThemes(themes);

    themes
      .map((theme) => {
        const option = new Option(theme.title);
        option.value = theme.className;
        option.selected = this.currentTheme === theme;
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
          setTheme({ target, themes, ...theme });
        }
      }
    });
  }

  connectedCallback() {
    const targetSelector = this.getAttribute('target') || ':root';
    const target = document.querySelector(targetSelector);

    const themesJSON = this.getAttribute('themes');
    const themes = themesJSON ? JSON.parse(themesJSON) : builtinThemes;

    this.currentTheme = getCurrentTheme({ target, themes });
    this.render({ target, themes });
  }
}

customElements.define('nl-theme-switcher', NLThemeSwitcherElement);
