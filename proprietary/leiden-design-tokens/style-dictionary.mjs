import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import {
  colorSchemeDefaultPreprocessor,
  colorSchemeDarkPreprocessor,
  createConfig,
} from '../../style-dictionary-config.mjs';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  StyleDictionary.registerPreprocessor(colorSchemeDefaultPreprocessor);
  StyleDictionary.registerPreprocessor(colorSchemeDarkPreprocessor);

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  let sd = new StyleDictionary({
    ...createConfig({
      selector: `.${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['color-scheme-default', 'tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/leiden.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
