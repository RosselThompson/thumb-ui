import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BannerBottom } from '../BannerBottom/BannerBottom';

describe('Test Banner Bottom component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<BannerBottom />);
    expect(spy).not.toHaveBeenCalled();
  });
});
