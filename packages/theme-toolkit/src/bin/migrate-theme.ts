import { migrateTheme } from '../migrate-theme';
import { readFile } from 'node:fs/promises';

const init = async (inputFile, metadataFile) => {
  const theme = JSON.parse(await readFile(inputFile));
  const metadata = JSON.parse(await readFile(metadataFile));

  const migrated = migrateTheme(theme, metadata);
  process.stdout.write(JSON.stringify(migrated, null, 2));
};

init('./tilburg.json', './node_modules/@utrecht/component-library-design-tokens/dist/tokens.json');
