import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Card } from '../Card';
import { ICardProps } from 'types/Interfaces/Card/ICard';
import { getTimeStr } from 'utils/Time';
import { capitalize } from 'utils/Capitalize';
import { getPercentage } from 'utils/Percentage';

const baseCardTestProps: ICardProps = {
  name: 'Kanye West',
  description:
    'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
  category: 'entertainment',
  picture: 'kanye.png',
  lastUpdated: '2020-03-10T23:08:57.892Z',
  votes: {
    positive: 23,
    negative: 36,
  },
  isVotePosted: false,
  isLoading: false,
  onClick: jest.fn(),
};

const votedCardTestProps: ICardProps = {
  ...baseCardTestProps,
  isVotePosted: true,
};

const loadingCardTestProps: ICardProps = {
  ...baseCardTestProps,
  isLoading: true,
};

describe('Test Button component', () => {
  it('should render component without console error', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Card {...baseCardTestProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render component with name prop', () => {
    const { getByText } = render(<Card {...baseCardTestProps} />);
    expect(getByText(baseCardTestProps.name)).toBeInTheDocument();
  });

  it('should render component with description prop', () => {
    const { getByText } = render(<Card {...baseCardTestProps} />);
    expect(getByText(baseCardTestProps.description)).toBeInTheDocument();
  });

  it('should render component with picture prop', () => {
    const { container } = render(<Card {...baseCardTestProps} />);
    expect(container.firstChild).toHaveStyle(
      'backgroundImage: url(/images/people/kanye.png)'
    );
  });

  it('should render component with category & lastupdated prop', () => {
    const { getByText } = render(<Card {...baseCardTestProps} />);
    const categoryLabel = capitalize(baseCardTestProps.category);
    const timestampLabel = getTimeStr(new Date(baseCardTestProps.lastUpdated));
    const label = `${timestampLabel} ${categoryLabel}`;
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render component with votes prop', () => {
    const { getByText } = render(<Card {...baseCardTestProps} />);
    const [positiveValue, negativeValue] = getPercentage(
      baseCardTestProps.votes.positive,
      baseCardTestProps.votes.negative
    );
    expect(getByText(positiveValue)).toBeInTheDocument();
    expect(getByText(negativeValue)).toBeInTheDocument();
  });

  it('should render component with isVotePosted prop', () => {
    const { getByRole } = render(<Card {...votedCardTestProps} />);
    expect(getByRole('button').textContent).toBe('Vote again');
  });

  it('should render component with isLoading prop', () => {
    const { getByTestId } = render(<Card {...loadingCardTestProps} />);
    expect(getByTestId('test-spinner')).toBeInTheDocument();
  });
});
