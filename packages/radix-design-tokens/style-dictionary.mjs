import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';
import tokens from './src/radix-tokens.mjs';
import merge from 'lodash-es/merge.js';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  const defaultTokens = merge(
    ...(await Promise.all(
      ['../../proprietary/basis-design-tokens/figma/basis.tokens.json'].map(async (path) =>
        JSON.parse(await readFile(path, 'utf-8')),
      ),
    )),
    {
      brand: {
        radix: tokens,
      },
    },
  );

  let sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    // source: ['../basis-design-tokens/figma/**/*.tokens.json', 'figma/figma.tokens.json'],
    tokens: defaultTokens,
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  const colorSchemeDarkTokens = defaultTokens;
  console.log(colorSchemeDarkTokens);
  sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme--color-scheme-dark`,
      buildPath: 'dist/color-scheme-dark/',
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    tokens: colorSchemeDarkTokens,
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
