import { createSlice } from '@reduxjs/toolkit';
import { ConversationType } from '../../pages/types/types'

const initialState: { conversations: ConversationType[], groups: ConversationType[], selectedConversation: ConversationType, isLoading: boolean } = {
  conversations: [{
    id: -1,
    name: '',
    members: [],
    last_message: '',
    last_message_date: '',
    is_group: false,
  }],
  groups: [{
    id: -1,
    name: '',
    members: [],
    last_message: '',
    last_message_date: '',
    is_group: false,
  }],
  selectedConversation: {
    id: -1,
    name: '',
    members: [],
    last_message: '',
    last_message_date: '',
    is_group: false,
  },
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
      state.conversations = action.payload.conversations;
      state.groups = action.payload.groups;
      state.isLoading = false;
    },
    fetchConversationsFail: (state) => {
      state.isLoading = false;
    },
    fetchConversation: (state, action) => {
      state.isLoading = true;
    },
    fetchConversationSuccess: (state, action) => {
      state.selectedConversation = action.payload;
      state.isLoading = false;
    },
    fetchConversationFail: (state) => {
      state.isLoading = false;
    },
    createConversation: (state, action) => {
      state.isLoading = true;
    },
    createConversationSuccess: (state, action) => {
      state.selectedConversation = action.payload;
      state.isLoading = false;
    },
    createConversationFail: (state) => {
      state.isLoading = false;
    },
  }
});

export const {
  fetchConversations,
  fetchConversation,
  createConversation,
  fetchConversationsSuccess,
  fetchConversationSuccess,
  createConversationSuccess,
  fetchConversationsFail,
  fetchConversationFail,
  createConversationFail
} = conversationSlice.actions;
export default conversationSlice.reducer;
