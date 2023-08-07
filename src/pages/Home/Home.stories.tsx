import type { Meta, StoryFn } from '@storybook/react'

import Home from './Home.page';
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  header: 'Ahmet Ruken',
};