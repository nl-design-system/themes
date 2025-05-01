import {
  Button,
  Code,
  Heading,
  HeadingGroup,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
import {
  calculateContrastRequirement,
  getColorContrast,
} from '@nl-design-system-unstable/tokens-lib/dist/contrast-checker/check-colors';
import './ColorSampleList.css';
import { DesignToken } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { Fragment, PropsWithChildren } from 'react';
import { ColorContrastCanvasElement } from './example-rendering.mjs';
import { ColorSampleElement } from './color-sample.mjs';
// eslint-disable-next-line no-unused-vars
import React from 'react';

ColorContrastCanvasElement.define();
ColorSampleElement.define();

export const ColorSample = ({ color }: { color: string }) => (
  <nldesignsystem-color-sample color={color}></nldesignsystem-color-sample>
);

export const StorybookIsolation = ({ children }: PropsWithChildren) => <div className="sb-unstyled">{children}</div>;

export const ComponentButton = ({ children }: PropsWithChildren) => (
  <button className="component-button">{children}</button>
);

interface ColorSampleListProps {
  tokens: DesignToken[];
  ordered?: boolean;
}

export const ColorSampleList = ({ tokens, ordered }: ColorSampleListProps) => {
  const items = Object.values(tokens).map((token, index) => (
    <li
      key={index}
      className="color-sample-list__item"
      style={{
        display: 'inline-block',
      }}
    >
      {/* <ComponentButton onClick={() => console.log(123)}> */}
      <ColorSample color={String(token['$value'])} />
      {/* </ComponentButton> */}
    </li>
  ));
  const listProps = {
    className: 'color-sample-list',
    role: 'list',
    style: {},
  };
  return ordered ? <ol {...listProps}>{items}</ol> : <ul {...listProps}>{items}</ul>;
};

export const ColorSampleGrid = ({ children }: PropsWithChildren) => {
  return (
    <Table className="color-sample-grid">
      <TableHeader>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell colSpan={2}>Background</TableHeaderCell>
          <TableHeaderCell colSpan={3}>Interactive components</TableHeaderCell>
          <TableHeaderCell colSpan={3}>Borders and separators</TableHeaderCell>
          <TableHeaderCell colSpan={2}>Solid colors</TableHeaderCell>
          <TableHeaderCell colSpan={2}>Accessible text</TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>1</TableHeaderCell>
          <TableHeaderCell>2</TableHeaderCell>
          <TableHeaderCell>3</TableHeaderCell>
          <TableHeaderCell>4</TableHeaderCell>
          <TableHeaderCell>5</TableHeaderCell>
          <TableHeaderCell>6</TableHeaderCell>
          <TableHeaderCell>7</TableHeaderCell>
          <TableHeaderCell>8</TableHeaderCell>
          <TableHeaderCell>9</TableHeaderCell>
          <TableHeaderCell>10</TableHeaderCell>
          <TableHeaderCell>11</TableHeaderCell>
          <TableHeaderCell>12</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export const ColorSampleGridRow = ({ name, tokens }: { name: string; tokens: DesignToken[] }) => {
  const items = Object.values(tokens).map((token, index) => (
    <td key={index} className="color-sample-grid_cell">
      <ComponentButton>
        <ColorSample color={String(token['$value'])} />
      </ComponentButton>
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

export const ColorContrastTable = ({ tokens }: DesignToken[]) => {
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
        type: ['border', 'inactive'].includes(data.type) ? 'non-functional' : 'functional',
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
  return (
    <>
      <Table className="color-contrast-table">
        <TableHeader>
          <TableRow>
            <TableHeader>name</TableHeader>
            <TableHeader>color</TableHeader>
            <TableHeader>contrast</TableHeader>
            <TableHeader>result</TableHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.values(tokens).map((token, index) => (
            <TableRow key={index}>
              <TableHeader>{token['name']}</TableHeader>
              <TableCell>
                <ComponentButton onClick={() => console.log(123)}>
                  <ColorSample color={token['$value']} />
                </ComponentButton>
              </TableCell>
              <TableCell>{pairs[index].contrast.toPrecision(2)}</TableCell>
              <TableCell>
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
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                  </nldesignsystem-example-rendering>
                </details>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {Object.values(tokens).map((token, index) => (
        <section key={index}>
          <HeadingGroup>
            <Heading level={3}>{token['name']}</Heading>
            {index === 0 ? <Paragraph>Shade 1 is bedoeld als</Paragraph> : null}
          </HeadingGroup>
          {index === 0 ? <Paragraph>Shade 1 is bedoeld als</Paragraph> : null}
        </section>
      ))}
    </>
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
