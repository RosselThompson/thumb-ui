import { Story, Meta } from '@storybook/react/types-6-0';
import { Card } from '../Card';
import { ICardProps } from '../../../types/Interfaces/Card/ICard';

const MetaObject: Meta = {
  title: 'Container/Card',
  component: Card,
};

const mock = {
  id: 1,
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
};

const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = mock;

export const Voted = Template.bind({});
Voted.args = {
  ...mock,
  isVotePosted: true,
  onClick: () => {
    return undefined;
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...mock,
  isLoading: true,
};

export const TabletList = Template.bind({});
TabletList.args = {
  ...mock,
  design: 'list',
  size: 'md',
};

export const TabletGrid = Template.bind({});
TabletGrid.args = {
  ...mock,
  design: 'grid',
  size: 'md',
};

export const DesktopList = Template.bind({});
DesktopList.args = {
  ...mock,
  design: 'list',
  size: 'lg',
};

export const DesktopGrid = Template.bind({});
DesktopGrid.args = {
  ...mock,
  design: 'grid',
  size: 'lg',
};

export default MetaObject;
