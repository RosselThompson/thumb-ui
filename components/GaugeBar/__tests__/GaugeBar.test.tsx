import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { GaugeBar } from '../GaugeBar';
import { getPercentage } from 'utils/Percentage';

const positiveTest = 23;
const negativeTest = 36;
const [positivePercentage, negativePercentage] = getPercentage(
  positiveTest,
  negativeTest
);

describe('Test GaugeBar component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<GaugeBar positive={positiveTest} negative={negativeTest} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with positive & negative prop', () => {
    const { getByText } = render(
      <GaugeBar positive={positiveTest} negative={negativeTest} />
    );
    expect(getByText(positivePercentage)).toBeInTheDocument();
    expect(getByText(negativePercentage)).toBeInTheDocument();
  });
});
