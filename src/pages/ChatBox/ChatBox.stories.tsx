import type { Meta, StoryFn } from '@storybook/react'

import ChatBox from './ChatBox.page';
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/ChatBox',
  component: ChatBox,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof ChatBox>;

export default meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <ChatBox />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Create Chatroom',
};