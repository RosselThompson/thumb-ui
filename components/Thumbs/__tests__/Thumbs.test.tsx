import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Thumbs } from '../Thumbs';

const onClickTest = jest.fn();

describe('Test Content component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Thumbs type="up" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with type up prop', () => {
    const { getByRole } = render(<Thumbs type="up" />);
    expect(getByRole('img')).toHaveAttribute('alt', 'thumbs_up');
  });

  it('should render component with type down prop', () => {
    const { getByRole } = render(<Thumbs type="down" />);
    expect(getByRole('img')).toHaveAttribute('alt', 'thumbs_down');
  });

  it('should render component with isButton prop', () => {
    const { getByTestId } = render(<Thumbs type="up" isButton />);
    expect(getByTestId('test-thumbs')).toHaveClass('thumbs__button');
  });

  it('should render component with isSelected prop', () => {
    const { getByTestId } = render(<Thumbs type="up" isButton isSelected />);
    expect(getByTestId('test-thumbs')).toHaveClass('thumbs__button__selected');
  });

  it('should render component with onClick prop', () => {
    const { getByTestId } = render(
      <Thumbs type="up" isButton isSelected onClick={onClickTest} />
    );
    fireEvent.click(getByTestId('test-thumbs'));
    expect(onClickTest).toHaveBeenCalled();
  });
});
