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
    (Story, { args: { theme, ...args } }, b) => {
      const designTokens = Object.entries(args)
        .filter(([key]) => /^--/.test(key))

      const rootElement = document.documentElement;

      rootElement.classList.add(theme);
      designTokens.forEach(([token, value]) => rootElement.style.setProperty(token, value) )
      return Story();
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
