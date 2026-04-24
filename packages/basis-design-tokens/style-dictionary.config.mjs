import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { propertyFormatterHooksConfig } from './src/css-property-formatter.mjs';

const build = async () => {
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    excludeParentKeys: true,
  });

  // Special style dictionary build that only builds one property.css file
  const sd = new StyleDictionary({
    hooks: {
      formats: {
        ...propertyFormatterHooksConfig,
      },
    },
    preprocessors: ['dtcg-delegate'],
    source: ['src/**/*.tokens.json'],
    platforms: {
      css: {
        transforms: ['name/kebab'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'property.css',
            format: 'css/property',
          },
        ],
      },
    },
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
