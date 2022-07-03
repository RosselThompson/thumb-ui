import { Story, Meta } from '@storybook/react/types-6-0';
import { IThumbsProps } from 'types/Interfaces/Thumbs/Thumbs';
import { Thumbs } from '../Thumbs';

const MetaObject: Meta = {
  title: 'Controls/Thumbs',
  component: Thumbs,
};

const Template: Story<IThumbsProps> = (args) => <Thumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'up',
};

export const ThumbUp = Template.bind({});
ThumbUp.args = {
  type: 'up',
};

export const ThumbDown = Template.bind({});
ThumbDown.args = {
  type: 'down',
};

export const Button = Template.bind({});
Button.args = {
  type: 'up',
  isButton: true,
};

export const Selected = Template.bind({});
Selected.args = {
  type: 'up',
  isButton: true,
  isSelected: true,
};

export default MetaObject;
