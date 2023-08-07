import type { Meta, StoryFn } from '@storybook/react'

import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom'
import { LayoutProps } from './Layout.types'

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;

const Template: StoryFn<LayoutProps> = (args) => (
  <BrowserRouter>
    <Layout {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Create Chatroom',
};