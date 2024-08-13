import { readFile } from 'node:fs/promises';
import { designTokenMapToList, getColorPairs } from './check-colors';
import { StyleDictionaryDesignToken } from '../design-tokens';
import Color from 'color';
import { getCommunityTokens } from '../community-tokens';

const parseColor = (color: any) => {
  if (!color || color === 'inherit' || color === 'transparent') {
    return '';
  } else if (typeof color === 'string') {
    try {
      return Color(color);
    } catch (e) {
      console.error(`Cannot parse color: ${color}`);
      return '';
    }
  } else {
    return '';
  }
};
const init = async () => {
  // TODO dit is voor nu alleen nog maar utrecht
  // TODO: consider switching to @utrecht/button-css/src/tokens.json and then convert the tree (DesignTokenMap) to an array (DesignToken[])
  const json = await readFile('./node_modules/@utrecht/design-tokens/dist/index.json', 'utf-8');
  // const buttonTokensJson = await readFile('./node_modules/@utrecht/button-css/src/tokens.json', 'utf-8');

  let componentTokensJSON = await getCommunityTokens();

  const tokensSchema = designTokenMapToList(componentTokensJSON);

  let tokens: StyleDictionaryDesignToken[] = JSON.parse(json);
  console.log(`${tokens.length} tokens found`);
  const result = tokens;
  // .filter(filterTokenStartsWith('utrecht.button'));
  // .filter(({ path }) => !path.includes('danger') && !path.includes('warning') && !path.includes('ready'));

  let colorPairs = getColorPairs(tokensSchema, result);

  console.log(`${colorPairs.length} possible color pairs found for all components`);

  console.log(
    `${
      colorPairs.filter(({ foregroundColor, backgroundColor }) => foregroundColor && backgroundColor).length
    } defined color pairs found in the theme`,
  );

  // eslint-disable-next-line no-unused-vars
  let contrastingColorPairs = colorPairs.map((pair) => {
    //convert font-size string to number
    const parsedForegroundColor = parseColor(pair.foregroundColor);
    const parsedBackgroundColor = parseColor(pair.backgroundColor);

    return {
      contrast:
        parsedForegroundColor && parsedBackgroundColor
          ? Color(pair.foregroundColor).contrast(Color(pair.backgroundColor))
          : NaN,
      ...pair,
    };
  });

  const insufficientPairs = contrastingColorPairs.filter(
    ({ contrast }) => typeof contrast === 'number' && contrast < 4.5,
  );

  console.log(`${insufficientPairs.length} color pairs in the theme have insufficient color contrast`);

  insufficientPairs.forEach(({ foreground, background, contrast }) => {
    console.log(`${foreground} vs ${background}: ${contrast}`);
  });

  // console.log(JSON.stringify(colorPairs, null, 2));
};

init();
