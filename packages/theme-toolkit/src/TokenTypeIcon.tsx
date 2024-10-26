import {
  IconBold,
  IconBorderOuter,
  IconBorderRadius,
  IconBorderStyle2,
  IconBoxMargin,
  IconBoxPadding,
  IconDimensions,
  IconFileTypography,
  IconLetterSpacing,
  IconLineHeight,
  IconPalette,
  IconSpace,
  IconTextSize,
} from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';

type IconType = typeof IconBold;

const mapping: { [index: string]: IconType } = {
  ['color']: IconPalette,
  ['font-family']: IconFileTypography,
  ['font-weight']: IconBold,
  ['line-height']: IconLineHeight,
  ['font-size']: IconTextSize,
  ['letter-spacing']: IconLetterSpacing,
  ['margin']: IconBoxMargin,
  ['padding']: IconBoxPadding,
  ['border-radius']: IconBorderRadius,
  ['border-width']: IconBorderOuter,
  ['border-style']: IconBorderStyle2,
  ['gap']: IconSpace,
  ['size']: IconDimensions,
};

export interface TokenTypeIconProps {
  type: string;
}

export const TokenTypeIcon = ({ type }: TokenTypeIconProps) => {
  const TablerIcon = Object.prototype.hasOwnProperty.call(mapping, type) ? mapping[type] : null;

  return TablerIcon ? (
    <Icon>
      <TablerIcon />
    </Icon>
  ) : null;
};
