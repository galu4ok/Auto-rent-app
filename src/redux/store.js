import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './advertsSlice';

const advertsPersistConfig = {
  key: 'adverts',
  storage,
  blacklist: ['items', 'isLoading', 'error'],
};

const rootReducer = combineReducers({
  adverts: advertsReducer,
});
const persistedReducer = persistReducer(advertsPersistConfig, rootReducer);

//Створення Store
export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
