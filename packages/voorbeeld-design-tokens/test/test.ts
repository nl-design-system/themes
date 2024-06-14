import { variableCompare } from '@levitade/css-toolkit';
import path from 'node:path';
import * as fs from 'node:fs';

export default function compareUtrechtTokens() {
  const voorbeeldCssPath = path.resolve(__dirname, '../dist/design-tokens.css');
  const utrechtCssPath = path.resolve(__dirname, '../node_modules/@utrecht/component-library-css/dist/index.css');

  const voorbeeldCss = fs.readFileSync(voorbeeldCssPath, 'utf8');
  const utrechtCss = fs.readFileSync(utrechtCssPath, 'utf8');

  const result = variableCompare(utrechtCss, voorbeeldCss);

  const utrechtDifference = result.filter((token) => token.startsWith('--utrecht'));

  if (utrechtDifference.length > 0) {
    console.error('Found unexpected variables:', JSON.stringify(utrechtDifference, null, 2));
    process.exit(1); // Exit with a non-zero code to indicate failure
  } else {
    console.log('All variables are as expected.');
  }
}

compareUtrechtTokens();
