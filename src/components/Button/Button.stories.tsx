import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

import Add from '../../assets/icons/add.svg';
import Bunqative from '../../assets/icons/bunqative.svg';
import { ButtonColor } from './Button.types'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClick = (): void => {
  console.log('Button clicked!');
};

export const Default: Story = {
  args: {
    onClick,
    icon: Add,
    color: ButtonColor.blue
  },
};

export const WithText: Story = {
  args: {
    onClick,
    icon: Bunqative,
    text: 'Create',
    color: ButtonColor.green
  },
};
