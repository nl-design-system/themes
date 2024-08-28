import cloneDeepWith from 'lodash.clonedeepwith';
import isPlainObject from 'lodash.isplainobject';
import mapValues from 'lodash.mapvalues';
import omitBy from 'lodash.omitby';

export interface BoxShadowValue {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  type: string;
}

export interface KnownExtensions {
  'nl.nldesignsystem.css.property'?: {
    syntax: string;
    inherits: boolean;
  };
  'nl.nldesignsystem.deprecated'?: boolean;
  'nl.nldesignsystem.figma-supported'?: boolean;
  'nl.nldesignsystem.hidden'?: boolean;
  'nl.nldesignsystem.redirect'?: string;
}

export type DesignTokenValue = string | number | BoxShadowValue;

/**
 * @see https://design-tokens.github.io/community-group/format/#extensions
 */
export interface DesignTokenExtensions {
  [index: string]: any;
}

export interface DesignTokenMetadata {
  $extensions: DesignTokenExtensions & KnownExtensions;
}

/**
 * Object used to define a design token in a Style Dictionary JSON file.
 */
export interface LegacyDesignTokenDeclaration {
  value: DesignTokenValue;
}

/**
 * https://design-tokens.github.io/community-group/format/#types
 */
export type DesignTokenType =
  // https://design-tokens.github.io/community-group/format/#color
  | 'color'
  // https://design-tokens.github.io/community-group/format/#dimension
  | 'dimension'
  // https://design-tokens.github.io/community-group/format/#font-family
  | 'fontFamily'
  // https://design-tokens.github.io/community-group/format/#font-weight
  | 'fontWeight'
  // https://design-tokens.github.io/community-group/format/#duration
  | 'duration'
  // https://design-tokens.github.io/community-group/format/#cubic-bezier
  | 'cubicBezier'
  // https://design-tokens.github.io/community-group/format/#number
  | 'number'
  | string;

/**
 * Object used to define a design token in a JSON file that folows the Design Tokens Format.
 * @see https://tr.designtokens.org/format/
 */
export interface StandardDesignTokenDeclaration {
  /**
   * https://design-tokens.github.io/community-group/format/#name-and-value
   */
  $value: DesignTokenValue;

  /**
   * https://design-tokens.github.io/community-group/format/#type-0
   */
  $type?: string;

  /**
   * https://design-tokens.github.io/community-group/format/#description
   */
  $description?: string;

  /**
   * https://design-tokens.github.io/community-group/format/#extensions
   */
  $extensions?: DesignTokenExtensions;
}

export type DesignTokenDeclaration = StandardDesignTokenDeclaration | LegacyDesignTokenDeclaration;

export interface DesignToken extends Partial<DesignTokenMetadata> {
  type?: string;
  value: DesignTokenValue;
}

export interface StyleDictionaryCTIAttributes {
  category: string;
  type?: string;
  item?: string;
  subitem?: string;
  state?: string;
}

export interface StyleDictionaryDesignToken extends DesignToken {
  name: string;
  filePath: string;
  isSource: boolean;
  original: object;
  // The `attributes` property is added by the `attribute/cti` transform
  attributes?: StyleDictionaryCTIAttributes;
  path: string[];
}

export interface DesignTokenMap<T = DesignToken> {
  [index: string]: T;
}

/**
 * https://design-tokens.github.io/community-group/format/#additional-group-properties
 */
export interface StandardDesignTokenGroup<T = DesignToken> {
  [index: string]: T | string | DesignTokenExtensions | undefined;

  /**
   * https://design-tokens.github.io/community-group/format/#type-0
   */
  $type?: string;

  /**
   * https://design-tokens.github.io/community-group/format/#description
   */
  $description?: string;

  /**
   * https://design-tokens.github.io/community-group/format/#extensions
   */
  $extensions?: DesignTokenExtensions;
}

export interface DesignTokenTree<T extends DesignToken = DesignToken> {
  [index: string]: T | DesignTokenTree<T>;
}

export interface ValueTree<T = string> {
  [index: string]: T | ValueTree<T>;
}

export type StyleDictionaryTree = DesignTokenTree<StyleDictionaryDesignToken>;

export interface DesignTokenDefinitionTree {
  [index: string]: DesignTokenMetadata | DesignToken | DesignTokenDefinitionTree;
}

export type DesignTokenNode = DesignToken | DesignTokenDeclaration | DesignTokenMetadata | DesignTokenTree;

export const isHiddenDesignToken = (token: any): boolean =>
  !!token && !!token['$extensions'] && token['$extensions']['nl.nldesignsystem.hidden'] === true;

export const isDesignToken = (value: any): value is DesignTokenDeclaration =>
  Object.prototype.hasOwnProperty.call(value, 'value') || Object.prototype.hasOwnProperty.call(value, '$value');

/**
 * Tests for both the `value` property we currently use,
 * and the `$value` from the Design Tokens Format specification.
 */
export const isDesignTokenDefinition = (value: any): value is DesignToken | DesignTokenMetadata =>
  isDesignToken(value) ||
  Object.prototype.hasOwnProperty.call(value, 'css') ||
  Object.prototype.hasOwnProperty.call(value, '$extensions');

interface EmptyDesignTokenTree {
  [index: string]: EmptyDesignTokenTree | {};
}

export const createEmptyDesignTokenTree = (definition: DesignTokenTree | DesignToken): EmptyDesignTokenTree => {
  const filter = (item: DesignTokenNode): EmptyDesignTokenTree | undefined =>
    isDesignTokenDefinition(item) || isDesignToken(item)
      ? {}
      : isPlainObject(item)
      ? mapValues(
          omitBy(item, (item) => isHiddenDesignToken(item)),
          (item) => cloneDeepWith(item, filter),
        )
      : undefined;
  return cloneDeepWith(definition, filter);
};

export const convertValueTreeToDesignTokenTree = (tree: ValueTree): ValueTree => {
  const filter = (item: ValueTree | DesignTokenValue): EmptyDesignTokenTree | undefined =>
    typeof item === 'string' || typeof item === 'number'
      ? { value: item }
      : isPlainObject(item)
      ? mapValues(
          omitBy(item, () => false),
          (item) => cloneDeepWith(item, filter),
        )
      : undefined;
  return cloneDeepWith(tree, filter);
};
