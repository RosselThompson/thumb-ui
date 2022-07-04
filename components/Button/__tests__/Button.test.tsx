import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../Button';

const textTest = 'Test Button';
const onClickTest = jest.fn();

describe('Test Button component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Button text={textTest} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with text prop', () => {
    const { getByText } = render(<Button text={textTest} />);
    expect(getByText(textTest)).toBeInTheDocument();
  });

  it('should render component with isDisabled prop', () => {
    const { getByRole } = render(<Button text={textTest} isDisabled />);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  it('should render component with isLoading prop', () => {
    const { getByTestId } = render(<Button text={textTest} isLoading />);
    expect(getByTestId('test-spinner')).toBeInTheDocument();
  });

  it('should render component with onCLick prop', () => {
    const { getByRole } = render(
      <Button text={textTest} onClick={onClickTest} />
    );
    fireEvent.click(getByRole('button'));
    expect(onClickTest).toHaveBeenCalled();
  });
});
