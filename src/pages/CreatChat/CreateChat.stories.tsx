import type { Meta, StoryFn } from '@storybook/react'

import CreateChat from './CreateChat.page';
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/CreateChat',
  component: CreateChat,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof CreateChat>;

export default meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <CreateChat />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Create Chat',
};