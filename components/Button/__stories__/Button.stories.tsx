import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from 'components/Button/Button';
import { IButton } from 'types/Interfaces/Button/IButton';

const MetaObject: Meta = {
  title: 'Controls/Button',
  component: Button,
};

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Vote Now',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Vote Now',
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Vote Now',
  isLoading: true,
};

export default MetaObject;
