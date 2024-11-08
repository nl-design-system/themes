import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';

const isLargeVwToken = (token) => {
  return token.path && token.path.includes('large-vw');
};
// https://tr.designtokens.org/format/#shadow
const isShadowToken = (token) =>
  !!token &&
  typeof token === 'object' &&
  token['$type'] === 'shadow' &&
  typeof token['$value'] === 'object' &&
  !!token['$value'] &&
  typeof token['$value']['color'] === 'string' &&
  typeof token['$value']['offsetX'] === 'string' &&
  typeof token['$value']['offsetY'] === 'string' &&
  typeof token['$value']['blur'] === 'string' &&
  typeof token['$value']['spread'] === 'string';

const isBoxShadowToken = (token) =>
  typeof token === 'object' &&
  !!token &&
  token['$type'] === 'boxShadow' &&
  typeof token['$value'] === 'object' &&
  typeof token['$value'] &&
  typeof token['$value']['color'] === 'string' &&
  typeof token['$value']['x'] === 'string' &&
  typeof token['$value']['y'] === 'string' &&
  typeof token['$value']['blur'] === 'string' &&
  typeof token['$value']['spread'] === 'string';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  // StyleDictionary.registerPreprocessor({
  //   name: 'dtcg-delegate',
  //   preprocessor: typeDtcgDelegate,
  // });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  const themeSelector = `.${themeConfig.prefix}-theme`;

  const sd = new StyleDictionary({
    ...createConfig({
      selector: themeSelector,
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/*.tokens.json'],
  });

  // sd.registerFilter({
  //   name: 'filter-large-vw',
  //   filter: isLargeVwToken,
  // });

  // sd.registerTransform({
  //   name: 'name/remove-large-vw',
  //   type: 'name',
  //   filter: isLargeVwToken,
  //   transform: (token) => {
  //     return token.name.replace(/-large-vw/g, '');
  //   },
  // });

  sd.registerTransform({
    name: 'boxShadow',
    type: 'value',
    // transitive: false,
    transform: (token) => {
      console.log(token);
      if (token['original']['$type'] === 'boxShadow') console.log(token);
      return;
      if (isBoxShadowToken(token)) {
        return {
          offsetX: token.x,
          offsetY: token.y,
          blur: token.blur,
          spread: token.spread,
          color: token.color,
        };
      } else {
        return token.value;
      }
    },
  });
  // sd.registerTransform({
  //   name: 'boxShadow/css',
  //   type: 'value',
  //   transitive: false,
  //   transform: (token) => {
  //     return token.value;
  //     let value = token.value;

  //     if (isShadow(token)) {
  //       const { x, y, blur, spread, color } = token.value;
  //       value = `${x} ${y} ${blur} ${spread} ${color}`;
  //     } else if (isBoxShadow(token)) {
  //       const { offsetX, offsetY, blur, spread, color } = token.value;
  //       value = `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
  //     }
  //     if (value !== token.value) {
  //       console.log(value);
  //     }
  //     return value;
  //   },
  // });

  // sd.platforms.largeCss = {
  //   transformGroup: 'tokens-studio',
  //   transforms: ['name/kebab', 'name/remove-large-vw'],
  //   buildPath: 'dist/',
  //   files: [
  //     {
  //       destination: 'theme-large-vw.css',
  //       format: 'css/variables',
  //       filter: 'filter-large-vw',
  //       options: {
  //         selector: themeSelector,
  //         outputReferences: true,
  //       },
  //     },
  //     {
  //       destination: 'variables-large-vw.css',
  //       format: 'css/variables',
  //       filter: 'filter-large-vw',
  //       options: {
  //         selector: `:root`,
  //         outputReferences: true,
  //       },
  //     },
  //   ],
  // };

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
