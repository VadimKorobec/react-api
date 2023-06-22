export const Modal = ({ children }) => {
  return (
    <>
      <div style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
        <h5>Modal</h5>
        <button type="button">Click me</button>
        <div>{children}</div>
      </div>
    </>
  );
};
