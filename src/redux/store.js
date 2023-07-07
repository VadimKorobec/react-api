import { createStore } from 'redux';

const reducer = state => state;

const store = createStore(reducer, 0);
console.log('store', store);
store.dispatch({ value: 1 });
console.log(store.getState());
