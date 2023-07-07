import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { CREATETODO, DECREMENT, INCREMENT, SETSTEP } from './types';

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case CREATETODO:
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
