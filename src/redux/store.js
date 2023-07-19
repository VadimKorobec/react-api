import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
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
import { productsApi } from './product/productsApi';

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todo', 'auth'],
};

// const customMidle = state => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         action(state.dispatch);
//         return;
//       }
//       return next(action);
//     };
//   };
// };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [customMidle],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

export const persistor = persistStore(store);
