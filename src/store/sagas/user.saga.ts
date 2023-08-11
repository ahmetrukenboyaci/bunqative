import { put, select, takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  fetchMessages, fetchMessagesFail, fetchMessagesSuccess,
} from '../slices/message.slice'
import { request } from '../../utilities/request'
import { MessageType } from '../../pages/types/types'


export function* getMessages(action) {
  try {
    const {
      id: my_id
    } = yield select((state) => state.login);

    const messagesData: { data: MessageType[] } = yield request({
      url: ENDPOINT.MESSAGE_LISTING(my_id, action.payload.conversation_id),
      methodType: types.GET,
    });

    yield put(fetchMessagesSuccess(messagesData.data));
  } catch (e) {
    yield put(fetchMessagesFail());
  }
}

export function* watchMessage() {
  yield takeEvery(fetchMessages, getMessages);
}
