import type { Meta, StoryFn } from '@storybook/react'

import CreateChatroom from './CreateChatroom.page';
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/CreateChatroom',
  component: CreateChatroom,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof CreateChatroom>;

export default meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <CreateChatroom />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Create Chatroom',
};