interface MessageProps {
  text: string;
  owner: string;
  date: string;
  isMine?: boolean;
  isInGroup?: boolean;
}

interface MessageOwnerProps {
  isMine?: boolean;
}

export type { MessageProps, MessageOwnerProps };