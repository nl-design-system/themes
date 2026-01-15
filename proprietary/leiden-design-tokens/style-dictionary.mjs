import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createConfig } from '../../style-dictionary-config.js';

import themeJsonFormatter from './themeJsonFormatter.mjs';

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

  StyleDictionary.registerFormat({
    name: 'custom/themeJson',
    format: themeJsonFormatter,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  let sd = new StyleDictionary({
    ...createConfig({
      backwardsCompatible: true,
      selector: `.${themeConfig.prefix}-theme`,
    }),
    preprocessors: ['color-scheme-default', 'tokens-studio', 'dtcg-delegate'],
    source: ['figma/**/leiden.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();

  // theme.json
  let sdThemeJson = new StyleDictionary({
    source: ['figma/**/leiden.tokens.json'],
    preprocessors: ['color-scheme-default', 'tokens-studio', 'dtcg-delegate'],
    platforms: {
      themeJson: {
        transformGroup: "tokens-studio",
        transforms: ["name/camel"],
        buildPath: 'dist/',
        files: [{
          destination: 'theme.json',
          format: 'custom/themeJson'
        }]
      }
    },
    log: {
      verbosity: 'verbose',
    }
  })

  await sdThemeJson.cleanAllPlatforms();
  await sdThemeJson.buildAllPlatforms();
};

build();

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