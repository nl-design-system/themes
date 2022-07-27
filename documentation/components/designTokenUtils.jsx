export const getTokens = (designTokens) => {
  const filteredTokens = Object.values(designTokens).filter((token) => token.path && token.value);
  const getControl = (syntax) => {
    switch (syntax) {
      case '<color>':
        return 'color';
      default:
        return 'text';
    }
  };

  return filteredTokens.map((token) => ({
    name: `--${token.path.join('-')}`,
    value: token.value,
    control: getControl(token.css.syntax),
    syntax: token.css.syntax,
  }));
};

export const getDesignTokenArgs = (tokens) => {
  return tokens.reduce((args, token) => {
    return {
      ...args,
      [token.name]: {
        control: token.control,
        table: {
          type: {
            summary: token.syntax,
          },
        },
      },
    };
  }, {});
};
