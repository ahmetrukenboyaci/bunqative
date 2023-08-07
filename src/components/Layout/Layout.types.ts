import { ReactNode } from 'react'

interface LayoutProps {
  header?: string;
  users?: string[];
  isConversation?: boolean;
  children: ReactNode;
}

export type { LayoutProps };