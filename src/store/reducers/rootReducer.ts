import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from '../slices/user.slice';
import conversationSlice from '../slices/conversation.slice';
import loginSlice from '../slices/login.slice';
import messageSlice from '../slices/message.slice'

const persistedLoginReducer = persistReducer({ key: 'login', storage }, loginSlice);

export default combineReducers({
  user: userSlice,
  conversation: conversationSlice,
  message: messageSlice,
  login: persistedLoginReducer
});
