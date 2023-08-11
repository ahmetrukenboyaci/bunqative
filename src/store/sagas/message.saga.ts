import { put, select, takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  createMessage, createMessageFail, createMessageSuccess,
  fetchMessages, fetchMessagesFail, fetchMessagesSuccess,
} from '../slices/message.slice'
import { request } from '../../utilities/request'
import { MessageType } from '../../pages/types/types'
import { PayloadAction } from '@reduxjs/toolkit'

export function* getMessages(action: PayloadAction<{ id: number }>) {
  try {
    const {
      id: my_id
    } = yield select((state) => state.login);

    const messagesData: { data: MessageType[] } = yield request({
      url: ENDPOINT.MESSAGE_LISTING(my_id, action.payload.id),
      methodType: types.GET,
    });

    yield put(fetchMessagesSuccess(Object.values(messagesData.data)));
  } catch (e) {
    yield put(fetchMessagesFail());
  }
}

export function* postMessage(action: PayloadAction<{
  conversation_id: number,
  owner_id: number,
  text: string,
  sent_at: string
}>) {
  try {
    const {
      id: my_id
    } = yield select((state) => state.login);

    const payload = {
      conversation_id: action.payload.conversation_id,
      owner_id: action.payload.owner_id,
      text: action.payload.text,
      sent_at: action.payload.sent_at
    }

    const messagesData: { data: MessageType[] } = yield request({
      url: ENDPOINT.MESSAGE_CREATE(my_id, action.payload.conversation_id),
      data: payload,
      methodType: types.POST,
    });

    yield put(createMessageSuccess(Object.values(messagesData.data)));
  } catch (e) {
    yield put(createMessageFail());
  }
}

export function* watchMessage() {
  yield takeEvery(fetchMessages, getMessages);
  yield takeEvery(createMessage, postMessage);
}
