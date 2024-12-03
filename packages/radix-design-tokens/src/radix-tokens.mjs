import * as scales from '@radix-ui/colors';

// Convert a color name / color string pair to a token object
const entryToToken = ([name, $value]) => ({
  name,
  $value,
});

const tokens = Object.entries(scales)
  .filter(([name]) => name !== 'default')
  .filter(([name]) =>
    // Exclude scales that have the suffix "A", "P3" or "P3A".
    // Filter out those scales by only passing through completely lowercase names
    /^[a-z]+$/.test(name),
  )
  .map(([name, colors]) => [name, Object.entries(colors).map(entryToToken)])

  .reduce(
    (obj, [name, tokens]) => ({
      ...obj,
      [name]: tokens.reduce(
        (obj, token) => ({
          ...obj,
          [token.name]: token,
        }),
        {},
      ),
    }),
    {},
  );
export default tokens;
