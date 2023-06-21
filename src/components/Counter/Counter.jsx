import { Component } from 'react';

export class Counter extends Component {
  state = {
    value: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: '80px' }}>
              {this.state.value}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={this.handleClick}
              >
                <i className="bi bi-plus-circle fs-1"></i>
                Plus
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={this.handleClick}
              >
                <i className="bi bi-dash-circle fs-1 "></i>
                Minus
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
