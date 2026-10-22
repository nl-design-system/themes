import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { appendFile, readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.mjs';
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

  let sd = new StyleDictionary({
    ...lightConfig,
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    tokens: generateTheme(),
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  sd = new StyleDictionary({
    ...createConfig({
      className: `${themeConfig.prefix}-theme--color-scheme-dark`,
      buildPath: 'dist/color-scheme-dark/',
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    tokens: generateTheme({ colorScheme: 'dark' }),
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  // Open Forms only applies its page layout (centering, background, header) under its
  // default `openforms-theme` class, and its theme class name field allows only one class.
  sd = new StyleDictionary({
    ...createConfig({
      className: 'openforms-theme',
      buildPath: 'dist/open-forms/',
    }),
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    tokens: generateTheme(),
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  // Some Open Forms styles are hardcoded and cannot be overridden with tokens, so append the
  // CSS overrides to the Open Forms theme. That way they ship in the same file.
  const openFormsOverrides = await readFile('./src/_open-forms-overrides.css', 'utf-8');
  await appendFile('dist/open-forms/theme.css', `\n${openFormsOverrides}`);
};

build();
