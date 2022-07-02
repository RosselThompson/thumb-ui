import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Content } from '../Content/Content';

const testChildren = <p>Test</p>;

describe('Test Content component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Content />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with children prop', () => {
    const { getByText } = render(<Content>{testChildren}</Content>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
