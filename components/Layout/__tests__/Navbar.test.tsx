import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Navbar } from '../Navbar/Navbar';

describe('Test Navbar component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Navbar />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with title', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Rule of thumb.')).toBeTruthy();
  });
});
