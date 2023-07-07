import { CREATETODO } from 'redux/types';

export const createTodo = todo => ({ type: CREATETODO, payload: todo });
