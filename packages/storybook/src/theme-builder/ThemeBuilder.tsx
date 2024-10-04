import StyleDictionary from 'style-dictionary';
import memfs from '@bundled-es-modules/memfs';
import type { PropsWithChildren, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { ThemeBuilderStepObject } from './steps';
import { DesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens';
import { treeToArray } from '@nl-design-system-unstable/theme-toolkit/dist/ExampleTokensCSS';
import { CustomStory } from '@nl-design-system-unstable/theme-toolkit/dist/CustomStory';
import { merge } from 'lodash';
import './ThemeBuilder.css';
import './property.css';

const styleDictionaryConversion = async (
  tokens,
  selector,
  filterFn = undefined,
): Promise<{ css: string; json: object }> => {
  const { Volume } = memfs;
  const vol = new Volume();
  const sd = new StyleDictionary(
    {
      hooks: {
        filters: {
          'my-filter': filterFn,
        },
      },
      tokens,
      platforms: {
        css: {
          transforms: ['name/kebab'],
          transformGroup: 'css',
          files: [
            {
              destination: 'variables.css',
              format: 'css/variables',
              options: {
                selector,
                outputReferences: true,
              },
              filter: filterFn ? 'my-filter' : undefined,
            },
          ],
        },
        json: {
          transforms: ['name/kebab'],
          transformGroup: 'css',
          files: [
            {
              destination: 'variables.json',
              format: 'json/flat',
              filter: filterFn ? 'my-filter' : undefined,
            },
          ],
        },
      },
    },
    { volume: vol },
  );

  let css = '';
  let json = {};
  const id = Math.round(Math.random() * 1000);
  console.time('Style Dictionary ' + id);
  await sd.buildAllPlatforms();
  console.timeEnd('Style Dictionary ' + id);

  try {
    css = vol.readFileSync('/variables.css').toString('utf-8');
    json = JSON.parse(vol.readFileSync('/variables.json').toString('utf-8'));
  } catch (e) {
    console.error(e);
  }

  return { css, json };
};

export interface ThemeBuilderProps {
  step: number;
  steps: ThemeBuilderStepObject[];
  theme: DesignTokenTree;
  themeExtension?: DesignTokenTree;
  basis: DesignTokenTree;
  example?: () => ReactNode;
  allTokens?: boolean;
}

export const ThemeBuilder = ({
  steps,
  theme,
  themeExtension,
  basis,
  step,
  example,
  children,
  allTokens,
}: PropsWithChildren<ThemeBuilderProps>) => {
  const stepData = steps[step];
  const Example = example || stepData?.example;
  const Description = stepData?.description;

  const currentStepTokens = [...(stepData?.tokens || []), ...(stepData?.commonTokens || [])];

  let previousTokens = steps
    .slice(0, step)
    .reduce((arr, step) => [...arr, ...step.tokens, ...(step.commonTokens || [])], []);

  let relevantTokens = steps
    .slice(0, step + 1)
    .reduce((arr, step) => [...arr, ...step.tokens, ...(step.commonTokens || [])], []);

  if (allTokens) {
    relevantTokens = treeToArray(theme).map((token) => token.path.join('.'));
  }

  const relevantTokenSet = new Set(relevantTokens);

  const [basisTokens] = useState(basis);
  const [basisThemeCss, setBasisThemeCss] = useState('');
  const [brandCss, setBrandCss] = useState('');
  const [customThemeCss, setCustomThemeCss] = useState('');

  useEffect(() => {
    styleDictionaryConversion(basisTokens, '.basis-theme').then(({ css }) => {
      setBasisThemeCss(css);
    }, console.error);
  }, [basisTokens]);

  useEffect(() => {
    styleDictionaryConversion(theme, '.brand-tokens', (token) => {
      return (
        ['voorbeeld', 'groningen', 'rods'].includes(token.path[0]) ||
        (token.path[0] === 'utrecht' && (token.path[1] === 'color' || token.path[1] === 'typography')) ||
        (token.path[0] === 'denhaag' &&
          (token.path[1] === 'color' || token.path[1] === 'typography' || token.path[1] === 'size')) ||
        (token.path[0] === 'ams' && ['border', 'color', 'proportion', 'space', 'text'].includes(token.path[1])) ||
        (token.path[0] === 'rhc' &&
          [
            'border-width',
            'color',
            'font-family',
            'font-weight',
            'space',
            'size',
            'line-height',
            'font-size',
            'border-radius',
          ].includes(token.path[1]))
      );
    }).then(({ css }) => {
      setBrandCss(css);
    }, console.error);
  }, [theme]);

  useEffect(() => {
    styleDictionaryConversion(merge(theme, themeExtension), '.step-theme', (token) => {
      return relevantTokenSet.has((token.path || []).join('.'));
    }).then(({ css, json }) => {
      console.log(json);
      setCustomThemeCss(css);
    }, console.error);
  }, [step, theme, themeExtension]);

  return (
    <div className="theme-builder">
      <CustomStory>
        <div className="theme-builder__example basis-theme brand-tokens step-theme">{Example && <Example />}</div>
      </CustomStory>
      <h2>{stepData?.name || `Stap ${step}`}</h2>
      {Description && <Description />}
      <style dangerouslySetInnerHTML={{ __html: basisThemeCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: brandCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: customThemeCss }}></style>
      <details>
        <summary>{currentStepTokens.length} tokens for this step</summary>
        <ul>
          {currentStepTokens.map((token, index) => (
            <li key={index}>
              <code>{token}</code>
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>{previousTokens.length} tokens before this step</summary>
        <ul>
          {previousTokens.map((token, index) => (
            <li key={index}>
              <code>{token}</code>
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Thema voor stap {step}</summary>
        <pre>{customThemeCss}</pre>
      </details>
      <details>
        <summary>Brand tokens</summary>
        <pre>{brandCss}</pre>
      </details>
      <details>
        <summary>Basis thema</summary>
        <pre>{basisThemeCss}</pre>
      </details>
      {children}
    </div>
  );
};
