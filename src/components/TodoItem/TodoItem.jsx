export const TodoItem = ({
  item: { title, completed },
  handleCheckCompleted,
}) => {
  return (
    <>
      <li style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <div>
          <input type="checkbox" checked={completed} />
          {title}
        </div>

        <button type="button">Delete Todo</button>
      </li>
    </>
  );
};
