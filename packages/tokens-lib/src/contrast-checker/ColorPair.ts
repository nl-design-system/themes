import { DesignTokenValue } from '../design-tokens';

export interface ColorPair {
  /** name of the token */
  foreground: string;
  /** color value of the token */
  foregroundColor: DesignTokenValue;
  /** name of the token */
  background: string;
  /** color value of the token */
  backgroundColor: DesignTokenValue;

  /** font-size value of the token group */
  'font-size'?: DesignTokenValue;
  type: 'functional' | 'non-functional' | string;
}
