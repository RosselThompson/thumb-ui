export const capitalize = (text: string): string => {
  const first = text.charAt(0);
  const strSliced = text.slice(1, text.length);
  return `${first.toUpperCase()}${strSliced}`;
};
