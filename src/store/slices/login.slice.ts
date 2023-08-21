import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const initialState: { id: number | null, name: string, password: string, last_seen_at: string, isLoading: boolean } = {
  id: null,
  name: '',
  password: '',
  last_seen_at: '',
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.last_seen_at = action.payload.last_seen_at;
      state.isLoading = false;
    },
    loginFail: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.password = initialState.password;
      state.last_seen_at = initialState.last_seen_at;
      state.isLoading = false;
    },
  },
});

export const isUserLoggedIn = (state: RootState) => !!state.login.id && !!state.login.name;

export const {
  login,
  loginSuccess,
  loginFail,
  logout,
} = loginSlice.actions;
export default loginSlice.reducer;
