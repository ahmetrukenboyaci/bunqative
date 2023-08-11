import { createSlice } from '@reduxjs/toolkit';
import { MessageType } from '../../pages/types/types'

const initialState: { messages: MessageType[], isLoading: boolean } = {
  messages: [{
    id: -1,
    conversation_id: -1,
    owner_id: -1,
    text: '',
    sent_at: '',
  }],
  isLoading: false
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    fetchMessages: (state, action) => {
      state.isLoading = true;
    },
    fetchMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    fetchMessagesFail: (state) => {
      state.isLoading = false;
    },
    createMessage: (state, action) => {
      state.isLoading = true;
    },
    createMessageSuccess: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    createMessageFail: (state) => {
      state.isLoading = false;
    },
  }
});

export const {
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFail,
  createMessage,
  createMessageSuccess,
  createMessageFail
} = messageSlice.actions;
export default messageSlice.reducer;
