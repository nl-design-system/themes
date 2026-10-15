import { mkdir, writeFile } from 'node:fs/promises';
import { generateTheme } from './generate-theme.mts';

const main = async () => {
  await mkdir('./tmp/', { recursive: true });
  await writeFile('./tmp/generated.tokens.json', JSON.stringify(generateTheme(), null, 2));
};

main();
