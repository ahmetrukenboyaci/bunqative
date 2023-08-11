import { ReactNode } from 'react'

interface LayoutProps {
  header?: string;
  users?: number[];
  isConversation?: boolean;
  children: ReactNode;
}

export type { LayoutProps };