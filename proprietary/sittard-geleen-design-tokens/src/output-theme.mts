import { generateTheme } from './generate-theme.mts';

/**
 * Generate Design Tokens JSON for this theme, and output the JSON to `stdout`.
 *
 * Can be consumed by Style Dictionary this way, by including this TypeScript file in `source`.
 */
const main = async () => {
  process.stdout.write(JSON.stringify(generateTheme({ log: false }), null, 2));
};

main();
