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

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todo'],
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
    }),
});

export const persistor = persistStore(store);
