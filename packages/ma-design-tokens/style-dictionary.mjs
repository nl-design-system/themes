import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import {
  createConfig,
  colorSchemeDarkPreprocessor,
  colorSchemeDefaultPreprocessor,
} from '../../style-dictionary-config.js';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));

  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  StyleDictionary.registerPreprocessor({
    name: 'color-scheme-default',
    preprocessor: colorSchemeDefaultPreprocessor,
  });

  StyleDictionary.registerPreprocessor({
    name: 'color-scheme-dark',
    preprocessor: colorSchemeDarkPreprocessor,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  let sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['color-scheme-default', 'tokens-studio', 'dtcg-delegate'],
    source: ['src/tokens.json', 'src/*.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  // color scheme dark
  let sdDark = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme--color-scheme-dark`,
      buildPath: 'dist/color-scheme-dark/',
    }),
    preprocessors: ['color-scheme-dark', 'tokens-studio', 'dtcg-delegate'],
    source: ['src/tokens.json', 'src/*.tokens.json'],
  });

  await sdDark.cleanAllPlatforms();
  await sdDark.buildAllPlatforms();
};

build();
