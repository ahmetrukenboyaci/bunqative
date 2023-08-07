import type { Meta, StoryFn } from '@storybook/react'

import Login from './Login.page';
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Login>;

export default meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Create Chatroom',
};