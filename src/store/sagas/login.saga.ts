import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  login, loginFail, loginSuccess,
} from '../slices/login.slice';
import { request } from '../../utilities/request';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../pages/types/types';


export function* signIn(action: PayloadAction<{ name: string, password: string }>) {
  try {
    const payload = {
      name: action.payload.name,
      password: action.payload.password,
    };

    const userData: { data: UserType } = yield request({
      url: ENDPOINT.LOGIN,
      methodType: types.POST,
      data: payload,
    });
    
    yield put(loginSuccess(userData.data));
  } catch (e) {
    yield put(loginFail());
  }
}

export function* watchLogin() {
  yield takeEvery(login, signIn);
}
