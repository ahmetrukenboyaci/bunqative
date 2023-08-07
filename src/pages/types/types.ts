interface UserType {
  id: number;
  name: string;
  last_seen_at: string;
}

interface ConversationType {
  id: number;
  name: string;
  last_seen_at: string;
  message: string;
  new_message_count?: number;
}

export type { UserType, ConversationType };