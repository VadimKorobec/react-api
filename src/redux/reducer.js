import { combineReducers } from 'redux';
// import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todo/todoReducer';
import { counterReducer } from './counter/counterSlice';
import { newsReducer } from './news/newsReducer';
import { productsReducer } from './product/slice';
import { productsApi } from './product/productsApi';
import { authReducer } from './auth/slice';

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  auth: authReducer,
});
