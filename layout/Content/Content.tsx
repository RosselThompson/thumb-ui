import { IContent } from '../../types/Interfaces/Layout/IContent';
import BannerBottom from './BannerBottom/BannerBottom';
import BannerTop from './BannerTop/BannerTop';

const Content: React.FC<IContent> = (props): JSX.Element => {
  const { children } = props;
  return (
    <>
      <BannerTop />
      {children}
      <BannerBottom />
    </>
  );
};

export default Content;
