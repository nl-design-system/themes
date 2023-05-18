import { parse, convert } from 'pure-color';

const getControl = (syntax) => {
  switch (syntax) {
    case '<color>':
      return 'color';
    default:
      return 'text';
  }
};

const flattenTokens = (nestedTokens, prefix = '') => {
  const flattened = {};

  Object.keys(nestedTokens).forEach((token) => {
    const key = prefix ? [prefix, token].join('.') : token;
    const tokens = nestedTokens[token];

    if (tokens.value || tokens.css) {
      flattened[key] = tokens;
    } else if (typeof tokens === 'object' && tokens !== null && !Array.isArray(tokens)) {
      Object.assign(flattened, flattenTokens(tokens, key));
    }
  });

  return flattened;
};

export const getTokens = (designTokens) => {
  const filteredTokens = Object.values(flattenTokens(designTokens)).filter((token) => token.path && token.value);

  return filteredTokens.map((token) => {
    return {
      name: `--${token.path.join('-')}`,
      value: token.value.includes('hsl') ? convert.hsl.string(parse.hsl(token.value)) : token.value,
      control: token.css && getControl(token.css.syntax),
      syntax: token.css && token.css.syntax,
      path: token.path,
    };
  });
};

export const getDesignTokenArgs = (tokens) => {
  const syntaxTitle = {
    '<color>': 'Color',
    '<number>': 'Number',
    '<length>': 'Length',
    '*': '',
  };

  return tokens.reduce((args, token) => {
    return {
      ...args,
      [token.name]: {
        control: token.control,
        table: {
          category: 'Design Tokens',
          subcategory: token && syntaxTitle[token.syntax || '*'],
          type: {
            summary: token && token.path.join('.'),
          },
        },
      },
    };
  }, {});
};
