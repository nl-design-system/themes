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

  const lightConfig = createConfig({
    className: `${themeConfig.prefix}-theme`,
  });
  // OpenForms only applies our theme class to the <html> root when it is
  // explicitly configured to do so. Scoping theme.css to :root as well
  // guarantees the tokens apply even when that configuration step is missed.
  lightConfig.platforms.css.files[0].options.selector = [':root', `.${themeConfig.prefix}-theme`];

  let sd = new StyleDictionary({
    ...lightConfig,
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: ['../../packages/basis-design-tokens/figma/**/*.tokens.json', 'figma/figma.tokens.json'],
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
      '../../packages/basis-design-tokens/figma/**/*.tokens.json',
      'figma/figma.tokens.json',
      'figma/color-scheme-dark.tokens.json',
    ],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
