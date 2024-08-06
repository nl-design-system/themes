import { readFile } from 'node:fs/promises';
import { DesignToken } from '../design-tokens';

const init = async () => {
  const json = await readFile('./node_modules/@utrecht/design-tokens/dist/index.json', 'utf-8');
  const tokens: DesignToken[] = JSON.parse(json);

  const isEqualArray = <T>(a: T[], b: T[]) => a.length === b.length && a.every((value, index) => b[index] === value);

  const findToken = (tokens: DesignToken[], searchPath: string[]) => {
    return tokens.find((token) => isEqualArray(token.path, searchPath));
  };

  const filterTokenStartsWith = (prefix: string) => {
    const pathPrefix = prefix.split('.');
    return ({ path }: DesignToken) => pathPrefix.every((name, index) => path[index] === name);
  };
  const result = tokens.filter(filterTokenStartsWith('utrecht.button'));
  const colorResults = result.filter(filterColors('color'));
  const colorPairs = colorResults.map((token: DesignToken) => {
    return {
      foreground: token.path.join('.'),
      background: findToken(tokens, [...token.path.slice(0, token.path.length - 1), 'background-color'])?.path.join(
        '.',
      ),
      'font-size': 'todo',
      type: 'functional', // todo: recognize non-functional
    };
  });
  console.log(colorPairs);
  //console.log(colorResults.map(({ path }: DesignToken) => path.join('.')));
};

const filterColors = (filter: string) => {
  return (token: DesignToken) => token.path[token.path.length - 1] === filter;
};

init();
