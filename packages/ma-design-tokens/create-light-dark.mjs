/**
 * Create a versions of `theme.css` and `variables.css` which use the `light-dark()` function.
 * There are a few tokens for which the `light-dark()` function is not an option. These tokens
 * consist out of multiple (layered) box shadows, which the `light-dark()` functions can not handle.
 * These tokens are _not_ converted but instead extracted into a `prefers-color-scheme: dark` media query
 */

import { readFile, writeFile } from 'node:fs/promises';

const sourceFileTheme = './dist/theme.css';
const sourceFileVariables = './dist/variables.css';
const darkModeFile = './dist/color-scheme-dark/theme.css';

const extractToMediaQuery = ['--basis-box-shadow-lg', '--basis-box-shadow-md', '--basis-box-shadow-sm'];

function getKeyValuePairFromLine(line) {
  if (!line) return {};

  const [key, value] = line
    .replace(';', '')
    .split(':')
    .map((part) => part.trim());
  return { key, value };
}

function not(fn) {
  return (...args) => {
    return !fn(...args);
  };
}

function isExtracted(line) {
  const { key } = getKeyValuePairFromLine(line);
  return extractToMediaQuery.includes(key);
}

async function createLightDarkVersion(sourceFile, selector) {
  const lightMode = await readFile(sourceFile, { encoding: 'utf-8' });
  const darkMode = await readFile(darkModeFile, { encoding: 'utf-8' });

  const lightModeLines = lightMode.split('\n');

  darkMode
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('--'))
    .filter(not(isExtracted))
    .forEach((darkModeLine) => {
      const { key, value: darkModeValue } = getKeyValuePairFromLine(darkModeLine);
      const lightModeLine = lightModeLines.find((line) => line.trim().startsWith(key));
      const lightModeLineIndex = lightModeLines.indexOf(lightModeLine);
      const { value: lightModeValue } = getKeyValuePairFromLine(lightModeLine);

      if (darkModeValue !== lightModeValue) {
        const newLightModeLine = lightModeLine.replace(
          lightModeValue,
          `light-dark(${lightModeValue}, ${darkModeValue})`,
        );
        lightModeLines[lightModeLineIndex] = newLightModeLine;
      }
    });

  const selectorIndex = lightModeLines.findIndex((line) => line.includes(`${selector} {`));
  lightModeLines.splice(selectorIndex + 1, 0, '  color-scheme: light dark;');

  const inMediaQuery = [
    '@media (prefers-color-scheme: dark) {',
    `  ${selector} {`,
    ...darkMode.split('\n').filter(isExtracted),
    '  }',
    '}',
  ];

  const newFileName = sourceFile.replace('.css', '-light-dark.css');
  await writeFile(newFileName, [...lightModeLines, ...inMediaQuery].join('\n'), { encoding: 'utf-8' });
}

createLightDarkVersion(sourceFileTheme, '.ma-theme');
createLightDarkVersion(sourceFileVariables, ':root');
