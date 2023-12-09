import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';

const rootReducer = combineReducers({ adverts: advertsReducer });

//Створення Store
export const store = configureStore({
  reducer: rootReducer,
});
