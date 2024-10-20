import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  const sd = new StyleDictionary({
    ...createConfig({
      selector: `.${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/*.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
