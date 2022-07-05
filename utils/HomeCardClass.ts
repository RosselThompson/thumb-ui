import { DesignType } from 'types/Types/Design';
import { Sizes } from 'types/Types/Sizes';

export const getHomeCardsClassName = (
  design: DesignType,
  size: Sizes
): string => {
  if (design === 'grid' && size === 'md') return `home__cards-tablet-grid`;
  if (design === 'list' && size === 'md') return `home__cards-tablet-list`;
  if (design === 'grid' && size === 'lg') return `home__cards-desktop-grid`;
  if (design === 'list' && size === 'lg') return `home__cards-desktop-list`;

  return 'home__cards-grid';
};
