import { createSlice } from '@reduxjs/toolkit';
import { ConversationType } from '../../pages/types/types'

const initialState: { conversations: ConversationType[], isLoading: boolean } = {
  conversations: [{
    id: -1,
    name: '',
    members: [],
    last_message: '',
    last_message_date: '',
    is_group: false,
  }],
  isLoading: false
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    fetchConversations: (state) => {
      state.isLoading = true;
    },
    fetchConversationsSuccess: (state, action) => {
      state.conversations = action.payload;
      state.isLoading = false;
    },
    fetchConversationsFail: (state) => {
      state.isLoading = false;
    },
  }
});

export const {
  fetchConversations,
  fetchConversationsSuccess,
  fetchConversationsFail
} = conversationSlice.actions;
export default conversationSlice.reducer;
