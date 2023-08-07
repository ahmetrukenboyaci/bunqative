import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChange = (): void => {
  console.log('Input changeed!');
};

const onEnter = (): void => {
  alert('Input entered!');
};

export const Text: Story = {
  args: {
    label: 'Name',
    onChange,
    onEnter,
    placeholder: 'name',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    onChange,
    onEnter,
    placeholder: 'password',
    type: 'password'
  },
};

export const Search: Story = {
  args: {
    onChange,
    onEnter,
    placeholder: 'search...',
    type: 'search'
  },
};

export const Message: Story = {
  args: {
    onChange,
    onEnter,
    placeholder: 'message',
    type: 'message'
  },
};
