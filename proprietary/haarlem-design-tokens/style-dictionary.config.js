const config = require('./src/config.json');
const { createConfig } = require('../../style-dictionary-config');

module.exports = createConfig({
  source: ['figma/**/*tokens.json', 'figma/**/*.tokens.json', 'src/**/tokens.json', 'src/**/*.tokens.json'],
  selector: `.${config.prefix}-theme`,
});
