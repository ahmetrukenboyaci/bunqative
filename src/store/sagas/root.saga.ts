import { all } from 'redux-saga/effects';

import { watchUser } from './user.saga'
import { watchMessage } from './message.saga'
import { watchLogin } from './login.saga'
import { watchConversation } from './conversation.saga'

export default function* rootSaga() {
  yield all([watchUser(), watchLogin(), watchConversation(), watchMessage()]);
}
