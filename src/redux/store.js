import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, total: action.payload };
    case 'decrement':
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, { total: 0 });
console.log('store', store);
store.dispatch({ type: 'increment', payload: 1 });
console.log(store.getState());
