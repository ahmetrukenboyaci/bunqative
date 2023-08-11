import type { Meta, StoryFn } from '@storybook/react'

import Group from './Group';
import { BrowserRouter } from 'react-router-dom'
import { GroupProps } from './Group.types'

const meta = {
  title: 'Components/Group',
  component: Group,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Group>;

export default meta;

const Template: StoryFn<GroupProps> = (args) => (
  <BrowserRouter>
    <Group {...args} />
  </BrowserRouter>
);

export const Football = Template.bind({});

Football.args = {
  id: 9,
  name: 'football team',
};

export const Business = Template.bind({});

Business.args = {
  id: 8,
  name: 'business',
};

export const Editable = Template.bind({});

Editable.args = {
  id: 8,
  name: 'business',
  editable: true
};
