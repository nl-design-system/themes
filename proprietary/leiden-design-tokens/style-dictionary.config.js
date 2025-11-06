const config = require('./src/config.json');
const { createConfig } = require('../../style-dictionary-config');

module.exports = createConfig({
  backwardsCompatible: true,
  selector: `.${config.prefix}-theme`,
  source: ['figma/**/tokens.json', 'figma/**/*.tokens.json'],
});
