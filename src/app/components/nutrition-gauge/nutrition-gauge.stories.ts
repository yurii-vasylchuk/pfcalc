import {componentWrapperDecorator, Meta, Story} from '@storybook/angular';
import {NutritionGaugeComponent} from './nutrition-gauge.component';

export default {
  component: NutritionGaugeComponent,
  decorators: [
    componentWrapperDecorator(story => `
    <div style="width: 100px; height: 300px;">
      ${story}
    </div>
    `),
  ],
  title: 'NutritionGaugeComponent',
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  value: 30,
  addingValue: 0,
  aim: 120,
  title: 'Protein',
  strokeWidth: 15,
  mainColor: '#ff4081',
  bgColor: '#bf3060',
};
