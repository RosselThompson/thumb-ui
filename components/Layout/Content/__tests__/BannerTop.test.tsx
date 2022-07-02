import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BannerTop } from '../BannerTop/BannerTop';

describe('Test Banner Top component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<BannerTop />);
    expect(spy).not.toHaveBeenCalled();
  });
});
