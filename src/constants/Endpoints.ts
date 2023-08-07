const ENDPOINT = Object.freeze({
  USER_LISTING: '/user',
  USER_READ: (id: number)=>  `/user/${id}`,
  CONVERSATION: (id: number)=>  `/user/${id}/conversation`,
  CONVERSATION_MANY: (id: number)=>  `/user/${id}/conversation`,
  CONVERSATION_LISTING: (id: number)=>  `/user/${id}/conversation`,
  CONVERSATION_READ: (userId: number, conversationId: number)=>  `/user/${userId}/conversation/${conversationId}`,
  MESSAGE_CREATE: (userId: number, conversationId: number)=>  `/user/${userId}/conversation/${conversationId}/message`,
  MESSAGE_LISTING: (userId: number, conversationId: number)=>  `/user/${userId}/conversation/${conversationId}/message`,
});

export { ENDPOINT };
