import { Component } from 'react';

export class Search extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  // handleChange = ({ target: { value } }) => {
  //   this.setState({ value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleSearch(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <form
          className="d-flex mt-2"
          role="search"
          onSubmit={this.handleSubmit}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
            value={value}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
