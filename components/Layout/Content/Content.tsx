import { IContentProps } from 'types/Interfaces/Layout/IContent';
import { BannerBottom } from './BannerBottom/BannerBottom';
import { BannerTop } from './BannerTop/BannerTop';

export const Content: React.FC<IContentProps> = (props): JSX.Element => {
  const { children } = props;
  return (
    <>
      <BannerTop />
      <main role="main">{children}</main>
      <BannerBottom />
      <hr role="separator" />
    </>
  );
};
