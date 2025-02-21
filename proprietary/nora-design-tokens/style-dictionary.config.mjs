import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';

const isLargeVwToken = (token) => {
  return token.path && token.path.includes('large-vw');
};

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  const themeSelector = `.${themeConfig.prefix}-theme`;

  const sd = new StyleDictionary({
    ...createConfig({
      selector: themeSelector,
      useTokensStudioTransformGroup: true,
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/*.tokens.json'],
  });

  sd.registerFilter({
    name: 'filter-large-vw',
    filter: isLargeVwToken,
  });

  sd.registerTransform({
    name: 'name/remove-large-vw',
    type: 'name',
    filter: isLargeVwToken,
    transform: (token) => {
      return token.name.replace(/-large-vw/g, '');
    },
  });

  sd.platforms.largeCss = {
    transformGroup: 'tokens-studio',
    transforms: ['name/kebab', 'name/remove-large-vw'],
    buildPath: 'dist/',
    files: [
      {
        destination: 'theme-large-vw.css',
        format: 'css/variables',
        filter: 'filter-large-vw',
        options: {
          selector: themeSelector,
          outputReferences: true,
        },
      },
      {
        destination: 'variables-large-vw.css',
        format: 'css/variables',
        filter: 'filter-large-vw',
        options: {
          selector: `:root`,
          outputReferences: true,
        },
      },
    ],
  };

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
