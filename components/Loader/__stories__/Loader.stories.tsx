import { Story, Meta } from '@storybook/react/types-6-0';
import { Loader } from 'components/Loader/Loader';
import { ILoaderProps } from 'types/Interfaces/Loader/ILoader';

const MetaObject: Meta = {
  title: 'Controls/Loader',
  component: Loader,
};

const Template: Story<ILoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
  size: 'sm',
};

export const Small = Template.bind({});
Small.args = {
  theme: 'light',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  theme: 'light',
  size: 'md',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  size: 'md',
};

export default MetaObject;
