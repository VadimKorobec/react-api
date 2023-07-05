import { Link, useLocation } from 'react-router-dom';

export const TodoItem = ({ todo, handleCheckCompleted, handleDelete }) => {
  const location = useLocation();
  console.log('location', location);
  return (
    <>
      <li className="list-group-item">
        <div className="row justify-content-between">
          <div className="col-10">
            {handleCheckCompleted && (
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckCompleted(todo.id)}
              />
            )}
            {handleCheckCompleted ? (
              <Link to={todo.id} state={location}>
                {todo.title}
              </Link>
            ) : (
              <h2>{todo.title}</h2>
            )}
          </div>
          <div className="col">
            {handleDelete && (
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                disabled={!todo.completed}
                onClick={() => handleDelete(todo.id)}
              ></button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};
