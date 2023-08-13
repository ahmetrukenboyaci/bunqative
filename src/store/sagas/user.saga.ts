import { put, select, takeEvery } from 'redux-saga/effects';
import * as types from '../../constants/methodTypes';
import { ENDPOINT } from '../../constants/Endpoints';
import {
  fetchUsers, fetchUsersFail, fetchUsersSuccess,
} from '../slices/user.slice';
import { request } from '../../utilities/request';
import { UserType } from '../../pages/types/types';


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

export function* watchUser() {
  yield takeEvery(fetchUsers, getUsers);
}
