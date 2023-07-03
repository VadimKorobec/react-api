import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodoItem } from './TodoItem';

export const TodoDetails = () => {
  const [todoList, setTodoList] = useState(null);
  const params = useParams();

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  return (
    <>
      {todoList?.map(
        todo => todo.id === params.id && <TodoItem key={todo.id} todo={todo} />
      )}
    </>
  );
};
