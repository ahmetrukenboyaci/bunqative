import { ReactNode } from 'react';
import { UserType } from '../../pages/types/types';

interface LayoutProps {
  header?: string;
  users?: UserType[];
  isConversation?: boolean;
  children: ReactNode;
}

export type { LayoutProps };