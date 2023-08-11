interface UserType {
  id: number;
  name: string;
  last_seen_at: string;
}

interface ConversationType {
  id: number;
  name: string;
  members: number[];
  last_message: string;
  last_message_date: string;
  is_group?: boolean;
}

interface MessageType {
  id: number;
  conversation_id: number;
  owner_id: number;
  text: string;
  sent_at: string;
}

export type { UserType, ConversationType, MessageType };