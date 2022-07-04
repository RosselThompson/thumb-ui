export const getImageName = (name: string): string => {
  const elements = name.split('.');
  return elements[0];
};
