import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  login, loginFail, loginSuccess,
} from '../slices/login.slice'
import { request } from '../../utilities/request'


export function* signIn() {
  try {
    const { token }: { token: string } = yield request({
      url: ENDPOINT.LOGIN,
      methodType: types.POST,
    });

    yield put(loginSuccess({ token }));
  } catch (e) {
    yield put(loginFail());
  }
}

export function* watchLogin() {
  yield takeEvery(login, signIn);
}
