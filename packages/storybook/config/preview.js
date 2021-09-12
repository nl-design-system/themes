import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css';
import '@nl-design-system-unstable/borne-design-tokens/dist/index.css';
import '@nl-design-system-unstable/drechterland-design-tokens/dist/index.css';
// import '@nl-design-system-unstable/dso-toolkit-design-tokens/dist/index.css';
import '@nl-design-system-unstable/duiven-design-tokens/dist/index.css';
// import '@nl-design-system-unstable/duo-design-tokens/dist/index.css';
import '@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/groningen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css';
import '@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css';
import '@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css';
import '@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css';
import '@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css';
import '@nl-design-system-unstable/tilburg-design-tokens/dist/index.css';
import '@nl-design-system-unstable/venray-design-tokens/dist/index.css';
import '@nl-design-system-unstable/vught-design-tokens/dist/index.css';
import '@nl-design-system-unstable/westervoort-design-tokens/dist/index.css';
import '@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css';
import '@nl-design-system-unstable/zwolle-design-tokens/dist/index.css';

import { defineCustomElements as defineUtrechtComponents } from '@utrecht/web-component-library-stencil';

defineUtrechtComponents();

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  options: {
    panelPosition: 'bottom',
  },
};
