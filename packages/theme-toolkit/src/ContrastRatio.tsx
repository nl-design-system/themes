/**
 * @license EUPL-1.2
 * Copyright (c) 2024 NL Design System Community
 */

import { Code, ColorSample, NumberData } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import './ContrastRatio.module.css';

export interface ContrastRatioProps {
  backgroundColor: string;
  color: string;
  contrastRatio: number;
}

export const ContrastRatio = ({ backgroundColor, color, contrastRatio }: ContrastRatioProps) => (
  <dl className="nlds-contrast-ratio">
    <div className="nlds-contrast-ratio__result">
      <dt className="nlds-contrast-ratio__result-key">Contrast ratio:</dt>
      <dd className="nlds-contrast-ratio__result-value">
        <NumberData>
          {new Intl.NumberFormat('nl', { maximumSignificantDigits: 3, roundingMode: 'floor' }).format(contrastRatio)} ÷
          1
        </NumberData>
      </dd>
    </div>
    <div className={clsx('nlds-contrast-ratio__sample', 'nlds-contrast-ratio__sample--background-color')}>
      <dt className="nlds-contrast-ratio__sample-key">Achtergrond:</dt>
      <dd className="nlds-contrast-ratio__sample-value">
        <ColorSample
          className="nlds-contrast-ratio__color-sample"
          color={backgroundColor}
          role="img"
          aria-label={`voorbeeld van: ${backgroundColor}`}
        />{' '}
        <Code>{backgroundColor}</Code>
      </dd>
    </div>
    <div className={clsx('nlds-contrast-ratio__sample', 'nlds-contrast-ratio__sample--color')}>
      <dt className="nlds-contrast-ratio__sample-key">Voorgrond:</dt>
      <dd className="nlds-contrast-ratio__sample-value">
        <ColorSample
          className="nlds-contrast-ratio__color-sample"
          color={color}
          role="img"
          aria-label={`voorbeeld van: ${backgroundColor}`}
        />{' '}
        <Code>{color}</Code>
      </dd>
    </div>
  </dl>
);
