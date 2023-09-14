const config = require('./src/config.json');
const { createConfig } = require('../../style-dictionary-config');

module.exports = createConfig({
  selector: `.${config.prefix}-theme`,
});
