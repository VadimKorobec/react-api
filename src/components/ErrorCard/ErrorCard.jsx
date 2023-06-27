export const ErrorCard = ({ children }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Error</h5>
          <p className="card-text">{children}</p>
        </div>
      </div>
    </>
  );
};
