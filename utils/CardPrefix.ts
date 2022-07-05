import { DesignType } from 'types/Types/Design';
import { Sizes } from 'types/Types/Sizes';

export const getPrefixClassName = (design: DesignType, size: Sizes) => {
  if (design === 'grid' && size === 'md') return 'card-tablet-grid';
  if (design === 'grid' && size === 'lg') return 'card-desktop-grid';
  if (design === 'list' && size === 'md') return 'card-tablet';
  if (design === 'list' && size === 'lg') return 'card-desktop';
  return 'card';
};
