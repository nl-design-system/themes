import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';
import { generateTheme } from './src/generate-theme.mts';
import { hasParentKeys } from './src/util.mts';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./src/config.json', 'utf-8'));
  const tokens = generateTheme();
  const useTokensStudio = hasParentKeys(tokens);

  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    excludeParentKeys: useTokensStudio,
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
    preprocessors: [...(useTokensStudio ? 'tokens-studio' : []), 'dtcg-delegate'],
    tokens: generateTheme(),
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme--color-scheme-dark`,
      buildPath: 'dist/color-scheme-dark/',
    }),
    preprocessors: [...(useTokensStudio ? 'tokens-studio' : []), 'dtcg-delegate'],
    tokens: generateTheme({ colorScheme: 'dark' }),
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
