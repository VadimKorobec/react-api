import { useState } from 'react';

export const Counter = () => {
  const [total, setTotal] = useState(0);

  const handleClickIncrement = () => {
    setTotal(total + 1);
  };

  const handleClickDecrement = () => {
    if (total === 0) {
      return;
    }
    setTotal(total - 1);
  };

  return (
    <>
      {' '}
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: '80px' }}>
              {total}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={handleClickIncrement}
              >
                <i className="bi bi-plus-circle fs-1"></i>
                Plus
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={handleClickDecrement}
              >
                <i className="bi bi-dash-circle fs-1 "></i>
                Minus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import { Component } from 'react';

// export class Counter extends Component {
//   state = {
//     value: 0,
//   };

//   handleClickIncrement = () => {
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   };

//   handleClickDecrement = () => {
//     this.setState(prevState => ({ value: prevState.value - 1 }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="position-absolute top-50 start-50 translate-middle">
//         <div className="card bg-dark text-white" style={{ width: '600px' }}>
//           <div className="card-body">
//             <h5 className="card-title text-center">Counter</h5>
//             <p className="card-text text-center" style={{ fontSize: '80px' }}>
//               {value}
//             </p>
//             <div className="d-flex justify-content-center px-5">
//               <button
//                 className="btn btn-outline-success me-5"
//                 onClick={this.handleClickIncrement}
//               >
//                 <i className="bi bi-plus-circle fs-1"></i>
//                 Plus
//               </button>
//               <button
//                 className="btn btn-outline-danger ms-5"
//                 onClick={this.handleClickDecrement}
//               >
//                 <i className="bi bi-dash-circle fs-1 "></i>
//                 Minus
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
