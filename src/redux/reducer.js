import { combineReducers } from 'redux';
import { initialState } from './initialState';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        total: state.total - action.payload,
      };
    case 'setStep':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'createTodo':
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };

    default:
      return state;
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
