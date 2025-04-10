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

  let sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: [
      // '../../packages/basis-design-tokens/figma/**/*.tokens.json',
      'src/tokens.json',
      'src/*.tokens.json',
      'src/*/*/tokens.json',
      'src/*/*/*.tokens.json',
      'src/*/*/*/tokens.json',
      'src/*/*/*/*.tokens.json',
    ],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme--color-scheme-dark`,
      buildPath: 'dist/color-scheme-dark/',
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: [
      // '../../packages/basis-design-tokens/figma/**/*.tokens.json',
      'src/color-scheme-dark/tokens.json',
      'src/color-scheme-dark/*.tokens.json',
      'src/color-scheme-dark/*/*/tokens.json',
      'src/color-scheme-dark/*/*/*.tokens.json',
      'src/color-scheme-dark/*/*/*/tokens.json',
      'src/color-scheme-dark/*/*/*/*.tokens.json',
    ],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
