interface MessageProps {
  text: string;
  owner?: number;
  date: string;
  isMine?: boolean;
  isInGroup?: boolean;
}

interface InitialProps {
  text: string;
}

interface MessageOwnerProps {
  isMine?: boolean;
}

export type { MessageProps, MessageOwnerProps, InitialProps };