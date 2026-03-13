import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig, colorSchemeDefaultPreprocessor } from '../../style-dictionary-config.js';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));

  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  StyleDictionary.registerPreprocessor(colorSchemeDefaultPreprocessor);

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  let sd = new StyleDictionary({
    ...createConfig({
      selector: `.${themeConfig.prefix}-theme`,
    }),
    preprocessors: [colorSchemeDefaultPreprocessor.name, 'tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/groningen.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
