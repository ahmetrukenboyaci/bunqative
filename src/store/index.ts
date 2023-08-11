import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware]
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;