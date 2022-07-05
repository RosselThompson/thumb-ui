import { Sizes } from 'types/Types/Sizes';

export const getViewportSize = (width: number): Sizes => {
  if (width < 723) return 'sm';
  if (width < 1439) return 'md';
  if (width >= 1440) return 'lg';
  return 'sm';
};
