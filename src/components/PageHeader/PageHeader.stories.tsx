import type { Meta, StoryFn } from '@storybook/react'

import PageHeader from './PageHeader';
import { BrowserRouter } from 'react-router-dom'
import { PageHeaderProps } from './PageHeader.types'

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

const Template: StoryFn<PageHeaderProps> = (args) => (
  <BrowserRouter>
    <PageHeader {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  name: 'Ahmet Ruken',
};
