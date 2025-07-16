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
      selector: `.${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['color-scheme-default', 'tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/start.tokens.json'],
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
    source: ['figma/**/start.tokens.json'],
  });

  await sdDark.cleanAllPlatforms();
  await sdDark.buildAllPlatforms();
};

build();

// TODO: Include preprocessor functions from ../../style-dictionary-config.js when available

/**
 * Style Dictionary preprocessor to remove all tokens that start with "color-scheme-".
 * This is used to create a default color scheme configuration.
 *
 * Register with:
    StyleDictionary.registerPreprocessor({
     name: 'color-scheme-default',
     preprocessor: colorSchemeDefaultPreprocessor,
   });
 *
 * @param {DesignTokens} dictionary
 * @returns {DesignTokens} dictionary
 */
const colorSchemeDefaultPreprocessor = (dictionary) => {
  const clonedDictionary = structuredClone(dictionary);
  // Delete all keys that start with "color-scheme-"
  Object.keys(clonedDictionary).forEach((key) => {
    if (key.startsWith('color-scheme-')) {
      delete clonedDictionary[key];
    }
  });
  return clonedDictionary;
};

/**
 * Style Dictionary preprocessor to include only tokens that belong to the "color-scheme-dark" tokenset.
 * This is used to create a dark color scheme configuration.
 *
 * Register with:
    StyleDictionary.registerPreprocessor({
     name: 'color-scheme-dark',
     preprocessor: colorSchemeDarkPreprocessor,
   });
 *
 * @param {DesignTokens} dictionary
 * @returns {DesignTokens} dictionary
 */
const colorSchemeDarkPreprocessor = (dictionary) => {
  const clonedDictionary = structuredClone(dictionary);
  // Include only tokens that belong to the "color-scheme-dark" tokenset
  Object.keys(clonedDictionary).forEach((key) => {
    if (!key.startsWith('color-scheme-dark/')) {
      delete clonedDictionary[key];
    }
  });
  return clonedDictionary;
};
