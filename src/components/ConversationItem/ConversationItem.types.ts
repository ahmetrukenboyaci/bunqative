interface ConversationItemProps {
  id: number;
  newMessageCount?: number;
  name: string;
  lastMessage: string;
  date: string;
}

interface InitialProps {
  isAlone: boolean
}

export type { ConversationItemProps, InitialProps };