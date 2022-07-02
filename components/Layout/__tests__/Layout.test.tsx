import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

const testChildren = <p>Test</p>;

describe('Test Layout component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Layout />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with children prop', () => {
    const { getByText } = render(<Layout>{testChildren}</Layout>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
