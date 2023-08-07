import React from 'react'

enum ButtonColor {
  green= 'green',
  blue= 'blue'
}

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  icon: string;
  color?: ButtonColor;
}

export type { ButtonProps };

export { ButtonColor };
