export const TodoItem = ({ todo, handleCheckCompleted }) => {
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

        <button type="button">Delete Todo</button>
      </li>
    </>
  );
};
