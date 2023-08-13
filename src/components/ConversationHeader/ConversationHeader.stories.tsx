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
  users: [1],
};

export const Group = Template.bind({});

Group.args = {
  users: [
    1,
    2,
    3,
    4,
    5,
    6,
  ],
};
