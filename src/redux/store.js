import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todos',
  storage,
  blacklist: ['counter'],
};

const customMidle = state => {
  return next => {
    return action => {
      if (typeof action === 'function') {
        console.log('state', state);
        return next(action());
      }
      return next(action);
    };
  };
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [customMidle],
});

export const persistor = persistStore(store);
