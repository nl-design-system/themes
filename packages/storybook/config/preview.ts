import '@amsterdam/design-system-tokens/dist/index.theme.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@gemeente-rotterdam/design-tokens/dist/index.css';
import '@nl-design-system-community/nora-design-tokens/dist/theme.css';
import '@lux-design-system/design-tokens/dist/logius/index-theme.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@nl-design-system-community/ma-design-tokens/src/font.js';
import '@nl-design-system-community/ma-design-tokens/dist/theme.css';
import '@nl-design-system-community/ma-design-tokens/dist/color-scheme-dark/theme.css';
import '@nl-design-system-community/nora-design-tokens/src/font.js';
import '@nl-design-system-community/purmerend-design-tokens/dist/theme.css';
import '@nl-design-system-community/purmerend-design-tokens/dist/color-scheme-dark/theme.css';
import '@nl-design-system-community/purmerend-design-tokens/src/font.js';
import '@nl-design-system-community/zaanstad-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/basis-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/dist/index.css';
import '@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/src/font';
import '@nl-design-system-unstable/borne-design-tokens/dist/index.css';
import '@nl-design-system-unstable/buren-design-tokens/dist/index.css';
import '@nl-design-system-unstable/buren-design-tokens/src/font';
import '@nl-design-system-unstable/dinkelland-design-tokens/dist/index.css';
import '@nl-design-system-unstable/dinkelland-design-tokens/src/font';
import '@nl-design-system-unstable/drechterland-design-tokens/dist/index.css';
import '@nl-design-system-unstable/duiven-design-tokens/dist/index.css';
import '@nl-design-system-unstable/duiven-design-tokens/src/font';
import '@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/epe-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/epe-design-tokens/src/font';
import '@nl-design-system-unstable/groningen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/groningen-design-tokens/src/font';
import '@nl-design-system-unstable/haarlem-design-tokens/dist/index.css';
import '@nl-design-system-unstable/haarlem-design-tokens/src/font.scss';
import '@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css';
import '@nl-design-system-unstable/hoeksche-waard-design-tokens/dist/index.css';
import '@nl-design-system-unstable/hoorn-design-tokens/dist/design-tokens.css';
import '@nl-design-system-unstable/hoorn-design-tokens/src/font';
import '@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css';
import '@nl-design-system-unstable/leiden-design-tokens/dist/index.css';
import '@nl-design-system-unstable/leiden-design-tokens/src/font';
import '@nl-design-system-unstable/leidschendam-voorburg-design-tokens/dist/index.css';
import '@nl-design-system-unstable/nijmegen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/nijmegen-design-tokens/src/font';
import '@nl-design-system-unstable/noaberkracht-design-tokens/dist/index.css';
import '@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css';
import '@nl-design-system-unstable/noordoostpolder-design-tokens/src/font';
import '@nl-design-system-unstable/noordwijk-design-tokens/dist/index.css';
import '@nl-design-system-unstable/noordwijk-design-tokens/src/font';
import '@nl-design-system-unstable/provincie-zuid-holland-design-tokens/dist/index.css';
import '@nl-design-system-unstable/start-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/start-design-tokens/src/font.js';
import '@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css';
import '@nl-design-system-unstable/tilburg-design-tokens/dist/index.css';
import '@nl-design-system-unstable/tubbergen-design-tokens/dist/index.css';
import '@nl-design-system-unstable/tubbergen-design-tokens/src/font';
import '@nl-design-system-unstable/venray-design-tokens/dist/index.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/custom.scss';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import '@nl-design-system-unstable/vught-design-tokens/dist/index.css';
import '@nl-design-system-unstable/westervoort-design-tokens/dist/index.css';
import '@nl-design-system-unstable/westervoort-design-tokens/src/font';
import '@nl-design-system-unstable/xxllnc-design-tokens/dist/index.css';
import '@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css';
import '@nl-design-system-unstable/zevenaar-design-tokens/src/font';
import '@nl-design-system-unstable/zwolle-design-tokens/dist/index.css';
import type { Preview } from '@storybook/react-vite';
import '@utrecht/design-tokens/dist/index.css';
import { ThemeDecorator } from './ThemeDecorator';
import { defineCustomElements } from '@lux-design-system/web-components-stencil/loader/index.js';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    chromatic: {
      // snapshots are enabled at the story level
      disableSnapshot: true,
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
