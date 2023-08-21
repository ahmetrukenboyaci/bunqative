import type { Meta, StoryFn } from '@storybook/react';

import ConversationHeader from './ConversationHeader';
import { BrowserRouter } from 'react-router-dom';
import { ConversationHeaderProps } from './ConversationHeader.types';

const meta = {
  title: 'Components/ConversationHeader',
  component: ConversationHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof ConversationHeader>;

export default meta;

const Template: StoryFn<ConversationHeaderProps> = (args) => (
  <BrowserRouter>
    <ConversationHeader {...args} />
  </BrowserRouter>
);

export const OneToOne = Template.bind({});

OneToOne.args = {
  users: [{
    id: 1,
    name: 'Bożenka Malina',
    last_seen_at: (new Date()).toISOString(),
  }],
};

export const Group = Template.bind({});

Group.args = {
  users: [
    {
      id: 1,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
    {
      id: 2,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
    {
      id: 3,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
    {
      id: 4,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
    {
      id: 5,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
    {
      id: 6,
      name: 'Bożenka Malina',
      last_seen_at: (new Date()).toISOString(),
    },
  ],
};
