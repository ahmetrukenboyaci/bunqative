interface UserProps {
  id: number;
  name: string;
  isMessageItem?: boolean;
  isAdded?: boolean;
  onButtonClick?: () => void;
}

export type { UserProps };