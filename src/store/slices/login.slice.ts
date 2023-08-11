import { createSlice } from '@reduxjs/toolkit';

const initialState: { id: number, username: string, password: string, token: string, isLoading: boolean } = {
  id: 1,
  username: '',
  password: '',
  token: '',
  isLoading: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.username = action.payload.password;
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.username = action.payload.token;
      state.isLoading = false;
    },
    loginFail: (state) => {
      state.isLoading = false;
    },
  }
});

export const {
  login,
  loginSuccess,
  loginFail
} = loginSlice.actions;
export default loginSlice.reducer;
