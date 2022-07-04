import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown } from '../Dropdown';
import { IDropdownProps } from '../../../types/Interfaces/Dropdown/IDropdown';

const MetaObject: Meta = {
  title: 'Controls/Dropdown',
  component: Dropdown,
};

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: [
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
  ],
};

export default MetaObject;
