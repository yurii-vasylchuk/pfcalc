import {componentWrapperDecorator, Meta, Story} from '@storybook/angular';
import {GaugeComponent} from './gauge.component';

export default {
  component: GaugeComponent,
  decorators: [
    componentWrapperDecorator(story => `
    <div style="width: 200px; height: 200px;">
      ${story}
    </div>
    `),
  ],
  title: 'GaugeComponent',
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  animationDuration: 3,
  title: 'P',
  subtitle: null,
  titleShift: 0,
  subtitleShift: 0,
  titleFontSize: 35,
  subtitleFontSize: 20,
  values: [{
    strokeWidth: 10,
    bgStrokeColor: 'rgba(255, 0, 0, .5)',
    circles: [{
      value: 50,
      maxValue: 100,
      color: 'rgba(200,0,0)',
    }, {
      value: 60,
      maxValue: 100,
      color: 'rgba(220,0,0)',
      blink: true,
    }],
  }, {
    strokeWidth: 15,
    bgStrokeColor: 'rgba(0, 255, 0, .5)',
    circles: [{
      value: 50,
      maxValue: 200,
      color: 'rgba(0,200,0)',
    }, {
      value: 60,
      maxValue: 200,
      color: 'rgba(0,220,0)',
      blink: true,
    }],
  }],
};
