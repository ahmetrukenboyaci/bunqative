import { UserType } from '../../pages/types/types';

interface ConversationHeaderProps {
  users: UserType[];
}

type ConversationHeaderIsGroup = {
  isGroup: boolean;
}

type ConversationHeaderInitialProps = {
  isGroup: boolean;
  text: string;
}

export type { ConversationHeaderProps, ConversationHeaderIsGroup, ConversationHeaderInitialProps };