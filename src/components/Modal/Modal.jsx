import React, { useEffect } from 'react';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressESC = e => {
      console.log('object', Date.now());
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  return (
    <div>
      <div>
        <div>
          <div>
            <h5>Modal</h5>
            <button type="button" onClick={closeModal}></button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
