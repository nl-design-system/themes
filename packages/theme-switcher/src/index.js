'use strict';

const builtinThemes = [
  {
    className: 'amsterdam-theme',
    title: 'Gemeente Amsterdam',
    href: 'https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css',
  },
  {
    className: 'buren-theme',
    title: 'Gemeente Buren',
    href: 'http://localhost:8080/index.css',
  },
  {
    className: 'bodegraven-theme',
    title: 'Gemeente Bodegraven-Reeuwijk',
    href: 'https://unpkg.com/@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css',
  },
  {
    className: 'denhaag-theme',
    title: 'Gemeente Den Haag',
    href: 'https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css',
  },
  {
    className: 'drechterland-theme',
    title: 'Gemeente Drechterland',
    href: 'https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css',
  },
  {
    className: 'duiven-theme',
    title: 'Gemeente Duiven',
    href: 'https://unpkg.com/@nl-design-system-unstable/duiven-design-tokens/dist/index.css',
  },
  {
    className: 'enkhuizen-theme',
    title: 'Gemeente Enkhuizen',
    href: 'https://unpkg.com/@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css',
  },
  {
    className: 'groningen-theme',
    title: 'Gemeente Groningen',
    href: 'https://unpkg.com/@nl-design-system-unstable/groningen-design-tokens/dist/index.css',
  },
  {
    className: 'haarlemmermeer-theme',
    title: 'Gemeente Haarlemmermeer',
    href: 'https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css',
  },
  {
    className: 'hoorn-theme',
    title: 'Gemeente Hoorn',
    href: 'https://unpkg.com/@nl-design-system-unstable/hoorn-design-tokens/dist/index.css',
  },
  {
    className: 'horstaandemaas-theme',
    title: 'Gemeente Horst aan de Maas',
    href: 'https://unpkg.com/@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css',
  },
  {
    className: 'leidschendam-theme',
    title: 'Gemeente Leidschendam Voorburg',
    href: 'https://unpkg.com/@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css',
  },
  {
    className: 'noordoostpolder-theme',
    title: 'Gemeente Noordoostpolder',
    href: 'https://unpkg.com/@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css',
  },
  {
    className: 'rotterdam-theme',
    title: 'Gemeente Rotterdam',
    href: 'https://unpkg.com/@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css',
  },
  {
    className: 'stedebroec-theme',
    title: 'Gemeente Stede Broec',
    href: 'https://unpkg.com/@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css',
  },
  {
    className: 'tilburg-theme',
    title: 'Gemeente Tilburg',
    href: 'https://unpkg.com/@nl-design-system-unstable/tilburg-design-tokens/dist/index.css',
  },
  {
    className: 'utrecht-theme',
    title: 'Gemeente Utrecht',
    href: 'https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css',
  },
  {
    className: 'venray-theme',
    title: 'Gemeente Venray',
    href: 'https://unpkg.com/@nl-design-system-unstable/venray-design-tokens/dist/index.css',
  },
  {
    className: 'vught-theme',
    title: 'Gemeente Vught',
    href: 'https://unpkg.com/@nl-design-system-unstable/vught-design-tokens/dist/index.css',
  },
  {
    className: 'westervoort-theme',
    title: 'Gemeente Westervoort',
    href: 'https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css',
  },
  {
    className: 'zevenaar-theme',
    title: 'Gemeente Zevenaar',
    href: 'https://unpkg.com/@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css',
  },
  {
    className: 'zwolle-theme',
    title: 'Gemeente Zwolle',
    href: 'https://unpkg.com/@nl-design-system-unstable/zwolle-design-tokens/dist/index.css',
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
