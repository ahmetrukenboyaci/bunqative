import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  fetchUsers, fetchUsersFail, fetchUsersSuccess,
} from '../slices/user.slice'
import { request } from '../../utilities/request'
import { UserType } from '../../pages/types/types'


export function* getUsers() {
  try {
    const messagesData: { data: UserType[] } = yield request({
      url: ENDPOINT.USER_LISTING,
      methodType: types.GET,
    });

    yield put(fetchUsersSuccess(messagesData.data));
  } catch (e) {
    yield put(fetchUsersFail());
  }
}

export function* watchUser() {
  yield takeEvery(fetchUsers, getUsers);
}
