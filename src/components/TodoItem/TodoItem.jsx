export const TodoItem = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <>
      <li style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
          {todo.title}
        </div>

        <button type="button" onClick={() => handleDelete(todo.id)}>
          Delete Todo
        </button>
      </li>
    </>
  );
};
