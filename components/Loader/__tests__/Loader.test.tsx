import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Test Loader component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Loader theme="light" size="sm" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with size prop', () => {
    const { container } = render(<Loader theme="light" size="md" />);
    expect(container.firstChild).toHaveClass('spinner__md');
  });

  it('should render component with theme prop', () => {
    const { container } = render(<Loader theme="dark" size="md" />);
    expect(container.firstChild).toHaveClass('spinner__white');
  });
});
