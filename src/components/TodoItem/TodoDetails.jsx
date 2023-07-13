import { Suspense } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';

const TodoDetails = () => {
  // const [todoList, setTodoList] = useState(null);
  const { todo: todoList } = useSelector(state => state.todo);

  const params = useParams();

  const location = useLocation();

  // useEffect(() => {
  //   const localTodo = localStorage.getItem('todo');
  //   if (localTodo) setTodoList(JSON.parse(localTodo));
  // }, []);

  return (
    <Suspense>
      <Link to={location.state} className="btn btn-secondary m-2">
        Back
      </Link>
      {todoList?.map(
        todo => todo.id === params.id && <TodoItem key={todo.id} todo={todo} />
      )}
    </Suspense>
  );
};

export default TodoDetails;
