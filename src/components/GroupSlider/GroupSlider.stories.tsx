import type { Meta, StoryFn } from '@storybook/react'

import GroupSlider from './GroupSlider';
import { BrowserRouter } from 'react-router-dom'
import { GroupSliderProps } from './GroupSlider.types'
import Group from '../Group/Group'

const meta = {
  title: 'Components/GroupSlider',
  component: GroupSlider,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof GroupSlider>;

export default meta;

const Template: StoryFn<GroupSliderProps> = (args) => (
  <BrowserRouter>
    <GroupSlider {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  groups: [
    <Group id={1} text={'Football Team'} newMessageCount={25} />,
    <Group id={2} text={'Family'} newMessageCount={3} />,
    <Group id={3} text={'School'} newMessageCount={13} />,
    <Group id={4} text={'Business'} newMessageCount={0} />,
  ]
};
