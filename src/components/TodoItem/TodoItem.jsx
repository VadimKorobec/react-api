import { Link } from 'react-router-dom';

export const TodoItem = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <>
      <Link to={todo.id}>
        <li className="list-group-item">
          <div className="row justify-content-between">
            <div className="col-10">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckCompleted(todo.id)}
              />
              {todo.title}
            </div>
            <div className="col">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                disabled={!todo.completed}
                onClick={() => handleDelete(todo.id)}
              ></button>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};
