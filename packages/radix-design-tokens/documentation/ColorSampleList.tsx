import { Button, ColorSample, Heading } from '@utrecht/component-library-react/dist/css-module';
import {
  calculateContrastRequirement,
  getColorContrast,
} from '@nl-design-system-unstable/tokens-lib/dist/contrast-checker/check-colors';
import './ColorSampleList.css';
import { DesignToken } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { Fragment } from 'react';

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
      return {
        foreground: '',
        background: '',
        fontSize: 16,
        foregroundColor: token['$value'],
        backgroundColor: contrastToken['$value'],
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
            <td>{pairs[index].aaa ? '🥇 AAA' : pairs[index].aa ? '👍 AA' : '🔴 FAIL'}</td>
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
    <div className="sb-unstyled">
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
    </div>
  );
};
