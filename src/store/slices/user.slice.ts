import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../pages/types/types';

const initialState: {
  users: UserType[],
  conversationUsers: UserType[],
  conversationUser: UserType,
  isLoading: boolean
} = {
  users: [{
    id: -1,
    name: '',
    last_seen_at: '',
  }],
  conversationUsers: [{
    id: -1,
    name: '',
    last_seen_at: '',
  }],
  conversationUser: {
    id: -1,
    name: '',
    last_seen_at: '',
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.isLoading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    fetchUsersFail: (state) => {
      state.isLoading = false;
    },
    fetchConversationUsers: (state, action) => {
      state.isLoading = true;
    },
    fetchConversationUsersSuccess: (state, action) => {
      console.log(action.payload);
      state.conversationUsers = action.payload;
      state.isLoading = false;
    },
    fetchConversationUsersFail: (state) => {
      state.isLoading = false;
    },
    fetchUser: (state, action) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.conversationUser = action.payload;
      state.isLoading = false;
    },
    fetchUserFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail,
  fetchConversationUsers,
  fetchConversationUsersSuccess,
  fetchConversationUsersFail,
  fetchUser,
  fetchUserSuccess,
  fetchUserFail,
} = userSlice.actions;
export default userSlice.reducer;
