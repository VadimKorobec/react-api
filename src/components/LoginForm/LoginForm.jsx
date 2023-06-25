import { Component } from 'react';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: 'male',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChack = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  handleRadio = ({ target }) => {
    this.setState({
      gender: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    this.reset();
  };

  reset = () => {
    this.setState = {
      email: '',
      password: '',
    };

    this.props.closeModal();
  };

  render() {
    const { email, password, isChecked, gender } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isChecked}
              onChange={this.handleChack}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={gender === 'male'}
              onChange={this.handleRadio}
              value="male"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={gender === 'female'}
              onChange={this.handleRadio}
              value="female"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Fimale
            </label>
          </div>
          <button
            disabled={!this.state.isChecked}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
