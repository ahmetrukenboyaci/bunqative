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
    { id: 1, name: 'Football Team' },
    { id: 2, name: 'Family' },
    { id: 3, name: 'School' },
    { id: 4, name: 'Business' },
  ]
};
