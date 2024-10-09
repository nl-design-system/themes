import { isFigmaTokens, migrateTheme, migrateTokensFile } from '../migrate-theme';
import { readFile } from 'node:fs/promises';

const init = async (inputFile: string, metadataFile: string) => {
  const theme = JSON.parse(await readFile(inputFile, 'utf-8'));
  const metadata = JSON.parse(await readFile(metadataFile, 'utf-8'));

  const migrated = isFigmaTokens(theme) ? migrateTokensFile(theme, metadata) : migrateTheme(theme, metadata);
  process.stdout.write(JSON.stringify(migrated, null, 2));
  process.stdout.write('\n');
};

if (process.argv[2]) {
  init(process.argv[2], './node_modules/@utrecht/component-library-design-tokens/dist/tokens.json');
} else {
  process.stderr.write(
    'Specify the file you want to migrate. For example:\n\n    pnpm run migrate-theme ~/Desktop/tokens.json\n',
  );
}
