/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';
import { CopyCode } from './CopyCode';
import {
  cssVariable,
  formatDeltaE,
  getColors,
  getColorName,
  getColorGroupName,
  styleDictionaryRef,
  isColorOrUnknown,
} from '@nl-design-system-unstable/tokens-lib/src/util';
import { ColorTokenMatch, parseColor } from '@nl-design-system-unstable/tokens-lib/src/color-util';
// eslint-disable-next-line no-unused-vars
import {
  type StyleDictionaryDesignToken,
  type DesignTokenMap,
  type DesignToken,
  getTokenValue,
} from '@nl-design-system-unstable/tokens-lib/src/design-tokens';

export const ColorRow = ({
  name,
  token,
  colorMatch,
}: {
  name: string;
  token: StyleDictionaryDesignToken;
  colorMatch?: ColorTokenMatch;
}) => (
  <ColorItem
    title={name}
    subtitle={
      (
        <>
          <CopyCode code={cssVariable(token)}></CopyCode>
          <br />
          <CopyCode code={styleDictionaryRef(token)}></CopyCode>
          {typeof colorMatch?.deltaE === 'number' ? <p>{formatDeltaE(colorMatch.deltaE)}</p> : ''}
        </>
      ) as unknown as string /* ColorItem['subtitle'] is typed as string, but it actually supports ReactNode */
    }
    colors={[String(getTokenValue(token))]}
  />
);

export interface ColorGroupRowProps {
  name: string;
  tokens: DesignToken[];
}

export const ColorGroupRow = ({ name, tokens }: ColorGroupRowProps) => (
  <ColorItem key={name} title={name} subtitle="" colors={tokens.map((token) => String(getTokenValue(token)))} />
);

export interface ColorTableProps<T extends StyleDictionaryDesignToken = StyleDictionaryDesignToken> {
  tokens: DesignTokenMap<T>;
}

export const ColorTable = <T extends StyleDictionaryDesignToken = StyleDictionaryDesignToken>({
  tokens,
}: ColorTableProps<T>) => {
  const { grouped, nonGrouped } = getColors<StyleDictionaryDesignToken>(tokens);

  return (
    <ColorPalette>
      {grouped
        // .filter((group) => isColorOrUnknown(group))
        .map((tokens, index) => {
          const colorTokens = tokens.filter(isColorOrUnknown);
          if (colorTokens.length >= 1 && colorTokens[0]) {
            const name = getColorGroupName(colorTokens[0]) || '';
            return <ColorGroupRow key={name || index} name={name} tokens={colorTokens} />;
          } else {
            return null;
          }
        })}
      {nonGrouped.map((token) => {
        const name = getColorName(token) || '';
        return <ColorRow key={token.path.join('-')} name={name} token={token} />;
      })}
    </ColorPalette>
  );
};

export interface ColorResultsProps {
  matches: ColorTokenMatch[];
}

export const ColorResults = ({ matches }: ColorResultsProps) => {
  return (
    <ColorPalette>
      {matches.map((match) => {
        const { token } = match;
        const name = getColorName(token) || '';
        return <ColorRow key={token.path.join('-')} name={name} token={token} colorMatch={match} />;
      })}
    </ColorPalette>
  );
};
export interface ColorCardProps {
  color: string;
}

export const ColorCard = ({ color }: ColorCardProps) => {
  const parsed = parseColor(color);

  return parsed ? (
    <div>
      <div
        style={{
          display: 'inline-block',
          width: '50px',
          height: '50px',
          backgroundColor: color,
        }}
      ></div>
    </div>
  ) : (
    <></>
  );
};
