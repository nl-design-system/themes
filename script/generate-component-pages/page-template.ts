import { DesignSystemComponent, ComponentImplementation } from '@nl-design-system/component-index';

export const pageTemplate = (
  { id, name }: DesignSystemComponent,
  { designTokenPrefixes, organisation, storyTemplate, package: pkg, implementation, story }: ComponentImplementation,
) => `import React from 'react';
import { LinkBadge } from '../components/Badge';
import { getTokens, getDesignTokenArgs } from '../components/designTokenUtils';
import themes from '@nl-design-system-unstable/theme-switcher/dist/themes.json';
import Template, {argTypes, defaultArgs, exampleArgs} from "${storyTemplate}";
import designTokens from '@utrecht/design-tokens/dist/tokens.js';
import { ComponentPage } from '../components/ComponentPage';
import get from 'lodash.get';

const designTokenPrefixes = ${designTokenPrefixes ? `[${designTokenPrefixes?.map((p) => `"${p}"`)}]` : `[]`};
const tokens = designTokenPrefixes.length ? designTokenPrefixes.flatMap(prefix => getTokens(get(designTokens, prefix))) : getTokens(designTokens.utrecht["${id}"]);

const componentArgTypes = argTypes ? Object.entries(argTypes).reduce((types, [key, value]) => {
  return { ...types, [key]: { ...value, table: { ...value.table, category: 'playground' } } };
}, {}) : {};

export default {
  id: "${id}",
  title: "Themes/Components/${name}",
  argTypes: {
    ...componentArgTypes,
    ...getDesignTokenArgs(tokens),
    theme: {
      description: 'Type',
      control: 'select',
      options: themes.map(({ className }) => className),
      table: { category: 'playground' },
    },
  },
  args: defaultArgs,
  component: Template,
  decorators: [
    (Story, { args: { theme, ...args } }) => {
      const style = Object.keys(args)
        .filter((k) => /^--/.test(k))
        .reduce((acc, k) => ({ ...acc, [k]: args[k] }), {});
      return (
        <div className={theme} style={style}>
          {Story()}
        </div>
      );
    },
  ],
  parameters: {
    componentSubtitle: 'Contributed by ${organisation}',
    docs: {
      page: () => (
        <ComponentPage>
          <LinkBadge
            href="https://www.npmjs.com/package/${pkg}"
            label="npm"
            message="${pkg}"
            logo="npm"
          />

          <LinkBadge
            href="${implementation}"
            label="github"
            message="GitHub link for ${name} from ${organisation}"
            logo="github"
          />

          <LinkBadge
            href="${story}"
            label="storybook"
            message="utrecht/css-button"
            logo="storybook"
          />
        </ComponentPage>
      ),
    },
  },
};

export const ${organisation.replace(/\s/, '')} = Template.bind({});

${organisation.replace(/\s/, '')}.args = {
  ...exampleArgs,
  theme: 'utrecht-theme',
  ...tokens.reduce((styles, token) => {
    return { ...styles, [token.name]: token.value };
  }, {}),
};
`;

// `import { Meta, Story, ArgsTable, Canvas } from "@storybook/addon-docs";
// import { LinkBadge } from "../components/Badge";
// import { getTokens, getDesignTokenArgs } from "../components/designTokenUtils";
// import themes from "@nl-design-system-unstable/theme-switcher/dist/themes.json";
// import Template, {argTypes, defaultArgs, exampleArgs} from "${storyTemplate}";
// import designTokens from "@utrecht/design-tokens/dist/tokens.js";

// export const tokens = getTokens(designTokens.utrecht["${id}"]);

// export const componentArgTypes = Object.entries(argTypes).reduce((types, [key, value]) => {
//   return {...types, [key]: {...value, table: {...value.table, category: 'playground'}}}
// },{})

// <Meta
//   title="Themes/Components/${name}/${organisation}"
//   argTypes={{
//     ...componentArgTypes,
//     ...getDesignTokenArgs(tokens),
//     theme: {
//       description: 'Type',
//       control: 'select',
//       options: themes.map(({ className }) => className),
//       table: {category: 'playground'}
//     },
//   }}
//   component={Template}
//   decorators={[(Story, {args: {theme, ...args}}) => {
//     const style = Object.keys(args).filter(k => /^--/.test(k)).reduce((acc, k) => ({...acc, [k]: args[k]}), {})
//     return (<div className={theme} style={style}>{Story()}</div>)
//   }]}
// />

// # ${name} component (contributed by ${organisation})

// ${
//   pkg
//     ? `<LinkBadge
//   href="https://www.npmjs.com/package/${pkg}"
//   label="npm"
//   message="${pkg}"
//   logo="npm"
// />

// `
//     : ''
// }<LinkBadge
//   href="${implementation}"
//   label="github"
//   message="GitHub link for ${name} from ${organisation}"
//   logo="github"
// />

// ${
//   story
//     ? `<LinkBadge
//   href="${story}"
//   label="storybook"
//   message="utrecht/css-button"
//   logo="storybook"
// />

// `
//     : ''
// }<Canvas>
//   <Story
//     name="${organisation}"
//     args={{
//       ...exampleArgs,
//       theme: 'utrecht-theme',
//       ...tokens.reduce((styles, token) => {
//         return { ...styles, [token.name]: token.value };
//       }, {}),
//     }}
//   >
//     {Template.bind({})}
//   </Story>
// </Canvas>

// <ArgsTable story="${organisation}" />
// `;
