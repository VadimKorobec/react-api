import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { TodoItem } from './TodoItem';

export const TodoDetails = () => {
  const [todoList, setTodoList] = useState(null);
  const params = useParams();

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  return (
    <>
      <Link to={location.state} className="btn btn-secondary m-2">
        Back
      </Link>
      {todoList?.map(
        todo => todo.id === params.id && <TodoItem key={todo.id} todo={todo} />
      )}
    </>
  );
};
