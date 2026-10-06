import config from './src/config.json' with { type: 'json' };
import { createConfig } from '../../style-dictionary-config.mjs';

export default createConfig({
  backwardsCompatible: true,
  selector: `.${config.prefix}-theme`,
  source: ['../riddeliemers-design-tokens/src/**/*.tokens.json', 'src/**/*.tokens.json'],
});
