import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

const fieldsTest = [
  { value: 'option1', label: 'Option1' },
  { value: 'option2', label: 'Option2' },
];
const onChangeTest = jest.fn();

describe('Test Dropdown component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Dropdown fields={fieldsTest} onChange={onChangeTest} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with field prop', () => {
    const { getByText } = render(
      <Dropdown fields={fieldsTest} onChange={onChangeTest} />
    );
    expect(getByText(fieldsTest[0].label)).toBeInTheDocument();
  });
});
