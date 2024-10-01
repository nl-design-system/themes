import StyleDictionary from 'style-dictionary';
import memfs from '@bundled-es-modules/memfs';
import type { PropsWithChildren, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { ThemeBuilderStepObject } from './steps';
import { DesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens';
import { treeToArray } from '@nl-design-system-unstable/theme-toolkit/dist/ExampleTokensCSS';
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
  basis: DesignTokenTree;
  example?: () => ReactNode;
  allTokens?: boolean;
}

export const ThemeBuilder = ({
  steps,
  theme,
  basis,
  step,
  example,
  children,
  allTokens,
}: PropsWithChildren<ThemeBuilderProps>) => {
  const stepData = steps[step];
  const Example = example || stepData?.example;
  const Description = stepData?.description;

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
          (token.path[1] === 'color' || token.path[1] === 'typography' || token.path[1] === 'size'))
      );
    }).then(({ css }) => {
      setBrandCss(css);
    }, console.error);
  }, [theme]);

  useEffect(() => {
    styleDictionaryConversion(theme, '.step-theme', (token) => {
      return relevantTokenSet.has((token.path || []).join('.'));
    }).then(({ css, json }) => {
      console.log(json);
      setCustomThemeCss(css);
    }, console.error);
  }, [step, theme]);

  return (
    <div className="theme-builder">
      <div className="theme-builder__example basis-theme brand-tokens step-theme">{Example && <Example />}</div>
      <h2>{stepData?.name || `Stap ${step}`}</h2>
      {Description && <Description />}
      <style dangerouslySetInnerHTML={{ __html: basisThemeCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: brandCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: customThemeCss }}></style>
      <details>
        <summary>{relevantTokens.length} tokens up until this step</summary>
        <ul>
          {relevantTokens.map((token, index) => (
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
