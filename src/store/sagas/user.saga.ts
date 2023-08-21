import { all, put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  fetchConversationUsers,
  fetchConversationUsersFail,
  fetchConversationUsersSuccess,
  fetchUser, fetchUserFail,
  fetchUsers, fetchUsersFail, fetchUsersSuccess, fetchUserSuccess,
} from '../slices/user.slice';
import { request } from '../../utilities/request';
import { UserType } from '../../pages/types/types';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getUsers() {
  try {
    const { id: my_id } = yield select(state => state.login);

    const usersData: { data: UserType[] } = yield request({
      url: ENDPOINT.USER_LISTING(my_id),
      methodType: types.GET,
    });

    yield put(fetchUsersSuccess(Object.values(usersData.data)));
  } catch (e) {
    yield put(fetchUsersFail());
  }
}

export function* getUser(action: PayloadAction<{ id: number }>) {
  try {
    const usersData: { data: UserType[] } = yield request({
      url: ENDPOINT.USER_READ(action.payload.id),
      methodType: types.GET,
    });

    yield put(fetchUserSuccess(usersData.data));
  } catch (e) {
    yield put(fetchUserFail());
  }
}

export function* getConversationUsers(action: PayloadAction<{ ids: number[] }>) {
  try {
    const usersData: [{ data: UserType }] = yield all(action.payload.ids.map(id =>
      request({
        url: ENDPOINT.USER_READ(id),
        methodType: types.GET,
      }),
    ));

    yield put(fetchConversationUsersSuccess(usersData.map(user => user.data)));
  } catch (e) {
    yield put(fetchConversationUsersFail());
  }
}

export function* watchUser() {
  yield takeEvery(fetchUsers, getUsers);
  yield takeEvery(fetchUser, getUser);
  yield takeEvery(fetchConversationUsers, getConversationUsers);
}
