export const parseFontFamily = (fontFamily: string): string[] =>
  fontFamily.split(',').map((str) => str.trim().replace(/^"(.+)"$|^'(.+)'$/, '$1$2'));
