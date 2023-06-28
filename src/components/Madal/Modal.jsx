import { useEffect } from 'react';

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, []);

  const handlePressESC = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
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

// import { Component } from 'react';

// export class Modal extends Component {
//   state = {};

//   componentDidMount() {
//    window .addEventListener('keydown', this.handlePressESC);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handlePressESC);
//   }

//   handlePressESC = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     const { closeModal, children } = this.props;
//     return (
//       <>
//         <div className="modal-dialog" style={{ width: '400px' }}>
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//                 onClick={closeModal}
//               ></button>
//             </div>

//             <div>{children}</div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
