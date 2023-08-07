import type { Meta, StoryFn } from '@storybook/react'

import ConversationItem from './ConversationItem';
import { BrowserRouter } from 'react-router-dom'
import { ConversationItemProps } from './ConversationItem.types'

const meta = {
  title: 'Components/ConversationItem',
  component: ConversationItem,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof ConversationItem>;

export default meta;

const Template: StoryFn<ConversationItemProps> = (args) => (
  <BrowserRouter>
    <ConversationItem {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  id: 9,
  name: 'Bożenka Malina',
  lastMessage: 'last message was nothing',
  date: '2021-07-21T08:07:00.000000Z',
  newMessageCount: 25,
};

export const WithoutMessage = Template.bind({});

WithoutMessage.args = {
  id: 9,
  name: 'Odeusz Piotrowski',
  lastMessage: 'last message was nothing',
  date: '2021-07-21T08:07:00.000000Z',
  newMessageCount: 0,
};
