import { select, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  createConversation, createConversationFail, createConversationSuccess,
  fetchConversation,
  fetchConversationFail,
  fetchConversations, fetchConversationsFail, fetchConversationsSuccess, fetchConversationSuccess,
} from '../slices/conversation.slice'
import { request } from '../../utilities/request'
import { ConversationType } from '../../pages/types/types'
import { PayloadAction } from '@reduxjs/toolkit'

export function* getConversations() {
  try {
    const {
      id: my_id
    } = yield select((state) => state.login);



    const conversationsData: { data: ConversationType[] } = yield request({
      url: ENDPOINT.CONVERSATION_LISTING(my_id),
      methodType: types.GET,
    });

    yield put(fetchConversationsSuccess({
      conversations: Object.values(conversationsData.data).filter((conv: ConversationType) => !conv.is_group),
      groups: Object.values(conversationsData.data).filter((conv: ConversationType) => conv.is_group),
    }));
  } catch (e) {
    console.log(e)
    yield put(fetchConversationsFail());
  }
}

export function* getConversation(action: PayloadAction<{ id: number }>) {
  try {
    console.log(action.payload.id)
    const {
      id: my_id
    } = yield select((state) => state.login);

    const conversationsData: { data: ConversationType[] } = yield request({
      url: ENDPOINT.CONVERSATION_READ(my_id, action.payload.id),
      methodType: types.GET,
    });

    yield put(fetchConversationSuccess(Object.values(conversationsData.data)));
  } catch (e) {
    yield put(fetchConversationFail());
  }
}

export function* postConversation(action: PayloadAction<{
  name: string;
  is_group: boolean;
  members: number[];
  last_message: string;
  last_message_date: string;
}>) {
  try {
    const {
      id: my_id
    } = yield select((state) => state.login);

    const payload = {
      name: action.payload.name,
      is_group: action.payload.is_group,
      members: action.payload.members,
      last_message: action.payload.last_message,
      last_message_date: action.payload.last_message_date
    }

    const conversationData: { data: ConversationType } = yield request({
      url: ENDPOINT.CONVERSATION_MANY(my_id),
      data: payload,
      methodType: types.POST,
    });

    yield put(createConversationSuccess(Object.values(conversationData.data)));
  } catch (e) {
    yield put(createConversationFail());
  }
}

export function* watchConversation() {
  yield takeEvery(fetchConversations, getConversations);
  yield takeEvery(fetchConversation, getConversation);
  yield takeEvery(createConversation, postConversation);
}
