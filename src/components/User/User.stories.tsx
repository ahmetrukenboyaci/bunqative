import type { Meta, StoryFn } from '@storybook/react';

import User from './User';
import { BrowserRouter } from 'react-router-dom';
import { UserProps } from './User.types';

const meta = {
  title: 'Components/User',
  component: User,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof User>;

export default meta;

const Template: StoryFn<UserProps> = (args) => (
  <BrowserRouter>
    <User {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  user: {
    id: 9,
    name: 'Bożenka Malina',
    last_seen_at: (new Date()).toISOString(),
  },
};
