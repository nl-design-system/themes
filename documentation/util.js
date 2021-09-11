export const isToken = (arg) =>
  !!arg && typeof arg === 'object' && typeof Object.hasOwnProperty.call(arg, 'value') && !!arg.value;

export const listColors = (arg) => {
  let array = isToken(arg) ? [arg] : arg ? Object.values(arg) : [];
  console.log(
    arg,
    isToken(arg),
    array.map((color) => color.value),
  );
  return array.map((color) => color.value);
};
