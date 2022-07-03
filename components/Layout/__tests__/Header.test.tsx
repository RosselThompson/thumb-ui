import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '../Header/Header';

describe('Test Header component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Header />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Pope Francis?')).toBeTruthy();
  });
});
