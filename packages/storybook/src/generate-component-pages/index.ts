import { componentIndex, COMPONENT_TYPES, ORGANISATIONS } from '@nl-design-system/component-index';

import * as fs from 'fs';
import * as path from 'path';

import { pageTemplate } from './page-template';

const DOCS_PATH = '../../documentation/build';

// Ensure Directory
const dirPath = path.join(__dirname, DOCS_PATH);
if (!fs.existsSync(dirPath)) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (_) {
    throw new Error('File could not be created');
  }
}

console.log(`Directory available: ${dirPath}`);

// Ignore directory in Git
try {
  fs.writeFileSync(`${dirPath}/.gitignore`, '**');
} catch (_) {
  throw new Error('gitignore could not be created');
}

// Create component pages
componentIndex.forEach((component) => {
  const fileName = `${dirPath}/${component.id}.stories.jsx`;

  // For now only use Utrecht and CSS implementations
  const implementation = component.implementations?.find(
    ({ organisation, type }) => organisation === ORGANISATIONS.UTRECHT && type === COMPONENT_TYPES.CSS,
  );

  if (typeof implementation !== 'undefined' && typeof implementation.storyTemplate === 'string') {
    try {
      fs.writeFileSync(fileName, pageTemplate(component, implementation));
    } catch (err) {
      console.error(err);
    }

    console.log(`File created: ${fileName}`);
  }
});
