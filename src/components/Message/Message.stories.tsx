import type { Meta, StoryFn } from '@storybook/react'

import Message from './Message';
import { BrowserRouter } from 'react-router-dom'
import { MessageProps } from './Message.types'

const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Message>;

export default meta;

const Template: StoryFn<MessageProps> = (args) => (
  <BrowserRouter>
    <Message {...args} />
  </BrowserRouter>
);

export const Mine = Template.bind({});

Mine.args = {
  text: 'I commented on Figma, I want to add some fancy icons. Do you have any icon set?',
  isMine: true,
  date: '2023-08-05T08:07:37.000000Z'
};

export const Others = Template.bind({});

Others.args = {
  text: 'I commented on Figma, I want to add some fancy icons. Do you have any icon set?',
  date: '2021-07-21T08:07:37.000000Z'
};

export const OthersInGroup = Template.bind({});

OthersInGroup.args = {
  text: 'I commented on Figma, I want to add some fancy icons. Do you have any icon set?',
  isInGroup: true,
  owner: 2,
  date: '2023-07-21T08:07:37.000000Z'
};
