import { Story, Meta } from '@storybook/react/types-6-0';
import { GaugeBar } from '../GaugeBar';
import { IGaugeBarProps } from 'types/Interfaces/GaugeBar/IGaugeBar';

const MetaObject: Meta = {
  title: 'Controls/GaugeBar',
  component: GaugeBar,
};

const Template: Story<IGaugeBarProps> = (args) => <GaugeBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  positive: 23,
  negative: 36,
};

export default MetaObject;
