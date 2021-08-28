// eslint-disable no-console
// Core
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// RootReducer
import { rootReducer } from '../reducers';

const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatchin', action);
  console.log('prev_state', store.getState());
  const result = next(action);
  console.log('next_state', store.getState());
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
