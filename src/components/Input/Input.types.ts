interface InputProps {
  onChange: (vl: string) => void;
  onEnter?: () => void;
  defaultValue?: string;
  placeholder: string;
  type?: string;
  label?: string;
}

interface InputIconProps {
  isActive: boolean;
}

export type { InputProps, InputIconProps };
