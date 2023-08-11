import { all } from 'redux-saga/effects';

import { watchBasicInfo } from 'store/sagas/basicInfo.saga';
import { watchFooter } from 'store/sagas/footer.saga';
import { watchIndicators } from 'store/sagas/indicator.saga';
import { watchMenu } from 'store/sagas/menu.saga';
import { watchPassport } from 'store/sagas/passport.saga';
import { watchUser } from 'store/sagas/user.saga';

export default function* rootSaga() {
  yield all([watchFooter(), watchMenu(), watchIndicators(), watchUser(), watchPassport(), watchBasicInfo()]);
}
