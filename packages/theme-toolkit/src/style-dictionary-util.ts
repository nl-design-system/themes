import StyleDictionary from 'style-dictionary';
import memfs from '@bundled-es-modules/memfs';

export const styleDictionaryConversion = async (tokens: any, selector?: string): Promise<string> => {
  const { Volume } = memfs;
  const vol = new Volume();
  const sd = new StyleDictionary(
    {
      tokens,
      platforms: {
        css: {
          transforms: ['name/kebab'],
          transformGroup: 'css',
          files: [
            {
              destination: 'variables.css',
              format: 'css/variables',
              options: {
                selector,
                outputReferences: true,
              },
            },
          ],
        },
      },
    },
    typeof process !== 'undefined' ? { volume: vol } : {},
  );

  let css = '';

  await sd.buildAllPlatforms();

  try {
    css = vol.readFileSync('/variables.css').toString('utf-8');
  } catch (e) {
    console.error(e);
  }

  return css;
};
