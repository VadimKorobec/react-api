export const TodoItem = ({ item, handleCheckCompleted }) => {
  return (
    <>
      <li style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleCheckCompleted(item.id)}
          />
          {item.title}
        </div>

        <button type="button">Delete Todo</button>
      </li>
    </>
  );
};
