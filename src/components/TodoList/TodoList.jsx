import { Component } from 'react';
// import todo from '../../todo.json';
import { TodoItem } from 'components/TodoItem/TodoItem';
import { FormToDo } from 'components/FormToDo/FormToDo';
import { nanoid } from 'nanoid';

export class TodoList extends Component {
  state = {
    todoList: '',
    isDelete: false,
    isCreate: false,
  };

  componentDidMount() {
    if (localStorage.getItem('todo'))
      this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList.length !== this.state.todoList.length) {
      console.log('Edit todo list');
    }
    if (prevState.todoList.length > this.state.todoList.length) {
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.todoList.length < this.state.todoList.length) {
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      this.setState({ isCreate: true });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
    }
  }

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  addToDo = value => {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        { id: nanoid(), title: value, completed: false },
      ],
    }));
  };

  render() {
    const { isDelete, isCreate } = this.state;

    return (
      <>
        <h1>My Todo List</h1>
        {isDelete && (
          <div className="alert alert-danger" role="alert">
            ToDo delete successfully!
          </div>
        )}
        {isCreate && (
          <div className="alert alert-success" role="alert">
            Create ToDo successfully!
          </div>
        )}
        <FormToDo addToDo={this.addToDo} />
        {this.state.todoList && (
          <ul>
            {this.state.todoList.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleCheckCompleted={this.handleCheckCompleted}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
