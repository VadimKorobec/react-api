import { Component } from 'react';

export class FormToDo extends Component {
  state = {
    todo: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.reset();
  };

  reset = () => {
    this.setState({
      todo: '',
    });
  };

  render() {
    const { todo } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">
              Create Todo
            </label>
            <input
              name="todo"
              type="text"
              className="form-control"
              id="exampleInput"
              onChange={this.handleChange}
              value={todo}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add ToDo
          </button>
        </form>
      </>
    );
  }
}
