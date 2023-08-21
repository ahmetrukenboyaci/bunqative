import { UserType } from '../../pages/types/types';

interface UserProps {
  user: UserType;
  name: string;
  isMessageItem?: boolean;
  isAdded?: boolean;
  onButtonClick?: () => void;
}

export type { UserProps };