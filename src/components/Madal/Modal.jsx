export const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div className="modal-dialog" style={{ width: '400px' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
