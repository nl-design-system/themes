import { Button, Code, ColorSample, Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import {
  calculateContrastRequirement,
  getColorContrast,
} from '@nl-design-system-unstable/tokens-lib/dist/contrast-checker/check-colors';
import './ColorSampleList.css';
import { DesignToken } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { Fragment } from 'react';
import { ColorContrastCanvasElement } from './example-rendering.mjs';

ColorContrastCanvasElement.define();

export const StorybookIsolation = ({ children }) => <div className="sb-unstyled">{children}</div>;

interface ColorSampleListProps {
  tokens: DesignToken[];
  ordered?: boolean;
}

export const ColorSampleList = ({ tokens, ordered }: ColorSampleListProps) => {
  console.log(tokens);
  const items = Object.values(tokens).map((token, index) => (
    <li
      key={index}
      className="color-sample-list__item"
      style={{
        display: 'inline-block',
      }}
    >
      <button className="color-sample-list__button" onClick={() => console.log(123)}>
        <ColorSample color={token['$value']} />
      </button>
    </li>
  ));
  const listProps = {
    className: 'color-sample-list',
    role: 'list',
    style: {},
  };
  return ordered ? <ol {...listProps}>{items}</ol> : <ul {...listProps}>{items}</ul>;
};

export const ColorSampleGrid = ({ children }) => {
  return (
    <table className="color-sample-grid">
      <thead>
        <tr>
          <th></th>
          <th colSpan={2}>Background</th>
          <th colSpan={3}>Interactive components</th>
          <th colSpan={3}>Borders and separators</th>
          <th colSpan={2}>Solid colors</th>
          <th colSpan={2}>Accessible text</th>
        </tr>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export const ColorSampleGridRow = ({ name, tokens }) => {
  const items = Object.values(tokens).map((token, index) => (
    <td key={index} className="color-sample-grid_cell">
      <button className="color-sample-button" onClick={() => console.log(123)}>
        <ColorSample color={token['$value']} />
      </button>
    </td>
  ));
  const listProps = {
    role: 'list',
    style: {},
  };
  return (
    <tr className="color-sample-grid__row" {...listProps}>
      <th>{name}</th>
      {items}
      <th>
        <Button appearance="subtle">Wijzigen</Button>
      </th>
    </tr>
  );
};

export const ColorContrastTable = ({ tokens }) => {
  const map = [
    { type: 'background', vs: 11 },
    { type: 'background', vs: 12 },
    { type: 'inactive', vs: 1 },
    { type: 'inactive', vs: 1 },
    { type: 'inactive', vs: 1 },
    { type: 'border', vs: 1 },
    { type: 'border', vs: 1 },
    { type: 'border', vs: 1 },
    { type: 'solid', vs: 1 },
    { type: 'solid', vs: 1 },
    { type: 'text', vs: 1 },
    { type: 'text', vs: 1 },
  ];
  const tokensArray = Object.values(tokens);
  const pairs = tokensArray
    .map((token, index) => {
      const data = map[index];
      const contrastToken = tokensArray[data.vs - 1];
      let pair = [token['$value'], contrastToken['$value']];

      if (['border', 'solid', 'text'].includes(data.type)) {
        pair.reverse();
      }

      return {
        foreground: '',
        background: '',
        fontSize: 16,
        foregroundColor: pair[1],
        backgroundColor: pair[0],
        type: true ? 'functional' : 'non-functional',
      };
    })
    .map(getColorContrast)
    .map((x) => ({
      ...x,
      aaaContrast: calculateContrastRequirement('', '', x.fontSize, 'AAA', false),
      aaContrast: calculateContrastRequirement('', '', x.fontSize, 'AA', false),
      aaa: x.contrast >= calculateContrastRequirement('', '', x.fontSize, 'AAA', false),
      aa: x.contrast >= calculateContrastRequirement('', '', x.fontSize, 'AA', false),
    }));
  console.log(pairs);
  return (
    <table className="color-contrast-table">
      <thead>
        <tr>
          <th>name</th>
          <th>color</th>
          <th>contrast</th>
          <th>result</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(tokens).map((token, index) => (
          <tr key={index}>
            <th>{token['name']}</th>
            <td>
              <button className="color-sample-button" onClick={() => console.log(123)}>
                <ColorSample color={token['$value']} />
              </button>
            </td>
            <td>{pairs[index].contrast.toPrecision(2)}</td>
            <td>
              <details>
                <summary>{pairs[index].aaa ? '🥇 AAA' : pairs[index].aa ? '👍 AA' : '🔴 FAIL'}</summary>
                <dl>
                  <div>
                    <dt>Voorgrond:</dt>
                    <dd>
                      <ColorSample color={pairs[index].foregroundColor} />
                      <Code>{String(pairs[index].foregroundColor)}</Code>
                    </dd>
                  </div>
                  <div>
                    <dt>Achtergrond:</dt>
                    <dd>
                      <ColorSample color={pairs[index].backgroundColor} />
                      <Code>{String(pairs[index].backgroundColor)}</Code>
                    </dd>
                  </div>
                </dl>
                <nldesignsystem-example-rendering
                  label="voorbeeldtekst in verschillende font-sizes groter dan 18.5px, met vette tekst"
                  style={{ '--utrecht-paragraph-font-size': '16px' }}
                >
                  <Paragraph>
                    16px: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Paragraph>
                </nldesignsystem-example-rendering>
              </details>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface ColorSamplePageProps {
  scales: {
    id: string;
    label: string;
    tokens: DesignToken[];
  }[];
}

export const ColorSamplePage = ({ scales }: ColorSamplePageProps) => {
  return (
    <StorybookIsolation>
      <ColorSampleGrid>
        {scales.map(({ id, label, tokens }) => (
          <ColorSampleGridRow key={id} name={label} tokens={tokens} />
        ))}
      </ColorSampleGrid>
      {scales.map(({ id, label, tokens }) => (
        <Fragment key={id}>
          <Heading level={2}>{label}</Heading>
          <ColorSampleList tokens={tokens} />
          <ColorContrastTable tokens={tokens} />
        </Fragment>
      ))}
    </StorybookIsolation>
  );
};
