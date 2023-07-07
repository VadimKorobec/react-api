import { counterInitialState } from './initialState';

const { INCREMENT, DECREMENT, SETSTEP } = require('./types');

export const counterReducer = (state = counterInitialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        total: state.total - action.payload,
      };
    case SETSTEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
