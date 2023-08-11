import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../pages/types/types'

const initialState: { users: UserType[], isLoading: boolean } = {
  users: [{
    id: -1,
    name: '',
    last_seen_at: '',
  }],
  isLoading: false
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
  }
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail
} = userSlice.actions;
export default userSlice.reducer;
