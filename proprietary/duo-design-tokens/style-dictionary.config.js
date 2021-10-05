const config = require('./src/config.json');
const { createConfig } = require('../../style-dictionary-config');

module.exports = createConfig({
  selector: `.${config.prefix}-theme`,
  source: [
    '../../node_modules/@nl-design-system-unstable/rijkshuisstijl-design-tokens/src/brand/**/*.style-dictionary.json',
    'src/**/*.style-dictionary.json',
  ],
});
