import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appSlice from 'store/slices/app.slice';
import basicInfoSlice from 'store/slices/basicInfo.slice';
import eyeBlinkSlice from 'store/slices/eyeBlink.slice';
import footerSlice from 'store/slices/footer.slice';
import indicatorSlice from 'store/slices/indicator.slice';
import menuSlice from 'store/slices/menu.slice';
import middleLayerSlice from 'store/slices/middleLayer.slice';
import modalSlice from 'store/slices/modal.slice';
import newsSlice from 'store/slices/news.slice';
import passportSlice from 'store/slices/passport.slice';
import userSlice from 'store/slices/user.slice';

const persistedPassportReducer = persistReducer({ key: 'passport', storage }, passportSlice);
const persistedUserReducer = persistReducer({ key: 'user', storage }, userSlice);
const persistedBasicInfoReducer = persistReducer({ key: 'basicInfo', storage }, basicInfoSlice);

export default combineReducers({
  app: appSlice,
  basicInfo: persistedBasicInfoReducer,
  eyeBlink: eyeBlinkSlice,
  footer: footerSlice,
  indicator: indicatorSlice,
  menu: menuSlice,
  middleLayer: middleLayerSlice,
  modal: modalSlice,
  news: newsSlice,
  passport: persistedPassportReducer,
  user: persistedUserReducer
});
