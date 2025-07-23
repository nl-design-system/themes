/* eslint-env jest */

import { describe, expect, beforeAll, it, xdescribe } from '@jest/globals';
import { access, constants, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const fileExists = async (path: string) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};
const testDirectory = (distPath: string) => {
  xdescribe('Style Dictionary build', () => {
    describe('.less output', () => {
      const path = resolve(distPath, './variables.less');
      it('has a `dist/variables.less` file', async () => {
        expect(await fileExists(path)).toBe(true);
      });

      describe('file contents', () => {
        let content = '';
        beforeAll(async () => {
          content = await readFile(path, 'utf-8');
        });

        it('has variable declaration in Less syntax', () => {
          expect(content).toContain('@utrecht-button-color: @basis-color-default-color-default;');
        });

        it.todo('the file `dist/variables.less` has valid Less syntax');
      });
    });

    describe('CSS output', () => {
      describe('./theme.css', () => {
        const path = resolve(distPath, './theme.css');

        it('has a `dist/theme.css` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('applies to the `.voorbeeld-theme` selector', () => {
            expect(content).toContain('.voorbeeld-theme');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('--utrecht-button-color:');
          });

          it('contains a variable declaration with a variable reference', () => {
            expect(content).toContain('--utrecht-button-color: var(--basis-color-default-color-default);');
          });
        });
      });

      describe('dist/variables.css', () => {
        const path = resolve(distPath, './variables.css');

        it('has a `dist/variables.css` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('applies to the `:root` selector', () => {
            expect(content).toContain(':root');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('--utrecht-button-color:');
          });

          it('contains a variable declaration with a variable reference', () => {
            expect(content).toContain('--utrecht-button-color: var(--basis-color-default-color-default);');
          });
        });
      });
    });

    describe('SCSS output', () => {
      describe('./_variables.scss', () => {
        const path = resolve(distPath, './_variables.scss');

        it('has a `dist/_variables.scss` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('$utrecht-button-color:');
          });

          it('contains a variable declaration with a variable reference', () => {
            expect(content).toContain('$utrecht-button-color: $basis-color-default-color-default !default;');
          });

          it('contains no "$token-set-order" artefacts from Token Studio', () => {
            expect(content).not.toContain('$token-set-order');
          });

          it.skip('contains valid SASS syntax has no side effects', () => {
            /*
            import { compileString } from 'sass';
            const output = compileString(content);
            console.log(output);
            expect(output).toBe('');
            */
          });
        });
      });

      describe('dist/_mixin.scss', () => {
        const path = resolve(distPath, './_mixin.scss');

        it('has a `dist/_mixin.scss` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains the `voorbeeld-theme` mixin', () => {
            expect(content).toContain('@mixin voorbeeld-theme');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('--utrecht-button-color:');
          });

          it('contains a variable declaration with a variable reference', () => {
            expect(content).toContain('--utrecht-button-color: var(--basis-color-default-color-default);');
          });
        });
      });
    });

    describe('JavaScript output', () => {
      describe('dist/variables.mjs', () => {
        const path = resolve(distPath, './variables.mjs');
        it('has a `dist/variables.mjs` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });
        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('export const utrechtButtonColor = ');
          });
        });
      });

      describe('dist/variables.cjs', () => {
        const path = resolve(distPath, './variables.cjs');
        it('has a `dist/variables.cjs` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a variable declaration', () => {
            expect(content).toContain('"utrechtButtonColor":');
          });

          it('contains a variable assignment', () => {
            expect(content).toContain('"utrechtButtonColor": "#ababab"');
          });
        });
      });
    });

    describe('TypeScript output', () => {
      describe('variables.d.ts', () => {
        const path = resolve(distPath, './variables.d.ts');
        it('has a `dist/variables.d.ts` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });
          it('contains a variable assignment', () => {
            expect(content).toContain('export const utrechtButtonColor : string;');
          });
        });
      });

      describe('tokens.d.ts', () => {
        const path = resolve(distPath, './tokens.d.ts');
        it('has a `dist/tokens.d.ts` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a default export', () => {
            expect(content).toContain('export default tokens');
          });

          it('contains a type assignment', () => {
            expect(content).toContain('"color": DesignToken');
          });
        });
      });
    });

    describe('JSON output', () => {
      describe('variables.json', () => {
        const path = resolve(distPath, './variables.json');
        it('has a `dist/variables.json` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a property declaration', () => {
            expect(content).toContain('"utrechtButtonColor":');
          });

          it('contains a property assignment', () => {
            expect(content).toContain('"utrechtButtonColor": "#ababab"');
          });
        });
      });

      describe('tokens.json', () => {
        const path = resolve(distPath, './tokens.json');
        it('has a `dist/tokens.json` file', async () => {
          expect(await fileExists(path)).toBe(true);
        });

        describe('file contents', () => {
          let content = '';

          beforeAll(async () => {
            content = await readFile(path, 'utf-8');
          });

          it('contains a property declaration', () => {
            expect(content).toContain('"utrecht":');
            expect(content).toContain('"button":');
            expect(content).toContain('"color":');
          });

          it.skip('contains a property declaration', () => {
            expect(content).toContain('"utrecht":');
            expect(content).toContain('"button":');
            expect(content).toContain('"color":');
            expect(content).toContain('"value":');
          });

          it.skip('contains a property assignment', () => {
            expect(content).toContain('"value": "#0a2750"');
          });
        });
      });
    });
  });
};

testDirectory('../voorbeeld-design-tokens/dist/');
