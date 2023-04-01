import {componentWrapperDecorator, Meta, Story} from '@storybook/angular';
import {GaugeComponent} from './gauge.component';
import {IGaugeTrackConf} from './gauge-component.interfaces';

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
  argTypes: {
    animationDuration: {type: 'number'},
    title: {type: 'string'},
    subtitle: {type: 'string'},
    titleShift: {type: 'number'},
    subtitleShift: {type: 'number'},
    titleFontSize: {type: 'number'},
    subtitleFontSize: {type: 'number'},
  }
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
    trackId: 1,
    bgStrokeColor: 'rgba(255, 0, 0, .5)',
    circles: [{
      value: 50,
      circleId:11,
      maxValue: 100,
      color: 'rgba(200,0,0)',
    }, {
      value: 60,
      circleId:12,
      maxValue: 100,
      color: 'rgba(220,0,0)',
      blink: true,
    }],
  }, {
    strokeWidth: 15,
    trackId: 2,
    bgStrokeColor: 'rgba(0, 255, 0, .5)',
    circles: [{
      value: 50,
      circleId:21,
      maxValue: 200,
      color: 'rgba(0,200,0)',
    }, {
      value: 60,
      circleId:22,
      maxValue: 200,
      color: 'rgba(0,220,0)',
      blink: true,
    }],
  }] as IGaugeTrackConf[],
};
