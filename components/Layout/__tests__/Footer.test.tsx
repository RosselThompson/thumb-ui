import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Footer } from '../Footer/Footer';

describe('Test Footer component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Footer />);
    expect(spy).not.toHaveBeenCalled();
  });
});
