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

export interface DesignTokenMetadata {
  $extensions?: KnownExtensions & { [index: string]: any };
}

/**
 * Object used to define a design token in a Style Dictionary JSON file.
 */
export interface LegacyDesignTokenDeclaration {
  value?: DesignTokenValue;
}

/**
 * Object used to define a design token in a JSON file that folows the Design Tokens Format.
 * @see https://tr.designtokens.org/format/
 */
export interface StandardDesignTokenDeclaration {
  $value?: DesignTokenValue;
}

export type DesignTokenDeclaration = StandardDesignTokenDeclaration | LegacyDesignTokenDeclaration;

export interface DesignToken {
  type?: string;
  value: DesignTokenValue;
  filePath: string;
  isSource: boolean;
  original: object;
  name: string;
  attributes: {
    category: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
  };
  path: string[];
  $extensions?: KnownExtensions & { [index: string]: any };
}

export interface DesignTokenMap {
  [index: string]: DesignToken;
}
export interface DesignTokenTree {
  [index: string]: DesignToken | DesignTokenTree;
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
